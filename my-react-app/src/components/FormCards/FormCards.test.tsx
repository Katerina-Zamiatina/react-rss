import React from 'react';
import { screen } from '@testing-library/react';
import renderWithProvider from '../../utils/test-utils';
import FormCards from './FormCards';
import Form from '../Form';

describe('FormCards', () => {
  it('renders a card for each form submit in the list', () => {
    const { getByTestId } = renderWithProvider(<Form />);
    // const submitBtn = getByTestId('submit-btn');

    renderWithProvider(<FormCards />);

    expect(screen.getByTestId('form-item')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByText('author')).toBeInTheDocument();
    expect(screen.getByText('art')).toBeInTheDocument();
    expect(screen.getByText('added')).toBeInTheDocument();
    expect(screen.getByText('img')).toBeInTheDocument();
  });
});
