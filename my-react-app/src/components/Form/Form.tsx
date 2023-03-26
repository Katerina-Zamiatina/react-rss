import React, { Component, createRef } from 'react';
import { FormProps, FormState } from '../../types/types';
import FormInput from '../FormInput';

class Form extends Component<FormProps, FormState> {
  private titleRef = createRef<HTMLInputElement>();
  private authorRef = createRef<HTMLInputElement>();
  private addedAtRef = createRef<HTMLInputElement>();
  private typeRef = createRef<HTMLSelectElement>();
  private agreementRef = createRef<HTMLInputElement>();
  private artworkRef = createRef<HTMLInputElement>();
  private ownerRefMy = createRef<HTMLInputElement>();
  private ownerRef = createRef<HTMLInputElement>();

  constructor(props: FormProps) {
    super(props);

    this.state = {
      title: '',
      author: '',
      addedAt: '',
      type: '',
      agreement: false,
      owner: false,
      artwork: '',
    };
  }

  resetForm = () => {
    this.titleRef.current!.value = '';
    this.authorRef.current!.value = '';
    this.addedAtRef.current!.value = '';
    this.typeRef.current!.value = '';
    this.agreementRef.current!.checked = false;
    this.ownerRefMy.current!.checked = false;
    this.ownerRef.current!.checked = false;
    this.artworkRef.current!.value = '';
  };

  handleInputChange = (name: keyof FormState, value: string | boolean) => {
    if (typeof this.state[name] !== 'undefined') {
      this.setState({ [name]: value } as Pick<FormState, keyof FormState>);
    }
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: FormState = {
      title: this.titleRef.current!.value,
      author: this.authorRef.current!.value,
      addedAt: this.addedAtRef.current!.value,
      type: this.typeRef.current!.value,
      agreement: this.agreementRef.current!.checked,
      owner: this.ownerRefMy.current!.checked,
      artwork: this.artworkRef.current?.value
        ? URL.createObjectURL(this.artworkRef.current?.value)
        : '',
    };

    console.log(formData);
    this.props.onSubmit(formData);
    this.resetForm();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormInput
          id="title"
          label="Title:"
          type="text"
          inputRef={this.titleRef}
          onChange={this.handleInputChange}
        />
        <FormInput
          id="author"
          label="Author:"
          type="text"
          inputRef={this.authorRef}
          onChange={this.handleInputChange}
        />
        <FormInput
          id="addedAt"
          label="Added At:"
          type="date"
          inputRef={this.addedAtRef}
          onChange={this.handleInputChange}
        />
        <FormInput
          id="type"
          label="Type:"
          type="select"
          inputRef={this.typeRef}
          onChange={this.handleInputChange}
        >
          <option value="">Select type</option>
          <option value="painting">Painting</option>
          <option value="sculpture">Sculpture</option>
          <option value="architecture">Architecture</option>
          <option value="photography">Photography</option>
        </FormInput>
        <FormInput
          id="agreement"
          label="Agree to Data Processing:"
          type="checkbox"
          inputRef={this.agreementRef}
          onChange={this.handleInputChange}
        />
        <FormInput
          id="artwork"
          label="Artwork:"
          type="file"
          inputRef={this.artworkRef}
          onChange={this.handleInputChange}
        />
        <p>This is Your Art? </p>
        <label htmlFor="ownerMy">
          <span>Yes</span>
          <input id="ownerMy" type="radio" name="owner" value="Yes" ref={this.ownerRefMy} />
        </label>
        <label htmlFor="owner">
          <span>No</span>
          <input id="owner" type="radio" name="owner" value="No" ref={this.ownerRef} />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
