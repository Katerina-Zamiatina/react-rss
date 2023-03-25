import React, { Component, createRef } from 'react';

interface FormProps {}

interface FormState {
  title: string;
  author: string;
  addedAt: string;
  type: string;
  agreement: boolean;
  artwork: string;
}

class Form extends Component<FormProps, FormState> {
  private titleRef: React.RefObject<HTMLInputElement>;
  private authorRef: React.RefObject<HTMLInputElement>;
  private addedAtRef: React.RefObject<HTMLInputElement>;
  private typeRef: React.RefObject<HTMLSelectElement>;
  private agreementRef: React.RefObject<HTMLInputElement>;
  private artworkRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);

    this.state = {
      title: '',
      author: '',
      addedAt: '',
      type: '',
      agreement: false,
      artwork: '',
    };

    this.titleRef = createRef<HTMLInputElement>();
    this.authorRef = createRef<HTMLInputElement>();
    this.addedAtRef = createRef<HTMLInputElement>();
    this.typeRef = createRef<HTMLSelectElement>();
    this.agreementRef = createRef<HTMLInputElement>();
    this.artworkRef = createRef<HTMLInputElement>();
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: FormState = {
      title: this.titleRef.current?.value || '',
      author: this.authorRef.current?.value || '',
      addedAt: this.addedAtRef.current?.value || '',
      type: this.typeRef.current?.value || '',
      agreement: this.agreementRef.current?.checked || false,
      artwork: this.artworkRef.current?.value || '',
    };

    console.log(formData);
    // do something with the form data
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" ref={this.titleRef} />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" ref={this.authorRef} />
        </div>
        <div>
          <label htmlFor="addedAt">Added At:</label>
          <input type="date" id="addedAt" ref={this.addedAtRef} />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <select id="type" ref={this.typeRef}>
            <option value="painting">Painting</option>
            <option value="sculpture">Sculpture</option>
            <option value="architecture">Architecture</option>
            <option value="photography">Photography</option>
          </select>
        </div>
        <div>
          <label htmlFor="agreement">Agree to Data Processing:</label>
          <input type="checkbox" id="agreement" ref={this.agreementRef} />
        </div>
        <div>
          <label>Artwork:</label>
          <input type="file" ref={this.artworkRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
