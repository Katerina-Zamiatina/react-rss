import React from 'react';
import { render } from '@testing-library/react';
import CardsList from './CardsList';

describe('CardsList', () => {
  it('renders CardsList component', () => {
    const movies = [
      {
        id: 1,
        poster_path: '/path/to/poster.jpg',
        title: 'Movie 1',
        overview: 'Overview for Movie 1',
        vote_average: 7.5,
        release_date: '2022-05-01',
      },
      {
        id: 2,
        poster_path: '/path/to/poster.jpg',
        title: 'Movie 2',
        overview: 'Overview for Movie 2',
        vote_average: 8.0,
        release_date: '2022-06-01',
      },
    ];
    render(<CardsList movies={movies} />);
  });
});
