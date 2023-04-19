import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface FormProps {
  onSubmit: (formFields: FormState) => void;
}

export type Errors = {
  title?: string;
  author?: string;
  addedAt?: string;
  type?: string;
  agreement?: string;
  owner?: string;
  artwork?: string;
};
export interface FormState {
  id?: string;
  title: string;
  author: string;
  addedAt: string;
  type: string;
  agreement: boolean;
  owner: boolean;
  artwork: string | undefined;
  errors?: Errors;
  hasError?: boolean;
}

export interface FormInputProps {
  label: string;
  type: 'text' | 'select' | 'checkbox' | 'file' | 'date' | 'radio';
  id: keyof FormState;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
}

export interface MovieI {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
}

export interface MovieById extends MovieI {
  genres: [];
  runtime: number;
  production_companies: [];
}

export type GenreI = {
  id?: number;
  name: string;
};

export type ProdCI = {
  id?: number;
  logo?: string;
  name: string;
  original_country: string;
};
