import React from 'react';
import Menu from '@components/Menu/Menu';
import { ThemeProvider } from '@store/ThemeContext';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Menu Component', () => {
  test('renders menu items', () => {
    render(
      <ThemeProvider>
        <Menu />
      </ThemeProvider>,
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Timeline/i)).toBeInTheDocument();
    expect(screen.getByText(/Bank card/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  test('calls toggleMenu when a menu item is clicked', () => {
    const toggleMenuMock = jest.fn();
    render(
      <ThemeProvider>
        <Menu toggleMenu={toggleMenuMock} />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText(/Home/i));

    expect(toggleMenuMock).toHaveBeenCalledTimes(1);
  });
});
