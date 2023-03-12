import React, { Component } from 'react';
import './Input.css';

interface InputProps {
  name: string;
}

interface InputState {
  value: string;
}

class Input extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);

    this.state = {
      value: localStorage.getItem(this.props.name) || '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const savedValue = localStorage.getItem(this.props.name);
    if (savedValue) {
      this.setState({ value: savedValue });
    }
  }

  componentWillUnmount() {
    localStorage.setItem(this.props.name, this.state.value);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const newValue = event.target.value;
    this.setState({ value: newValue });
  }

  render() {
    return (
      <div className="formWrapper">
        <form className="form">
          <label htmlFor="">
            <input className="searchBar" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button disabled>Search</button>
        </form>
      </div>
    );
  }
}

export default Input;
