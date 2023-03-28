import React from 'react';
import '../FormInput/FormInput.css';
import {  UseFormRegister, FieldValues } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import { FormState } from '../../types/types';

export interface FormInputProps {
  type: 'text' | 'select' | 'checkbox' | 'file' | 'date' | 'radio';
  id: keyof FormState;
  register: UseFormRegister<FieldValues>;
  required: boolean;
}

const FormRadio: React.FC<FormInputProps> = ({ id, type, register, required }) => {
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
            required,
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
            required,
          })}
        />
      </label>
    </div>
  );
};

export default FormRadio;
