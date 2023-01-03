import { css, cx } from '@emotion/css';
import { capitalize } from 'lodash';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect, ConnectedProps } from 'react-redux';

import { GrafanaTheme2 } from '@grafana/data';
import { locationService, reportInteraction } from '@grafana/runtime';
import { Button, ConfirmModal, FieldSet, Icon, LinkButton, useStyles2 } from '@grafana/ui';
import { formatUtcOffset } from '@grafana/ui/src/components/DateTimePickers/TimeZonePicker/TimeZoneOffset';
import { contextSrv } from 'app/core/services/context_srv';

import {
  AccessControlAction,
  EnterpriseStoreState,
  ReportDashboard,
  ReportDataToRender,
  ReportState,
  SchedulingFrequency,
  StepKey,
} from '../../types';
import { BASE_URL, reportScales } from '../constants';
import { createReport, deleteReport, loadReport, updateReport } from '../state/actions';
import { clearReportState, initialState } from '../state/reducers';
import { getFormatted, getTimeRangeDisplay } from '../utils/dateTime';
import { getFormatsDisplay } from '../utils/formats';
import { getReportStateInfo } from '../utils/reportState';
import { showWorkdaysOnly } from '../utils/scheduler';
import { getSectionUrl } from '../utils/url';
import { getMissingFields } from '../utils/validation';

import { DashboardLink } from './DashboardLink';
import ReportForm from './ReportForm';

const mapStateToProps = (state: EnterpriseStoreState) => {
  const { report, isUpdated } = state.reports;
  return {
    report,
    isUpdated,
  };
};

const mapActionsToProps = {
  createReport,
  loadReport,
  deleteReport,
  updateReport,
  clearReportState,
};

const connector = connect(mapStateToProps, mapActionsToProps);
export type Props = ConnectedProps<typeof connector> & { reportId?: string };

