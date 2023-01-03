import { css, cx } from '@emotion/css';
import React, { useEffect } from 'react';
import { Control, useFieldArray, useForm, UseFormSetValue } from 'react-hook-form';
import { connect, ConnectedProps } from 'react-redux';

import { GrafanaTheme2, RawTimeRange, TimeRange } from '@grafana/data';
import { Button, Field, FieldSet, InlineField, InputControl, TimeRangeInput, useStyles2 } from '@grafana/ui';
import { DashboardPickerByID, DashboardPickerItem } from 'app/core/components/OptionsUI/DashboardPickerByID';
import { variableAdapters } from 'app/features/variables/adapters';
import { hasOptions } from 'app/features/variables/guard';
import { cleanUpVariables } from 'app/features/variables/state/actions';
import { getVariablesByKey } from 'app/features/variables/state/selectors';
import { VariableHide, VariableModel } from 'app/features/variables/types';

import { EnterpriseStoreState, ReportDashboard, ReportFormData, StepKey } from '../../types';
import { getRange, parseRange } from '../../utils/time';
import { initVariables } from '../state/actions';
import { updateReportProp } from '../state/reducers';
import { canEditReport } from '../utils/permissions';
import { applyUrlValues, getUrlValues } from '../utils/url';
import { refreshOnTimeRange, variablesToCsv } from '../utils/variables';

import { DashboardLink } from './DashboardLink';
import ReportForm from './ReportForm';

const mapStateToProps = (state: EnterpriseStoreState) => {
  const { report } = state.reports;
  return {
    report,
    // this prop is necessary to make sure template variables are properly updated
    templating: state.templating.keys,
  };
};

const mapActionsToProps = {
  updateReportProp,
  initVariables,
  cleanUpVariables,
};

const connector = connect(mapStateToProps, mapActionsToProps);
export type Props = ConnectedProps<typeof connector> & { reportId?: string };

const defaultDashboard: ReportDashboard = {
  dashboard: undefined,
  timeRange: { from: '', to: '' },
  reportVariables: {},
};
export const SelectDashboards = ({ report, reportId, updateReportProp, initVariables, cleanUpVariables }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { isDirty },
    setValue,
    getValues,
    watch,
  } = useForm({
    defaultValues: { dashboards: applyUrlValues(report).dashboards || [defaultDashboard] },
  });
  const {
    fields,
    append: addDashboard,
    remove: removeDashboard,
    //@ts-expect-error react-hook-form doesn't have good support for recursive types
  } = useFieldArray({
    control,
    name: 'dashboards',
    keyName: 'fieldId',
  });
  //@ts-expect-error
  const watchDashboards = watch('dashboards');
  const styles = useStyles2(getStyles);

  useEffect(() => {
    const urlValues = getUrlValues();

    if (urlValues) {
      // If new report is created, apply the values from URL params for variables
      const { dashboard, variables, timeRange } = urlValues;
      if (variables && dashboard.uid) {
        initVariables(dashboard.uid, variables, timeRange);
      }

      if (dashboard.uid) {
        setValue('dashboards.0.dashboard', { ...dashboard, id: parseInt(dashboard.id!, 10) } as any, {
          shouldDirty: true,
        });
      }
    }
  }, [initVariables, report, setValue]);

  const onDashboardChange = (index: number) => (dashboard: DashboardPickerItem | undefined, uid?: string) => {
    // Reset time range when dashboard changes
    setValue(`dashboards.${index}.timeRange` as const, { from: '', to: '' });
    const dashboardValues = getValues().dashboards?.map(({ dashboard }) => dashboard);

    // Handle clearing selected dashboard
    if (!dashboard) {
      if (!uid) {
        return;
      }
      const isDuplicate = dashboardValues.some((db) => db?.uid === uid);
      if (!isDuplicate) {
        cleanUpVariables(uid);
      }
      return;
    }

    const isDuplicate = dashboardValues.filter((db) => db?.uid === dashboard.uid).length > 1;
    if (dashboard.uid && !isDuplicate) {
      const savedDashboard = report.dashboards?.[index];
      const defaultVars = dashboard.id === savedDashboard?.dashboard?.id ? savedDashboard?.reportVariables : undefined;
      initVariables(dashboard.uid, defaultVars);
    }
  };

  const saveData = (data: Partial<ReportFormData>) => {
    const dashboards = collectDashboards(data.dashboards);

    if (isDirty) {
      updateReportProp({ ...report, dashboards });
    }
  };

  const collectDashboards = (dashboards?: ReportDashboard[]) => {
    const dbs = dashboards
      ?.filter(({ dashboard }) => dashboard?.uid)
      .map(({ dashboard, timeRange }) => {
        const uid = dashboard?.uid;
        return {
          dashboard: uid
            ? {
                uid,
                id: dashboard?.id,
                name: dashboard?.name,
              }
            : undefined,
          timeRange: parseRange(timeRange?.raw),
          reportVariables: uid
            ? variablesToCsv(getVariablesByKey(uid).filter((v) => v.hide !== VariableHide.hideVariable))
            : undefined,
        };
      });

    return dbs?.length ? dbs : [defaultDashboard];
  };

  const getFormData = () => {
    return { dashboards: collectDashboards(getValues().dashboards) };
  };

  return (
    <ReportForm
      activeStep={StepKey.SelectDashboard}
      onSubmit={handleSubmit(saveData)}
      confirmRedirect={isDirty}
      getFormData={getFormData}
      reportId={reportId}
    >
      <FieldSet label={'1. Select dashboard'}>
        <>
          {fields.map((f, index) => {
            const uid = watchDashboards[index].dashboard?.uid || '';
            const reportVariables = watchDashboards[index]?.reportVariables;
            const variables = uid ? getVariablesByKey(uid) : [];
            const onTimeRangeChange = (timeRange: RawTimeRange) => {
              if (refreshOnTimeRange(variables)) {
                initVariables(uid, reportVariables, timeRange);
              }
            };
            return (
              <div key={f.fieldId} className={cx(styles.section, watchDashboards.length > 1 && styles.sectionBorder)}>
                <SelectDashboard
                  field={f}
                  dashboardUid={uid}
                  onDashboardChange={onDashboardChange(index)}
                  variables={variables}
                  control={control}
                  index={index}
                  setValue={setValue}
                  selectedDashboards={watchDashboards}
                  onTimeRangeChange={onTimeRangeChange}
                />
                {fields.length > 1 && (
                  <Button
                    className={styles.removeBtn}
                    variant={'secondary'}
                    fill={'outline'}
                    icon={'trash-alt'}
                    onClick={() => removeDashboard(index)}
                  >
                    Remove dashboard
                  </Button>
                )}
              </div>
            );
          })}
          <Button type={'button'} variant={'secondary'} onClick={() => addDashboard(defaultDashboard)}>
            + Add another dashboard
          </Button>
        </>
      </FieldSet>
    </ReportForm>
  );
};

