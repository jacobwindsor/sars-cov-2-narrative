import React from "react";
import { Heading, Text } from "grommet";
import { StatusCritical } from "grommet-icons";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error);
    console.info(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <Heading level="2">Something went wrong.</Heading>
          <StatusCritical size="large" color="brand" />
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
