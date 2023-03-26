export interface FormProps {
  onSubmit: (formFields: FormState) => void;
}

export interface FormState {
  id?: string;
  title: string;
  author: string;
  addedAt: string;
  type: string;
  agreement: boolean;
  owner: boolean;
  artwork: string;
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