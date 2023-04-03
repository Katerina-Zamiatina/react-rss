import React, { useEffect, useState, useRef } from 'react';
import './Input.css';

interface InputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ name }) => {
  const [value, setValue] = useState<string>(localStorage.getItem(name) || '');

  const valueRef = useRef<string>(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem(name, valueRef.current);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      localStorage.setItem(name, valueRef.current);
    };
  }, [name]);

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
