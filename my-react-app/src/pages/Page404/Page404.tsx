import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page404 extends Component {
  render() {
    return (
      <div>
        <h1>Not Found</h1>
        <Link to="/">GO HOME</Link>
      </div>
    );
  }
}

export default Page404;
