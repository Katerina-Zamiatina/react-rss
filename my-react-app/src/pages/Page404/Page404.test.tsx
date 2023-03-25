import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
// import { describe, it } from 'vitest';
import Page404 from './Page404';

describe('Page 404', () => {
  it('renders "Not Found" text and a "GO HOME" link', () => {
    render(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>
    );
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /go home/i })).toBeInTheDocument();
  });
});
