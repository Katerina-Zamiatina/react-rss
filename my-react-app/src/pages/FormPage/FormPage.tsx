import React, { Component } from 'react';
import Form from '../../components/Form';
import { FormState } from '../../types/types';

interface FormPageState {
  // popupOpen: boolean;
  formList: FormState[];
}

export default class FormPage extends Component<{}, FormPageState> {
  state: FormPageState = {
    formList: [],
  };

  onSubmit = (formData: FormState) => {
    this.setState((prev) => ({ formList: [...prev.formList, formData] }));
  };

  render() {
    return <Form onSubmit={this.onSubmit} />;
  }
}
