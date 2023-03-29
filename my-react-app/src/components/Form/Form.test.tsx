import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Form from './Form';

describe('Should submit the form correctly', () => {
  it('should render correctly', () => {
    const onSubmit = vi.fn();
    render(<Form onSubmit={onSubmit} />);

    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/author/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/added at/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/type/i)).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /yes/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /no/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/artwork/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});
