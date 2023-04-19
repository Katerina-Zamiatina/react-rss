import React from 'react';
import { render, screen } from '@testing-library/react';
import { FieldValues, FieldErrors } from 'react-hook-form';
import FormInput from './FormInput';
import { vi } from 'vitest';
import { FormInputProps } from 'types/types';

describe('FormInput component', () => {
  const onRegisterMock = vi.fn();
  const props: FormInputProps = {
    label: 'Title',
    type: 'text',
    id: 'title',
    errors: {
      type: 'required',
      message: 'Title is required',
    } as unknown as FieldErrors<FieldValues>,
    register: onRegisterMock,
  };

  it('should render the input with the correct label and id', () => {
    render(<FormInput {...props} />);

    const inputElement = screen.getByLabelText(props.label) as HTMLInputElement;
    expect(inputElement.id).toBe(props.id);
  });

  it('should call the register function with the correct id', () => {
    render(<FormInput {...props} />);

    expect(onRegisterMock).toBeCalledTimes(2);
    expect(onRegisterMock).toBeCalledWith(props.id, expect.any(Object));
  });

  it('should call the register function with the required validation for text inputs', () => {
    render(<FormInput {...props} type="text" />);

    expect(onRegisterMock.mock.calls[0][1].required).toBeDefined();
    expect(onRegisterMock.mock.calls[0][1].pattern).toBeDefined();
  });

  it('should call the register function with the required validation for date inputs', () => {
    render(<FormInput {...props} type="date" />);

    expect(onRegisterMock.mock.calls[0][1].required).toBeDefined();
  });

  it('should call the register function for select inputs', () => {
    render(<FormInput {...props} type="select" />);

    expect(onRegisterMock.mock.calls[0][1].required).toBeDefined();
  });

  it('should call the register function for file inputs', () => {
    render(<FormInput {...props} type="file" />);

    expect(onRegisterMock.mock.calls[0][1].required).toBeDefined();
  });

  it('should call the register function for checkbox', () => {
    render(<FormInput {...props} type="checkbox" />);

    expect(onRegisterMock.mock.calls[0][1].required).toBeDefined();
  });

  // it('renders component with Error', () => {
  //   render(<FormInput {...props} errors={props.errors}/>);

  //   expect(screen.getByText(props.errors[props.id].message)).toBeInTheDocument();
  // });
});
