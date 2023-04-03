import React, { useState } from 'react';
import Form from '../../components/Form';
import { FormState } from '../../types/types';
import FormCards from '../../components/FormCards';

const FormPage: React.FC = () => {
  const [formList, setFormList] = useState<FormState[]>([]);

  const onSubmit = (formData: FormState) => {
    setFormList((prev) => [...prev, formData]);
  };

  return (
    <div>
      <Form onSubmit={onSubmit} />
      <FormCards cards={formList} />
    </div>
  );
};

export default FormPage;
