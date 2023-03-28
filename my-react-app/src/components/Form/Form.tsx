import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import FormInput from '../FormInput';
import FormRadio from '../FormRadio';
import convertToImgUrl from '../../utils/convertToImgUrl';
import './Form.css';

interface FormProps {
  onSubmit: (data: FieldValues) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();


  const onSubmitHandler = (data: FieldValues) => {
    convertToImgUrl(data.artwork, (result) => {
      data.artwork = result;
      onSubmit(data);
      alert('Your art was successfully added');
      reset();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="form">
      <FormInput
        id="title"
        label="Title: "
        type="text"
        register={register}
        errors={errors}
        required
      />
      <FormInput
        id="author"
        label="Author: "
        type="text"
        register={register}
        errors={errors}
        required
      />
      <FormInput
        id="addedAt"
        label="Added at: "
        type="date"
        register={register}
        errors={errors}
        required
      />
      <FormInput
        id="type"
        label="Type:"
        type="select"
        register={register}
        errors={errors}
        required
      />
      <FormInput
        id="artwork"
        label="Artwork: "
        type="file"
        register={register}
        errors={errors}
        required
      />
      <FormRadio id="owner" type="radio" register={register} required />
      <FormInput
        id="agreement"
        label="Agree to Data Processing: "
        type="checkbox"
        register={register}
        errors={errors}
        required
      />
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
