import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
    expect(screen.getByLabelText(/artwork/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('should show validation errors on submit when fields are empty', () => {
    const onSubmit = vi.fn();
    render(<Form onSubmit={onSubmit} />);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/title is required/i)).toBeInTheDocument();
    expect(screen.getByText(/type is required/i)).toBeInTheDocument();
    expect(screen.getByText(/agreement is required/i)).toBeInTheDocument();
    expect(screen.getByText(/owner is required/i)).toBeInTheDocument();
    expect(screen.getByText(/author is required/i)).toBeInTheDocument();
    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/image is required/i)).toBeInTheDocument();

    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
});
