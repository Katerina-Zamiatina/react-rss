import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getValue, setValue } from '../../redux/searchSlice';
import './Input.css';

interface InputProps {
  onSubmit: (query: string) => void;
}

const Input: React.FC<InputProps> = ({ onSubmit }) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(getValue);
  const [searchValue, setSearchValue] = useState<string>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setValue(searchValue));
    onSubmit(searchValue);
  };

  return (
    <div className="formWrapper">
      <form className="form" onSubmit={handleSubmit} data-testid="search-form">
        <label htmlFor="">
          <input className="searchBar" type="text" value={searchValue} onChange={handleChange} />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Input;
