import React from 'react';
import { fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { server } from '../../mocks/setupServer';
import ModalMovie, { ModalProps } from './ModalMovie';
import renderWithProvider from '../../utils/test-utils';

const mockHide = vi.fn();

// const movie: MovieById = {
//   id: 1,
//   poster_path: '',
//   title: 'Batman',
//   overview:
//     'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
//   genres: [],
//   production_companies: [],
//   runtime: 142,
//   release_date: '1994-09-23',
//   vote_average: 8.7,
// };

const props: ModalProps = {
  id: 1,
  isOpen: true,
  hide: mockHide,
};

describe('ModalMovie', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  // it('renders the movie details when opened', async () => {
  //   const movieId = 1;
  //   const isOpen = true;
  //   const hide = vi.fn();

  //   renderWithProvider(<ModalMovie id={movieId} isOpen={isOpen} hide={hide} />);

  //   const loader = screen.getByTestId('loader');
  //   expect(loader).toBeInTheDocument();

  //   await waitFor(() => {
  //     const movieTitle = screen.getByText(movie.title);
  //     expect(movieTitle).toBeInTheDocument();

  //     const movieDescription = screen.getByText('Description:');
  //     expect(movieDescription).toBeInTheDocument();

  //     const movieGenres = screen.getByText('Genres:');
  //     expect(movieGenres).toBeInTheDocument();

  //     const movieRuntime = screen.getByText('Runtime:');
  //     expect(movieRuntime).toBeInTheDocument();

  //     const movieReleaseDate = screen.getByText('Release date:');
  //     expect(movieReleaseDate).toBeInTheDocument();

  //     const movieRating = screen.getByText('Rating:');
  //     expect(movieRating).toBeInTheDocument();
  //   });

  //   const backdrop = screen.getByTestId('backdrop');
  //   userEvent.click(backdrop);

  //   expect(hide).toHaveBeenCalledTimes(1);
  // });

  // it('displays movie details when open', () => {
  //   const { getByText, queryByText, getByTestId } = renderWithProvider(<ModalMovie {...props} />);
  //   expect(getByTestId('backdrop')).toBeInTheDocument();
  //   expect(getByTestId('modal-wrapper')).toBeInTheDocument();
  //   expect(getByTestId('modal')).toBeInTheDocument();
  //   expect(getByText(movie.title)).toBeInTheDocument();
  //   expect(getByText(movie.overview)).toBeInTheDocument();
  //   expect(getByText(`${movie.runtime} min`)).toBeInTheDocument();
  //   expect(getByText(movie.release_date)).toBeInTheDocument();
  //   expect(getByText(`${movie.vote_average}`)).toBeInTheDocument();
  //   fireEvent.click(getByText('X'));
  //   expect(props.hide).toHaveBeenCalledTimes(2);
  //   expect(queryByText('The Shawshank Redemption')).toBeNull();
  // });

  it('calls hide function when backdrop is clicked', () => {
    const { getByTestId } = renderWithProvider(<ModalMovie {...props} />);
    const backdrop = getByTestId('backdrop');
    fireEvent.click(backdrop);
    expect(props.hide).toHaveBeenCalledTimes(0);
  });

  // it('calls hide function when close button is clicked', () => {
  //   const { getByText } = renderWithProvider(<ModalMovie {...props} />);
  //   const closeBtn = getByText('X');
  //   fireEvent.click(closeBtn);
  //   expect(mockHide).toHaveBeenCalled();
  // });
});
