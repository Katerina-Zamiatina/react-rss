import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { useAppDispatch } from '../../redux/hooks';
import { addFormData } from '../../redux/formSlice';
import FormInput from '../FormInput';
import FormRadio from '../FormRadio';
import convertToImgUrl from '../../utils/convertToImgUrl';
import './Form.css';
import { FormState } from '../../types/types';

const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({ criteriaMode: 'all' });

  const onSubmitHandler = (data: FieldValues) => {
    convertToImgUrl(data.artwork, (result) => {
      data.artwork = result;
      dispatch(addFormData(data as FormState));
      alert('Your art was successfully added');
      reset();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="form-wrapper" data-testid="form">
      <FormInput id="title" label="Title: " type="text" register={register} errors={errors} />
      <FormInput id="author" label="Author: " type="text" register={register} errors={errors} />
      <FormInput id="addedAt" label="Added at: " type="date" register={register} errors={errors} />
      <FormInput id="type" label="Type:" type="select" register={register} errors={errors} />
      <FormInput id="artwork" label="Artwork: " type="file" register={register} errors={errors} />
      <FormRadio id="owner" type="radio" register={register} errors={errors} />
      <FormInput
        id="agreement"
        label="Agree to Data Processing: "
        type="checkbox"
        register={register}
        errors={errors}
      />
      <button type="submit" className="submit-btn" data-testid="submit-button">
        Submit
      </button>
    </form>
  );
};

export default Form;
