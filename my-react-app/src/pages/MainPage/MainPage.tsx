import React from 'react';
import Input from '../../components/Input';
import CardsList from '../../components/CardsList';
import './MainPage.css';

const MainPage: React.FC = () => {
  return (
    <div className="mainPage">
      <Input name="inputValue" />
      <CardsList />
    </div>
  );
};

export default MainPage;
