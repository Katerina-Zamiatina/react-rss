import React, { Component, createRef, ChangeEvent } from 'react';
import { FormInputProps } from '../../types/types';

class FormInput extends Component<FormInputProps> {
  private inputRef: React.RefObject<HTMLInputElement | HTMLSelectElement>;

  constructor(props: FormInputProps) {
    super(props);

    this.inputRef = createRef<HTMLInputElement | HTMLSelectElement>();
  }

  handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, onChange } = this.props;
    if (onChange) {
      onChange(id, event.target.value);
    }
  };

  render() {
    const { label, type, id, inputRef } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        {type === 'text' && (
          <input
            id={id}
            type="text"
            ref={(inputRef as React.RefObject<HTMLInputElement>) || this.inputRef}
            onChange={this.handleChange}
          />
        )}
        {type === 'date' && (
          <input
            id={id}
            type="date"
            ref={(inputRef as React.RefObject<HTMLInputElement>) || this.inputRef}
            onChange={this.handleChange}
          />
        )}
        {type === 'select' && (
          <select
            id={id}
            ref={(inputRef as React.RefObject<HTMLSelectElement>) || this.inputRef}
            onChange={this.handleChange}
            defaultValue=""
          >
            {this.props.children}
          </select>
        )}
        {type === 'checkbox' && (
          <input
            id={id}
            type="checkbox"
            ref={(inputRef as React.RefObject<HTMLInputElement>) || this.inputRef}
            onChange={this.handleChange}
          />
        )}
        {type === 'file' && (
          <input
            id={id}
            type="file"
            ref={(inputRef as React.RefObject<HTMLInputElement>) || this.inputRef}
            onChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}

export default FormInput;
