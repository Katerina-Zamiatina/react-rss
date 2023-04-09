import React from 'react';
import { Watch } from 'react-loader-spinner';
import './Loader.css';

export default function Loader() {
  return (
    <div>
      <div className="loader-wrapper">
        <Watch color="#646cff" height={80} width={80} ariaLabel="watch-loading" radius="48" />
      </div>
    </div>
  );
}
