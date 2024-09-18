import { Component, ErrorInfo, ReactNode } from 'react';
import { images } from '@constants/images';
import { ERR_BOUNDARY_MESS } from '@constants/messages';

import { ErrorBoundaryComponent, ErrorBoundaryTitle } from './styled';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by Error Boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryComponent>
          <img src={images.logo} alt="logo" />
          <ErrorBoundaryTitle>Something went wrong</ErrorBoundaryTitle>
        </ErrorBoundaryComponent>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
