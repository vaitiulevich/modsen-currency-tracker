import React from 'react';
import ConversionModal from '@components/ConversionModal/ConversionModal';
import { ALL_CURRENCY } from '@constants/currency';
import { ThemeProvider } from '@store/ThemeContext';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ConversionModalProps } from 'interfaces/convirsation.interface';

jest.mock('@constants/urls', () => ({
  URL_CURRENCY_API: 'mockApiUrl',
  endPoints: {
    latestCurrency: '/latest',
  },
}));

const mockOnRequestClose = jest.fn();

const mockConversionData = {
  code: 'USD',
  value: 1,
};

const renderModal = ({
  isOpen,
  onRequestClose,
  conversionData,
}: ConversionModalProps) => {
  return render(
    <ThemeProvider>
      <ConversionModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        conversionData={conversionData}
      />
    </ThemeProvider>,
  );
};

describe('ConversionModal', () => {
  beforeEach(() => {
    localStorage.setItem(
      'https://api.example.com/latestCurrency',
      JSON.stringify({
        data: {
          data: {
            EUR: { code: 'EUR', value: 0.85 },
            GBP: { code: 'GBP', value: 0.75 },
            USD: { code: 'USD', value: 1 },
          },
        },
      }),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('renders correctly when open', () => {
    renderModal({
      isOpen: true,
      onRequestClose: mockOnRequestClose,
      conversionData: mockConversionData,
    });

    expect(screen.getByText(/Currency Exchange/i)).toBeInTheDocument();
    expect(screen.getByText(/From: USD/i)).toBeInTheDocument();
  });

  test('displays available currencies correctly', () => {
    renderModal({
      isOpen: true,
      onRequestClose: mockOnRequestClose,
      conversionData: mockConversionData,
    });

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    expect(screen.getByText('EUR')).toBeInTheDocument();
    expect(screen.getByText('JPY')).toBeInTheDocument();
  });

  test('validates input amount', () => {
    renderModal({
      isOpen: true,
      onRequestClose: mockOnRequestClose,
      conversionData: mockConversionData,
    });

    const input = screen.getByLabelText(/Amount:/i);
    fireEvent.change(input, { target: { value: '0' } });
    expect(screen.getByText(/Minimum value 1/i)).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '1000001' } });
    expect(screen.getByText(/Maximum value 1 000 000/i)).toBeInTheDocument();
  });

  test('calls onRequestClose when close button is clicked', () => {
    renderModal({
      isOpen: true,
      onRequestClose: mockOnRequestClose,
      conversionData: mockConversionData,
    });

    const closeButton = screen.getByRole('button', { name: /Close/i });
    fireEvent.click(closeButton);
    expect(mockOnRequestClose).toHaveBeenCalled();
  });

  test('calculates conversion result correctly', async () => {
    renderModal({
      isOpen: true,
      onRequestClose: mockOnRequestClose,
      conversionData: mockConversionData,
    });

    const input = screen.getByLabelText(/Amount:/i);
    fireEvent.change(input, { target: { value: '100' } });

    const exchangeButton = screen.getByRole('button', { name: /Exchange/i });
    fireEvent.click(exchangeButton);

    expect(
      await screen.findByText(/Currency conversion result:/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
  });
});
