import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header component', () => {
  it('should render Main link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const mainLink = screen.getByText('Main');
    expect(mainLink).toBeInTheDocument();
  });

  it('should render About link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();
  });

  it('should render Form link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const formLink = screen.getByText('Form');
    expect(formLink).toBeInTheDocument();
  });

  it('should have correct paths', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const mainLink = screen.getByText('Main');
    const aboutLink = screen.getByText('About');
    const formLink = screen.getByText('Form');

    expect(mainLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(formLink).toHaveAttribute('href', '/form');
  });
});
