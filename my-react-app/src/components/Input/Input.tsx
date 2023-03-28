import React, { useEffect, useState } from 'react';
import './Input.css';

interface InputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ name }) => {
  const [value, setValue] = useState<string>(localStorage.getItem(name) || '');

  useEffect(() => {
    const savedValue = localStorage.getItem(name);
    if (savedValue) {
      setValue(savedValue);
    }
  }, [name]);

  useEffect(() => {
    localStorage.setItem(name, value);
  }, [name, value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <div className="formWrapper">
      <form className="form">
        <label htmlFor="">
          <input className="searchBar" type="text" value={value} onChange={handleChange} />
        </label>
        <button disabled>Search</button>
      </form>
    </div>
  );
};

export default Input;