export const Confirm = ({
  report,
  createReport,
  loadReport,
  updateReport,
  deleteReport,
  clearReportState,
  isUpdated,
  reportId,
}: Props) => {
  const { formats, options, schedule, dashboards } = report;
  const {
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const styles = useStyles2(getStyles);
  const editMode = !!reportId && !isUpdated;
  const disableSubmit = getMissingFields(report);
  const canDeleteReport = contextSrv.hasPermission(AccessControlAction.ReportingDelete);
  const canEditReport = contextSrv.hasPermission(AccessControlAction.ReportingWrite);
  const { showPlay, disableEdit, reportState } = getReportStateInfo(report);
  const { time: startTime, date: startDate } = getFormatted(schedule.startDate);
  const { time: endTime, date: endDate } = getFormatted(schedule.endDate);

  const onToggleReportState = async () => {
    let newState = ReportState.Scheduled;

    if ([ReportState.Draft, ReportState.Expired].includes(reportState)) {
      newState = reportState;
    } else if (reportState !== ReportState.Paused) {
      newState = ReportState.Paused;
    }

    // api call to update report data
    await updateReport({
      ...report,
      state: newState,
    });

    // Update report data on state
    if (reportId) {
      loadReport(parseInt(reportId, 10));
    }
  };

  const onDeleteReport = () => {
    deleteReport(report.id);
    setIsModalOpen(false);
    locationService.push(BASE_URL);
  };

  const submitReport = async () => {
    const createOrUpdate = !!report.id ? updateReport : createReport;
    if (report.state === ReportState.Draft) {
      const newState =
        report.schedule.frequency === SchedulingFrequency.Never ? ReportState.Never : ReportState.Scheduled;
      report = { ...report, state: newState };
    }
    await createOrUpdate(report);
    reportInteraction('reports_report_submitted', {
      replyToPopulated: !!report.replyTo,
      includesDashboardLink: report.enableDashboardUrl,
      numberOfDashboardsSelected: report.dashboards.length,
      templateVariablesSelected: report.dashboards.some((db) => !!db.reportVariables),
      orientation: report.options.orientation,
      layout: report.options.layout,
      frequency: report.schedule.frequency,
      sendTime: report.schedule.startDate ? 'later' : 'now',
      endDate: !!report.schedule.endDate,
    });
    clearReportState();
    locationService.push(BASE_URL);
  };

  const { orientation: defaultOrientation, layout: defaultLayout } = initialState.report.options;
  const reportData: ReportDataToRender = [
    {
      title: 'Select dashboard',
      id: StepKey.SelectDashboard,
      items: (dashboards || []).flatMap((field, index, arr) => {
        return [
          {
            title: `Source dashboard${index === 0 ? '*' : ''}`, // Only the first db is required
            value: field.dashboard?.uid ? (
              <DashboardLink name={field.dashboard.name} uid={field.dashboard?.uid} className={styles.dashboardLink} />
            ) : (
              ''
            ),
            id: 'name',
            required: true,
          },
          {
            title: 'Template variables',
            value: <VariablesPreview variables={field.reportVariables} className={styles.title} />,
          },
          { title: 'Time range', value: getTimeRangeDisplay(field.timeRange) },
          // Add empty row for spacing in case of multiple dashboards
          ...(arr.length > 1 ? [{ title: '', value: '' }] : []),
        ];
      }),
    },
    {
      title: 'Format report',
      id: StepKey.FormatReport,
      items: [
        { title: 'Preferred format*', value: getFormatsDisplay(formats), id: 'formats', required: true },
        ...(formats.includes('pdf')
          ? [
              { title: 'PDF orientation', value: capitalize(options.orientation || defaultOrientation) },
              { title: 'PDF layout', value: capitalize(options.layout || defaultLayout) },
              { title: 'Scale factor', value: reportScales[report.scaleFactor || 2] },
            ]
          : []),
      ],
    },
    {
      title: 'Schedule',
      id: StepKey.Schedule,
      items: [
        { title: 'Recurrence', value: capitalize(schedule.frequency) },
        ...(schedule.frequency === SchedulingFrequency.Custom
          ? [{ title: 'Repeat every', value: `${schedule.intervalAmount} ${schedule.intervalFrequency}` }]
          : []),
        ...(schedule.frequency !== SchedulingFrequency.Never
          ? [
              { title: 'Start date', value: startDate || 'Now' },
              { title: 'Start time', value: startTime || 'Now' },
              { title: 'End date', value: endDate },
              { title: 'End time', value: endTime },
              {
                title: 'Time zone',
                value: schedule.timeZone ? formatUtcOffset(Date.now(), schedule.timeZone) : '',
              },
            ]
          : []),
        ...(showWorkdaysOnly(schedule.frequency, schedule.intervalFrequency)
          ? [{ title: 'Send Monday to Friday only', value: schedule.workdaysOnly ? 'Yes' : 'No' }]
          : []),
      ],
    },
    {
      title: 'Share',
      id: StepKey.Share,
      items: [
        // id key is required for fields that need validation
        { title: 'Report name*', value: report.name, id: 'name', required: true },
        { title: 'Recipients*', value: report.recipients, id: 'recipients', required: true },
        { title: 'Reply-to-email', value: report.replyTo || 'none' },
        { title: 'Message', value: report.message || 'none' },
        { title: 'Dashboard link', value: report.enableDashboardUrl ? 'Included' : 'Not included' },
      ],
    },
  ];

  return (
    <ReportForm
      activeStep={StepKey.Confirm}
      confirmRedirect={!isSubmitSuccessful && isUpdated}
      disabled={disableSubmit}
      editMode={editMode}
      onSubmit={handleSubmit(submitReport)}
      reportId={reportId}
    >
      {editMode && (
        <div className={styles.editActions}>
          <Button
            type={'button'}
            variant={'secondary'}
            icon={showPlay ? 'play' : 'pause'}
            disabled={disableEdit || !canEditReport}
            onClick={onToggleReportState}
          >
            {showPlay ? 'Resume' : 'Pause'}
          </Button>
          <LinkButton
            href={getSectionUrl(StepKey.SelectDashboard, reportId)}
            type={'button'}
            variant={'secondary'}
            icon={'pen'}
            disabled={!canEditReport}
          >
            Edit report
          </LinkButton>
          <Button
            type={'button'}
            variant={'secondary'}
            icon={'trash-alt'}
            disabled={!canDeleteReport}
            onClick={() => setIsModalOpen(true)}
          >
            Delete report
          </Button>
          <ConfirmModal
            isOpen={isModalOpen}
            title={'Delete report'}
            body={'Are you sure you want to delete this report?'}
            confirmText={'Delete'}
            onConfirm={onDeleteReport}
            onDismiss={() => setIsModalOpen(false)}
          />
        </div>
      )}
      <FieldSet label={editMode ? '' : '5. Confirm'}>
        {reportData.map((section) => {
          const hasMissingFields = getMissingFields(report, section.id);
          return (
            <div className={cx(styles.section, hasMissingFields && styles.warningSection)} key={section.title}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                <LinkButton
                  variant={'secondary'}
                  fill={hasMissingFields ? 'solid' : 'outline'}
                  href={getSectionUrl(section.id, reportId)}
                  size={'sm'}
                >
                  Edit section
                </LinkButton>
              </div>
              {section.items
                // Undefined value means the item shouldn't be rendered
                .filter((item) => item.value !== undefined)
                .map((row, index) => {
                  const missingValue =
                    !!row.required && (!row.value || (Array.isArray(row.value) && !row.value.length));
                  return !!row.title ? (
                    <div className={styles.row} key={index}>
                      <div className={cx(styles.title, missingValue && styles.warning)}>{row.title}:</div>
                      <div className={cx(styles.value, row.value === 'none' && !missingValue ? styles.textMuted : '')}>
                        {missingValue ? <Icon name={'exclamation-triangle'} className={styles.warning} /> : row.value}
                      </div>
                    </div>
                  ) : (
                    <div className={styles.row} key={index} />
                  );
                })}
            </div>
          );
        })}
      </FieldSet>
    </ReportForm>
  );
};

export default connector(Confirm);

const getStyles = (theme: GrafanaTheme2) => {
  return {
    section: css`
      width: 100%;
      padding: ${theme.spacing(3)};
      background-color: ${theme.colors.background.secondary};
      margin-bottom: ${theme.spacing(3)};
    `,
    sectionHeader: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: ${theme.spacing(3)};
    `,
    warningSection: css`
      border: 1px solid ${theme.colors.warning.text};
    `,
    row: css`
      display: flex;
      width: 100%;
      padding: ${theme.spacing(1, 0)};
    `,
    warning: css`
      color: ${theme.colors.warning.text};
    `,
    title: css`
      width: 30%;
      color: ${theme.colors.text.secondary};
    `,
    textMuted: css`
      color: ${theme.colors.text.secondary};
    `,
    value: css`
      width: 70%;
      word-break: break-word;
    `,
    sectionTitle: css`
      margin: 0;
    `,
    dashboardLink: css`
      color: ${theme.colors.text.primary};
      font-size: ${theme.typography.body.fontSize};
      margin-top: 0;
    `,
    editActions: css`
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      margin-bottom: ${theme.spacing(3)};

      button,
      a {
        margin-left: ${theme.spacing(2)};
      }
    `,
  };
};

interface VariablesPreviewProps {
  className?: string;
  variables?: ReportDashboard['reportVariables'];
}

const VariablesPreview = ({ variables, className }: VariablesPreviewProps) => {
  const styles = useStyles2(getStyles);
  if (!variables || !Object.keys(variables).length) {
    return <span className={styles.textMuted}>none</span>;
  }

  return (
    <>
      {Object.entries(variables).map(([key, value]) => (
        <span key={key}>
          <span className={className}>{key}</span>: {value};{' '}
        </span>
      ))}
    </>
  );
};
