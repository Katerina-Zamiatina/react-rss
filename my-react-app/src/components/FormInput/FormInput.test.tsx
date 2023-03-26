import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FormInput from './FormInput';
import { vi } from 'vitest';
import { FormInputProps } from 'types/types';

describe('FormInput component', () => {
  const onChangeMock = vi.fn();
  const props: FormInputProps = {
    label: 'Test Input',
    type: 'text',
    id: 'title',
    onChange: onChangeMock,
  };

  it('should render the input with the correct label and id', () => {
    render(<FormInput {...props} />);

    const inputElement = screen.getByLabelText(props.label) as HTMLInputElement;
    expect(inputElement.id).toBe(props.id);
  });

  it('should call the onChange function when the input value is changed', () => {
    render(<FormInput {...props} />);

    const inputElement = screen.getByLabelText(props.label) as HTMLInputElement;
    const inputValue = 'Test value';
    fireEvent.change(inputElement, { target: { value: inputValue } });

    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0]).toBe(props.id);
    expect(onChangeMock.mock.calls[0][1]).toBe(inputValue);
  });
});
