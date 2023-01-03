import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { NavModel } from '@grafana/data';
import { getRouteComponentProps } from 'app/core/navigation/__mocks__/routeProps';
import { configureStore } from 'app/store/configureStore';

import { ReportsListPage, Props } from './ReportsListPage';
import { getRendererMajorVersion } from './utils/renderer';

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock('@grafana/runtime/src/config', () => {
  return {
    ...(jest.requireActual('@grafana/runtime/src/config') as any),
    config: {
      buildInfo: {
        edition: 'Enterprise',
        version: '9.0.0',
        commit: 'abc123',
        env: 'dev',
        latestVersion: '',
        hasUpdate: false,
        hideVersion: false,
      },
      licenseInfo: {
        enabledFeatures: { 'reports.creation': true },
      },
      featureToggles: {},
      rendererAvailable: true,
    },
  };
});

jest.mock('app/core/core', () => {
  return {
    contextSrv: {
      hasPermission: () => true,
    },
  };
});

jest.mock('./utils/renderer', () => {
  return {
    getRendererMajorVersion: jest.fn(),
  };
});

const setup = (rendererMajorVersion: number | null) => {
  const store = configureStore();
  (getRendererMajorVersion as jest.Mock).mockReturnValue(rendererMajorVersion);

  const props: Props = {
    ...getRouteComponentProps(),
    reports: [],
    reportCount: 0,
    hasFetched: true,
    navModel: { node: {}, main: {} } as NavModel,
    searchQuery: '',

    getReports: jest.fn(),
    deleteReport: jest.fn(),
    updateReport: jest.fn(),
  };

  render(
    <Provider store={store}>
      <ReportsListPage {...props} />
    </Provider>
  );
};

describe('ReportsListPage', () => {
  const warningMatcher = /using an old version of the image renderer/;

  it('should render a warning when the renderer version is too old', () => {
    setup(2);
    const header = screen.getByText(warningMatcher);

    expect(header).toBeInTheDocument();
  });

  it('should not render a warning when the renderer version is new enough', () => {
    setup(3);
    const header = screen.queryByText(warningMatcher);

    expect(header).not.toBeInTheDocument();
  });

  it('should not render a warning when the renderer version is unavailable', () => {
    setup(null);
    const header = screen.queryByText(warningMatcher);

    expect(header).not.toBeInTheDocument();
  });
});
