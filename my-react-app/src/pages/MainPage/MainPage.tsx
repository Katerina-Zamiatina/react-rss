import React, { Component } from 'react';
import Input from '../../components/Input';
import CardsList from '../../components/CardsList';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Input name="inputValue" />
        <CardsList />
      </div>
    );
  }
}

export default MainPage;
