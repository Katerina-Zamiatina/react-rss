import React from 'react';
import '../FormInput/FormInput.css';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { FormState } from '../../types/types';
import CustomErrorMessage from '../ErrorMessage';
export interface FormInputProps {
  type: 'text' | 'select' | 'checkbox' | 'file' | 'date' | 'radio';
  id: keyof FormState;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
}

const FormRadio: React.FC<FormInputProps> = ({ id, type, register, errors }) => {
  return (
    <div className="radio-wrapper">
      <span className="question">This is Your Art? </span>
      <label htmlFor="ownerMy">
        <span className="radio-answer">Yes</span>
        <input
          id="ownerMy"
          type={type}
          value="Yes"
          {...register('owner', {
            required: 'Owner is required',
          })}
        />
      </label>
      <label htmlFor="owner">
        <span className="radio-answer">No</span>
        <input
          id="owner"
          type={type}
          value="No"
          {...register('owner', {
            required: 'Owner is required',
          })}
        />
      </label>
      <ErrorMessage
        errors={errors}
        name={id}
        render={({ messages }) => {
          return (
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <CustomErrorMessage key={type} message={message as string} />
            ))
          );
        }}
      />
    </div>
  );
};

export default FormRadio;
