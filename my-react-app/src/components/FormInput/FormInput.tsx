import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import CustomErrorMessage from '../ErrorMessage';
import { ErrorMessage } from '@hookform/error-message';
import { FormState } from '../../types/types';
import './FormInput.css';

export interface FormInputProps {
  label: string;
  type: 'text' | 'select' | 'checkbox' | 'file' | 'date' | 'radio';
  id: keyof FormState;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
}

const FormInput: React.FC<FormInputProps> = ({ id, label, type, register, errors }) => {
  const options = ['Sculpture', 'Painting', 'Architecture', 'Photography'];
  const errorMessage = `${id.charAt(0).toUpperCase() + id.slice(1)} is required`;

  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {type === 'text' && (
        <input
          id={id}
          type={type}
          className="form-input"
          {...register(id, {
            required: errorMessage,
            pattern: {
              value: /^[A-ZА-Я]/u,
              message: 'Must start with a capital letter ',
            },
          })}
        />
      )}
      {type === 'date' && (
        <input
          id={id}
          type={type}
          className="form-input"
          {...register(id, {
            required: errorMessage,
            validate: (value) => {
              const date = new Date(value);
              const today = new Date();
              return date <= today || "Couldn't be in future";
            },
          })}
        />
      )}
      {type === 'select' && (
        <select
          id={id}
          className="input-select"
          {...register(id, { required: errorMessage })}
          defaultValue=""
        >
          <option disabled value="">
            Choose Art Type
          </option>
          {options.map((opt, i) => {
            return (
              <option key={i} value={opt}>
                {opt}
              </option>
            );
          })}
        </select>
      )}
      {type === 'file' && (
        <input
          id={id}
          type={type}
          className="form-input"
          accept="image/*"
          {...register(id, { required: errorMessage })}
        />
      )}
      {type === 'checkbox' && (
        <input
          id={id}
          type={type}
          className="input-checkbox"
          {...register(id, { required: errorMessage })}
        />
      )}
      <ErrorMessage
        errors={errors}
        name={id}
        data-testid="custom-error"
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

export default FormInput;
