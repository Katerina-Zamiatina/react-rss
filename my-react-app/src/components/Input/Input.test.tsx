import { fireEvent } from '@testing-library/react';
import Input from '../Input';
import React from 'react';
import { vi } from 'vitest';
import renderWithProvider from '../../utils/test-utils';

describe('Input search', () => {
  it('renders Search component', () => {
    renderWithProvider(<Input onSubmit={() => {}} />);
  });

  it('input value changes on user input', () => {
    const { getByRole } = renderWithProvider(<Input onSubmit={() => {}} />);
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'new value' } });
    expect((input as HTMLInputElement).value).toBe('new value');
  });

  it('dispatches setValue action on form submit', () => {
    const onSubmit = vi.fn();
    const { getByRole, getByTestId } = renderWithProvider(<Input onSubmit={onSubmit} />);
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'new value' } });
    fireEvent.submit(getByTestId('search-form'));

    expect(onSubmit).toHaveBeenCalledWith('new value');
  });
});
