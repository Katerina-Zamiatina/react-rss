import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import FormRadio, { FormInputProps } from './FormRadio';

describe('FormRadio Component', () => {
  const props: FormInputProps = {
    id: 'owner',
    type: 'radio',
    errors: {},
    register: vi.fn(),
  };

  it('should render the component with the correct labels and input types', () => {
    render(<FormRadio {...props} />);
    const yesRadio = screen.getByLabelText('Yes');
    const noRadio = screen.getByLabelText('No');

    expect(yesRadio).toBeInTheDocument();
    expect(noRadio).toBeInTheDocument();
    expect(yesRadio).toHaveAttribute('type', 'radio');
    expect(noRadio).toHaveAttribute('type', 'radio');
    expect(yesRadio).toHaveAttribute('value', 'Yes');
    expect(noRadio).toHaveAttribute('value', 'No');
  });
});
