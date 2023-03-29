import React from 'react';
import './ErrorMessage.css';

interface ErrorMessageProps {
  message: string | undefined;
}

const CustomErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div className="error">{message}</div>;
};

export default CustomErrorMessage;
