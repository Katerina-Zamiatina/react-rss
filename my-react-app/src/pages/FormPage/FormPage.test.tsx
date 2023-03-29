import React from 'react';
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';
import { FormState } from '../../types/types';
import FormCards from '../../components/FormCards/';

describe('FormPage component', () => {
  it('should render the Form component', () => {
    render(<FormPage />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should add a new form card on form submission', () => {
    const mockFormData: FormState = {
      id: 'title',
      title: 'Test title',
      author: 'Test author',
      addedAt: '2023-01-22',
      type: 'Sculpture',
      agreement: true,
      owner: true,
      artwork: undefined,
    };
    render(<FormCards cards={new Array(mockFormData)} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
  });
});
