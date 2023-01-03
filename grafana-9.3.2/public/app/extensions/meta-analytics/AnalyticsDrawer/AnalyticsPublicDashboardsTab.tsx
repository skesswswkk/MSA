import React from 'react';
import { connect } from 'react-redux';
import AutoSizer from 'react-virtualized-auto-sizer';

import { FieldType } from '@grafana/data';
import { Themeable2, withTheme2 } from '@grafana/ui';
import { DashboardModel } from 'app/features/dashboard/state';

import { DashboardDailySummaryDTO } from '../api';
import { setDrawerOpen } from '../state/reducers';

import { AnalyticsTab } from './AnalyticsTab';

export interface Props extends Themeable2 {
  dashboard: DashboardModel;
  dailySummaries: DashboardDailySummaryDTO[];
  setDrawerOpen: typeof setDrawerOpen;
}

export class AnalyticsPublicDashboardsTab extends AnalyticsTab<Props> {
  render() {
    const { dailySummaries, theme } = this.props;
    if (dailySummaries && dailySummaries.length > 0) {
      const timeRange = this.buildTimeRange();

      return (
        <AutoSizer disableHeight>
          {({ width }) => {
            if (width === 0) {
              return null;
            }

            return (
              <main style={{ width }}>
                {this.renderChart({
                  title: 'Daily query count',
                  fields: [
                    {
                      name: 'queries',
                      type: FieldType.number,
                    },
                    {
                      name: 'cachedQueries',
                      type: FieldType.number,
                      label: 'cached queries',
                    },
                  ],
                  width,
                  timeRange,
                  showBars: false,
                  showLines: true,
                })}
                {this.renderChart({
                  title: 'Views last 30 days',
                  fields: [
                    {
                      name: 'views',
                      type: FieldType.number,
                    },
                  ],
                  width,
                  timeRange,
                  showBars: true,
                  showLines: false,
                })}
                {this.renderChart({
                  title: 'Errors last 30 days',
                  fields: [
                    {
                      name: 'errors',
                      type: FieldType.number,
                      color: theme.colors.error.border,
                    },
                  ],
                  width,
                  timeRange,
                  showBars: false,
                  showLines: true,
                })}
              </main>
            );
          }}
        </AutoSizer>
      );
    }

    return <span>No data.</span>;
  }
}

const mapDispatchToProps = {
  setDrawerOpen,
};

export default withTheme2(connect(null, mapDispatchToProps)(AnalyticsPublicDashboardsTab));
