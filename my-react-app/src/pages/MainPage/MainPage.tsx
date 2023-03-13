import React, { Component } from 'react';
import Input from '../../components/Input';
import CardsList from '../../components/CardsList';
import './MainPage.css';

class MainPage extends Component {
  render() {
    return (
      <div className='mainPage'>
        <Input name="inputValue" />
        <CardsList />
      </div>
    );
  }
}

export default MainPage;
