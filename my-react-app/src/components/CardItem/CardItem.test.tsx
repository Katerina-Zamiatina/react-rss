import { render, screen } from '@testing-library/react';
import CardItem from './CardItem';
import React from 'react';
import { MovieI } from '../../types/types';

const mockMovie: MovieI = {
  id: 1,
  title: 'Batman',
  poster_path: '',
  overview: 'Description of film',
  release_date: '2022-03-01',
  vote_average: 5,
};

describe('CardItem', () => {
  it('renders art info', () => {
    render(<CardItem movie={mockMovie} />);
    expect(screen.getByText('Batman')).toBeInTheDocument();
    expect(screen.getByText('Release date:')).toBeInTheDocument();
    expect(screen.getByText('2022-03-01')).toBeInTheDocument();
  });
});
