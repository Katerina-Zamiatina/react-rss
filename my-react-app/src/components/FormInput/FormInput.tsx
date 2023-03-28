import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import { FormState } from '../../types/types';
import './FormInput.css';

export interface FormInputProps {
  label: string;
  type: 'text' | 'select' | 'checkbox' | 'file' | 'date' | 'radio';
  id: keyof FormState;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ id, label, type, register, required, errors, pattern }) => {
  const options = ['Sculpture', 'Painting', 'Architecture', 'Photography'];
  const errorMessage = `${id.toUpperCase()} is required`;

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
              value: /^[A-Za-zА-ЯІЇЄҐа-яіїєґ\s.'-]+$/u,
              message: 'Must start with a capital letter ',
            },
            // validate: ()=>{true}
          })}
        />
      )}
      {type === 'date' && (
        <input
          id={id}
          type={type}
          className="form-input"
          {...register(id, { required: errorMessage })}
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
      {errors[id] && <ErrorMessage message={errors[id].message} />}
    </div>
  );
};

export default FormInput;
