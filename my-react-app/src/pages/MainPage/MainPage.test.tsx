import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from '../MainPage';

describe('MainPage', () => {
  it('renders Input component', () => {
    render(<MainPage />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders CardsList component', () => {
    render(<MainPage />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
