import FinancialChart from '@components/FinancialChart/FinancialChart';
import { ThemeProvider } from '@store/ThemeContext';
import TimelineContext, { TimelineContextType } from '@store/TimelineContext';
import { fireEvent, render, screen } from '@testing-library/react';
import { TimelineData } from 'interfaces/timeline.interface';

const mockContext: TimelineContextType = {
  currentFinance: {
    x: new Date(),
    o: 1,
    c: 1,
    h: 1,
    l: 1,
  },
  onSetCurrentFinance: jest.fn(),
  data: [],
  addData: jest.fn(),
  setTimlineData: jest.fn(),
};

jest.mock('@store/TimelineContext', () => ({
  __esModule: true,
  default: {
    Consumer: ({
      children,
    }: {
      children: (value: TimelineContextType) => React.ReactNode;
    }) => children(mockContext),
  },
}));

jest.mock('react-chartjs-2', () => ({
  Chart: jest.fn(() => <canvas data-testid="chart" />),
}));

const renderFinancialChart = (data: TimelineData[]) => {
  return render(
    <ThemeProvider>
      <FinancialChart
        data={data}
        dateMin={new Date('2024-01-01').getTime()}
        dateMax={new Date('2024-01-04').getTime()}
      />
    </ThemeProvider>,
  );
};

describe('FinancialChart', () => {
  const mockData = [
    { x: new Date('2024-01-01'), o: 100, h: 110, l: 90, c: 105 },
    { x: new Date('2024-01-02'), o: 105, h: 115, l: 95, c: 110 },
    { x: new Date('2024-01-03'), o: 110, h: 120, l: 100, c: 115 },
  ];

  test('renders chart when sufficient data is provided', () => {
    renderFinancialChart(mockData);

    expect(screen.getByTestId('chart')).toBeInTheDocument();
  });

  test('opens modal on data point click', () => {
    renderFinancialChart(mockData);

    const chartCanvas = screen.getByTestId('chart');
    fireEvent.click(chartCanvas);

    expect(mockContext.onSetCurrentFinance).toHaveBeenCalled();
  });

  test('shows loader when insufficient data is provided', () => {
    renderFinancialChart([]);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
