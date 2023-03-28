import React from 'react';
import './ErrorMessage.css';

interface ErrorMessageProps {
  message: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div className="error">{message}</div>;
};

export default ErrorMessage;
