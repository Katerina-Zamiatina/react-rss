import { fireEvent, render, screen } from '@testing-library/react';
import Input from '../Input';
import React from 'react';

const name = 'inputValue';

describe('Card', () => {
  it('renders Search component', () => {
    render(<Input name={name} />);
  });

  it('input value changes on user input', () => {
    const { getByRole } = render(<Input name={name} />);
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'new value' } });
    expect((input as HTMLInputElement).value).toBe('new value');
  });

  it('saves search value to local storage', () => {
    const { getByRole } = render(<Input name={name} />);
    const input = getByRole('textbox');

    fireEvent.input(input, { target: { value: 'new value' } });
    expect(localStorage.getItem(name)).toBe('new value');
  });
});
