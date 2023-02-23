import React from 'react';

function ErrorBoundary(props) {
  const [errors, setErrors] = React.useState({ error: null, errorInfo: null });

  // You can also log the error to an error reporting service
  function componentDidCatch(error, errorInfo) {
    setErrors({
      error: error,
      errorInfo: errorInfo,
    });
  }

  return !!errors.error ? <h1>Something when wrong</h1> : props.children;
}

export default ErrorBoundary;
