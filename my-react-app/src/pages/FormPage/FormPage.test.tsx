import React from 'react';
import { screen } from '@testing-library/react';
import renderWithProvider from '../../utils/test-utils';
import FormPage from './FormPage';

describe('FormPage component', () => {
  it('should render the Form component', () => {
    renderWithProvider(<FormPage />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