interface SelectDashboardProps {
  field: ReportDashboard;
  index: number;
  variables: VariableModel[];
  onDashboardChange: (db: DashboardPickerItem | undefined, uid?: string) => void;
  control: Control<{ dashboards: ReportDashboard[] }>;
  dashboardUid?: string;
  setValue: UseFormSetValue<{ dashboards: ReportDashboard[] }>;
  selectedDashboards: ReportDashboard[];
  onTimeRangeChange: (timeRange: RawTimeRange) => void;
}

export const SelectDashboard = ({
  field,
  index,
  onDashboardChange,
  variables,
  control,
  dashboardUid,
  setValue,
  onTimeRangeChange,
  selectedDashboards = [],
}: SelectDashboardProps) => {
  const timeRange = getRange(field.timeRange);
  const reportVariables = variables.filter((v) => v.hide !== VariableHide.hideVariable);
  const hasVariables = dashboardUid !== undefined && Boolean(reportVariables.length);
  const isDuplicate = selectedDashboards.filter(({ dashboard }) => dashboard?.uid === dashboardUid).length > 1;
  const firstIndex = selectedDashboards.findIndex(({ dashboard }) => dashboard?.uid === dashboardUid);
  const hideVariables = isDuplicate && firstIndex !== index;

  return (
    <>
      <Field label="Source dashboard" required>
        <>
          <InputControl
            name={`dashboards.${index}.dashboard` as const}
            control={control}
            render={({ field: { onChange, ref, ...fieldProps } }) => {
              return (
                <DashboardPickerByID
                  {...fieldProps}
                  aria-label={'Source dashboard'}
                  isClearable
                  optionLabel={'name'}
                  disabled={!canEditReport}
                  onChange={(dashboard) => {
                    // Calling onChange with null is the correct way to reset selected value in react-hook-form
                    onChange(dashboard || null);
                    onDashboardChange(dashboard, dashboardUid);
                  }}
                />
              );
            }}
          />
          <DashboardLink uid={dashboardUid} />
        </>
      </Field>
      {hasVariables && (
        <Field
          label={'Template variables'}
          description={
            hideVariables &&
            'When adding the same dashboard multiple times in one report, template variables that you selected first\n' +
              'are applied to all instances of that dashboard in the report.'
          }
        >
          {hideVariables ? (
            // Field expects non-optional children, so we provide an empty fragment to keep it happy
            <></>
          ) : (
            <>
              {reportVariables.map((variable) => {
                const { picker: Picker, setValue: updateVariable } = variableAdapters.get(variable.type);
                return (
                  <InlineField label={variable.name} key={variable.name} labelWidth={16} disabled={!canEditReport}>
                    <Picker
                      variable={variable}
                      readOnly={false}
                      onVariableChange={(updated: VariableModel) => {
                        if (hasOptions(updated)) {
                          updateVariable(updated, updated.current);
                          setValue(`dashboards.${index}.reportVariables`, variablesToCsv([updated]), {
                            shouldDirty: true,
                          });
                        }
                      }}
                    />
                  </InlineField>
                );
              })}
            </>
          )}
        </Field>
      )}
      <Field
        label="Time range"
        description="Generate report with the data from specified time range. If custom time range is empty the time range from the report's dashboard is used."
        disabled={!canEditReport}
      >
        <InputControl
          control={control}
          name={`dashboards.${index}.timeRange` as const}
          defaultValue={timeRange}
          render={({ field: { ref, value, onChange, ...field } }) => {
            return (
              <TimeRangeInput
                value={(value || timeRange) as unknown as TimeRange}
                onChange={(timeRange) => {
                  onChange(timeRange);
                  onTimeRangeChange(timeRange.raw);
                }}
                {...field}
                clearable
              />
            );
          }}
        />
      </Field>
    </>
  );
};
export default connector(SelectDashboards);

const getStyles = (theme: GrafanaTheme2) => {
  return {
    removeBtn: css`
      margin-bottom: ${theme.spacing(2)};
    `,
    section: css`
      padding-bottom: ${theme.spacing(2)};
    `,
    sectionBorder: css`
      &:not(:last-of-type) {
        border-bottom: 1px solid ${theme.colors.border.weak};
        margin-bottom: ${theme.spacing(3)};
      }
    `,
    infoText: css`
      color: ${theme.colors.text.secondary};
      font-size: ${theme.typography.size.sm};
      font-weight: ${theme.typography.fontWeightRegular};
    `,
  };
};
