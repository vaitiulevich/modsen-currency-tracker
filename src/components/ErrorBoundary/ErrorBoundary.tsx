import React, { Component, ErrorInfo } from 'react';
import { images } from '@constants/images';
import { ERR_BOUNDARY_MESS } from '@constants/messages';

import { ErrorBoundaryComponent, ErrorBoundaryTitle } from './styled';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(ERR_BOUNDARY_MESS, error, errorInfo);
    this.setState({ hasError: true });
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
