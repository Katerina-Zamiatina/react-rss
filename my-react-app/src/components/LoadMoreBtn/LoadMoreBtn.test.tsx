import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import LoadMoreButton from './LoadMoreBtn';

describe('LoadMoreButton', () => {
  it('render Button', () => {
    const onClick = vi.fn();
    const { getByRole } = render(<LoadMoreButton onClick={onClick} />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const onClick = vi.fn();
    const { getByText } = render(<LoadMoreButton onClick={onClick} />);
    fireEvent.click(getByText('Load more'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
