import React, { Component } from 'react';
import './ErrorMessage.css';

interface ErrorMessageProps {
  message: string | undefined;
}

class ErrorMessage extends Component<ErrorMessageProps> {
  render() {
    const { message } = this.props;
    return <div className="error">{message}</div>;
  }
}

export default ErrorMessage;
