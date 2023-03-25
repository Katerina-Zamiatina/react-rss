import React from 'react';
import { render, screen } from '@testing-library/react';
// import { describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders header', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });
});
