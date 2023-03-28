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
  inputRef?:
    | React.RefObject<HTMLInputElement | HTMLSelectElement>
    | ((instance: HTMLInputElement | HTMLSelectElement | null) => void);
  children?: React.ReactNode;
  onChange?: (name: keyof FormState, value: string | boolean) => void;
}
