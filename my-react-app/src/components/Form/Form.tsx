import React, { Component, createRef } from 'react';
import { FormProps, FormState } from '../../types/types';
import FormInput from '../FormInput';
import ErrorMessage from '../ErrorMessage';
import './Form.css';
// import defaultImg from '../../assets/default.png';

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
      errors: {},
      hasError: false,
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
      this.setState({ [name]: value } as unknown as Pick<FormState, keyof FormState>);
      if (name === 'artwork') {
        if (this.artworkRef.current?.files) {
          const imgReader = new FileReader();
          imgReader.readAsDataURL(this.artworkRef.current.files[0]);
          imgReader.onloadend = () => {
            this.setState({ artwork: imgReader.result as string });
          };
        } else {
          this.setState({ artwork: undefined });
        }
      }
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
      artwork: this.state.artwork,
    };

    const errors: Record<string, string> = {};

    if (!formData.title.trim()) {
      errors['title'] = 'Title is required';
      this.setState({ hasError: true });
    }

    if (!formData.type) {
      errors['type'] = 'Type is required';
      this.setState({ hasError: true });
    }

    if (!formData.agreement) {
      errors['agreement'] = 'Agreement is required';
      this.setState({ hasError: true });
    }

    if (!formData.owner) {
      errors['owner'] = 'Owner is required';
      this.setState({ hasError: true });
    }

    const validAuthor = /^[A-Za-zА-ЯІЇЄҐа-яіїєґ\s.'-]+$/u;
    if (!formData.author.trim()) {
      errors['author'] = 'Author is required';
      this.setState({ hasError: true });
    } else if (!validAuthor.test(formData.author)) {
      errors['author'] = 'Author name must start with a capital letter';
      this.setState({ hasError: true });
    }

    const today = new Date();
    const date = new Date(formData.addedAt);
    if (!formData.addedAt) {
      errors['addedAt'] = 'Date is required';
      this.setState({ hasError: true });
    } else if (date > today) {
      errors['addedAt'] = 'Date cannot be in the future';
      this.setState({ hasError: true });
    }

    const allowedExtensions = /^data:image\/(png|jpeg|jpg);base64,/;
    if (!formData.artwork) {
      errors['artwork'] = 'Image is required';
      this.setState({ hasError: true });
    } else if (!allowedExtensions.test(formData.artwork)) {
      errors['artwork'] = 'Only .jpg, .jpeg, and .png files are allowed';
      this.setState({ hasError: true });
    }

    if (Object.keys(errors).length === 0) {
      this.props.onSubmit(formData);
      this.resetForm();
      this.setState({ errors: {}, hasError: false });
    } else {
      this.setState({ errors, hasError: true });
    }
  };

  render() {
    const { hasError } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <FormInput
          id="title"
          label="Title:"
          type="text"
          inputRef={this.titleRef}
          onChange={this.handleInputChange}
        />
        {hasError && <ErrorMessage message={this.state.errors?.title} />}
        <FormInput
          id="author"
          label="Author:"
          type="text"
          inputRef={this.authorRef}
          onChange={this.handleInputChange}
        />
        {hasError && <ErrorMessage message={this.state.errors?.author} />}
        <FormInput
          id="addedAt"
          label="Added At:"
          type="date"
          inputRef={this.addedAtRef}
          onChange={this.handleInputChange}
        />
        {hasError && <ErrorMessage message={this.state.errors?.addedAt} />}
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
        {hasError && <ErrorMessage message={this.state.errors?.type} />}
        <FormInput
          id="agreement"
          label="Agree to Data Processing:"
          type="checkbox"
          inputRef={this.agreementRef}
          onChange={this.handleInputChange}
        />
        {hasError && <ErrorMessage message={this.state.errors?.agreement} />}
        <FormInput
          id="artwork"
          label="Artwork:"
          type="file"
          inputRef={this.artworkRef}
          onChange={this.handleInputChange}
        />
        {hasError && <ErrorMessage message={this.state.errors?.artwork} />}
        <p>This is Your Art? </p>
        <label htmlFor="ownerMy">
          <span>Yes</span>
          <input id="ownerMy" type="radio" name="owner" value="Yes" ref={this.ownerRefMy} />
        </label>
        <label htmlFor="owner">
          <span>No</span>
          <input id="owner" type="radio" name="owner" value="No" ref={this.ownerRef} />
        </label>
        {hasError && <ErrorMessage message={this.state.errors?.owner} />}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
