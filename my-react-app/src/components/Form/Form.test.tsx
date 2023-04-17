import React from 'react';
import { screen } from '@testing-library/react';
import renderWithProvider from '../../utils/test-utils';
import Form from './Form';

describe('Should render form', () => {
  it('should render correctly', () => {
    renderWithProvider(<Form />);
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/author/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/added at/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/type/i)).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /yes/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /no/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/artwork/i)).toBeInTheDocument();

    const submitBtn = screen.getByRole('button', { name: /submit/i });
    expect(submitBtn).toBeInTheDocument();
  });
});
