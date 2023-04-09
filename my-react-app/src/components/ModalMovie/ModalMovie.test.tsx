import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ModalMovie, { ModalProps } from './ModalMovie';
import { vi } from 'vitest';
import { MovieById } from 'types/types';

const movie: MovieById = {
  id: 1,
  poster_path: '',
  title: 'Batman',
  overview:
    'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  genres: [],
  production_companies: [],
  runtime: 142,
  release_date: '1994-09-23',
  vote_average: 8.7,
};

const mockHide = vi.fn();

describe('ModalMovie', () => {
  it('displays movie details when open', () => {
    const props: ModalProps = {
      movie: movie,
      isOpen: true,
      hide: mockHide,
    };
    const { getByText, queryByText } = render(<ModalMovie {...props} />);

    expect(getByText(movie.title)).toBeInTheDocument();
    expect(getByText(movie.overview)).toBeInTheDocument();
    expect(getByText(`${movie.runtime} min`)).toBeInTheDocument();
    expect(getByText(movie.release_date)).toBeInTheDocument();
    expect(getByText(`${movie.vote_average}`)).toBeInTheDocument();

    fireEvent.click(getByText('X'));
    expect(props.hide).toHaveBeenCalledTimes(2);

    expect(queryByText('The Shawshank Redemption')).toBeNull();
  });

  it('hides movie details when closed', () => {
    const props: ModalProps = {
      movie: movie,
      isOpen: true,
      hide: mockHide,
    };
    const { getByText, queryByText } = render(<ModalMovie {...props} />);

    expect(queryByText('The Shawshank Redemption')).toBeNull();

    fireEvent.click(
      getByText(
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
      )
    );
    expect(props.hide).toHaveBeenCalledTimes(2);
  });
});
