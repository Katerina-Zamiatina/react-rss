import { render, screen } from '@testing-library/react';
import React from 'react';
import CustomErrorMessage from './CustomErrorMessage';

describe('Error message', () => {
  it('should render error message', () => {
    const errorMessage = 'This field is required';
    render(<CustomErrorMessage message={errorMessage} />);
    expect(screen.getByTestId('custom-error')).toBeInTheDocument();
  });
});
