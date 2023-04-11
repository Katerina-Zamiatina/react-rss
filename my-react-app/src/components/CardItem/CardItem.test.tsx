import { render, act, waitFor } from '@testing-library/react';
import CardItem from './CardItem';
import { vi } from 'vitest';
import React from 'react';

const mockMovie = {
  id: 1,
  title: 'Batman',
  poster_path: '',
  overview: 'Description of film',
  release_date: '2022-03-01',
  vote_average: 5,
};

vi.mock('../services/movieApi', () => ({
  fetchById: vi.fn(() =>
    Promise.resolve({
      id: 1,
      poster_path: '',
      title: 'Batman',
      overview: 'Description of film',
      vote_average: 5,
      release_date: '2022-03-01',
      genres: [],
      runtime: 120,
      production_companies: [],
    })
  ),
}));

describe('CardItem', () => {
  it('renders movie info', async () => {
    const { getByText } = render(<CardItem movie={mockMovie} />);
    expect(getByText('Batman')).toBeInTheDocument();
    const showMoreButton = getByText('Show more');
    expect(showMoreButton).toBeInTheDocument();
    act(() => {
      showMoreButton.click();
    });
    await waitFor(() => {
      expect(getByText('Batman')).toBeInTheDocument();
      expect(getByText('Description:')).toBeInTheDocument();
      expect(getByText('Runtime:')).toBeInTheDocument();
    });
  });
});
