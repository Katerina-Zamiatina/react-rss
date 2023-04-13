import React, { useEffect, useState, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getValue, setValue } from '../../redux/searchSlice';
import './Input.css';

interface InputProps {
  name: string;
  onSubmit: (query: string) => void;
}

const Input: React.FC<InputProps> = ({ name, onSubmit }) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(getValue);
  const [searchValue, setSearchValue] = useState<string>(value);
  // const [searchValue, setSearchValue] = useState<string>(localStorage.getItem(name) || '');

  // const searchValueRef = useRef<string>(searchValue);

  // useEffect(() => {
  //   searchValueRef.current = searchValue;
  // }, [searchValue]);

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     localStorage.setItem(name, searchValueRef.current);
  //   };
  //   window.addEventListener('beforeunload', handleBeforeUnload);
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //     localStorage.setItem(name, searchValueRef.current);
  //   };
  // }, [name]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setValue(searchValue));
    onSubmit(searchValue);
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   localStorage.setItem(name, searchValueRef.current);
  //   onSubmit(searchValue);
  // };

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
