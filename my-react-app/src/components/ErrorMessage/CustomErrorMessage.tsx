import React from 'react';
import './CustomErrorMessage.css';

interface ErrorMessageProps {
  message: string | undefined;
}

const CustomErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="error" data-testid="custom-error">
      {message}
    </div>
  );
};

export default CustomErrorMessage;
