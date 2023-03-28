import React from 'react';
import { Link } from 'react-router-dom';

const Page404: React.FC = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to="/">GO HOME</Link>
    </div>
  );
};

export default Page404;
