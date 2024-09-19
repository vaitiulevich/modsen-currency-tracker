import { render, screen } from '@testing-library/react';
import { useScreenSize } from '@utils/hooks/useScreenSize';

const TestComponent = () => {
  const isDesktop = useScreenSize();

  return <div>{isDesktop ? 'Desktop' : 'Mobile'}</div>;
};

describe('useScreenSize', () => {
  it('should return true if screen width is greater than tablet breakpoint', async () => {
    window.innerWidth = 1025;
    window.dispatchEvent(new Event('resize'));

    render(<TestComponent />);
    expect(screen.getByText('Desktop')).toBeInTheDocument();
  });

  it('should return false if screen width is less than or equal to tablet breakpoint', async () => {
    window.innerWidth = 400;
    window.dispatchEvent(new Event('resize'));

    render(<TestComponent />);
    expect(screen.getByText('Mobile')).toBeInTheDocument();
  });
});
