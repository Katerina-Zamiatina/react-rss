import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import MainPage from './MainPage';

describe('MainPage', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    localStorage.clear();
  });

  it('renders without crashing', () => {
    render(<MainPage />);
  });

  it('renders input field', () => {
    const { getByRole } = render(<MainPage />);
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('renders CardsList component', () => {
    const { getByRole } = render(<MainPage />);
    expect(getByRole('list')).toBeInTheDocument();
  });

  it('renders "Nothing found" if no results', () => {
    const { getByText, getByRole } = render(<MainPage />);
    const input = getByRole('textbox');
    const button = getByRole('button');

    fireEvent.change(input, { target: { value: 'Some non-existing movie title' } });
    fireEvent.click(button);

    const nothingFound = getByText('Nothing found');
    expect(nothingFound).toBeInTheDocument();
  });

  it('render cards', async () => {
    const { getAllByTestId } = render(<MainPage />);
    const gallery = await waitFor(() => getAllByTestId('card-item'));
    gallery.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
});
