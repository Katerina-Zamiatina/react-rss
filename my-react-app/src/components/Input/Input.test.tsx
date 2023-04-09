import { fireEvent, render } from '@testing-library/react';
import Input from '../Input';
import React from 'react';
import { vi } from 'vitest';

const name = 'inputValue';

describe('Card', () => {
  it('renders Search component', () => {
    render(<Input name={name} onSubmit={() => {}} />);
  });

  it('input value changes on user input', () => {
    const { getByRole } = render(<Input name={name} onSubmit={() => {}} />);
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'new value' } });
    expect((input as HTMLInputElement).value).toBe('new value');
  });

  it('saves search value to local storage', () => {
    const onSubmit = vi.fn();
    const { getByRole, getByTestId } = render(<Input name={name} onSubmit={onSubmit} />);
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'new value' } });
    fireEvent.submit(getByTestId('search-form'));

    expect(localStorage.getItem(name)).toBe('new value');
    expect(onSubmit).toHaveBeenCalledWith('new value');
  });
});
