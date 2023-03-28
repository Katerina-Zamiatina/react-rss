import React, { Component } from 'react';
import Form from '../../components/Form';
import { FormState } from '../../types/types';
import FormCards from '../../components/FormCards';

interface FormPageState {
  formList: FormState[];
}

export default class FormPage extends Component<unknown, FormPageState> {
  state: FormPageState = {
    formList: [],
  };

  onSubmit = (formData: FormState) => {
    this.setState((prev) => ({ formList: [...prev.formList, formData] }));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit} />
        <FormCards cards={this.state.formList} />
      </div>
    );
  }
}
