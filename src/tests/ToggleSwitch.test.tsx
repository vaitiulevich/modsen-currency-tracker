import React from 'react';
import ToggleSwitch, {
  ToggleSwitchProps,
} from '@components/ToggleSwitch/ToggleSwitch';
import { ThemeProvider } from '@store/ThemeContext';
import { fireEvent, render, screen } from '@testing-library/react';

const renderToggleSwitch = ({ checked, onChange }: ToggleSwitchProps) => {
  return render(
    <ThemeProvider>
      <ToggleSwitch checked={checked} onChange={onChange} />
    </ThemeProvider>,
  );
};

describe('ToggleSwitch Component', () => {
  test('renders with correct initial state', () => {
    const onChangeMock = jest.fn();

    const { container } = renderToggleSwitch({
      checked: false,
      onChange: onChangeMock,
    });

    const toggleInput = container.querySelector('input[type="checkbox"]');
    expect(toggleInput).not.toBeChecked();
  });

  test('calls onChange when toggled', () => {
    const onChangeMock = jest.fn();
    const { container } = renderToggleSwitch({
      checked: false,
      onChange: onChangeMock,
    });

    const toggleInput = container.querySelector('input[type="checkbox"]');
    if (toggleInput) {
      fireEvent.click(toggleInput);

      expect(onChangeMock).toHaveBeenCalledTimes(1);
    } else {
      throw new Error('Checkbox input not found');
    }
  });

  test('renders checked state correctly', () => {
    const onChangeMock = jest.fn();
    const { container } = renderToggleSwitch({
      checked: true,
      onChange: onChangeMock,
    });

    const toggleInput = container.querySelector('input[type="checkbox"]');
    if (toggleInput) {
      expect(toggleInput).toBeChecked();
    } else {
      throw new Error('Checkbox input not found');
    }
  });
});
