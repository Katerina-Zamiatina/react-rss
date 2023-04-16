import React from 'react';
import { GenreI } from 'types/types';
import { useFetchById } from '../../redux/movieApi';
import './ModalMovie.css';
import Loader from '../Loader';

export type ModalProps = {
  id: number;
  isOpen: boolean;
  hide: () => void;
};

const ModalMovie: React.FC<ModalProps> = ({ id, isOpen, hide }) => {
  const { data: movie, isFetching } = useFetchById(id);

  const movieGenres = movie?.genres.map((genre: GenreI) => genre.name + ' ');
  const rating = (movie?.vote_average + '').slice(0, 3);

  const onCloseClick = (event: React.MouseEvent<HTMLElement>) => {
    const isBackdrop = event.target === event.currentTarget;
    const isCloseBtn = (event.target as HTMLElement).classList.contains('close-btn');
    if (isBackdrop || isCloseBtn) {
      hide();
    }
  };

  return (
    <>
      {isFetching ? (
        <div className={`backdrop ${isOpen ? 'open' : ''}`}>
          <Loader />
        </div>
      ) : (
        <div
          className={`backdrop ${isOpen ? 'open' : ''}`}
          onClick={onCloseClick}
          data-testid="backdrop"
        >
          <div className={`modal-wrapper ${isOpen ? 'open' : ''}`} data-testid="modal-wrapper">
            <div className={`modal ${isOpen ? 'open' : ''}`} data-testid="modal">
              <button className="close-btn" onClick={onCloseClick}>
                X
              </button>
              <div className="infoWrapper">
                <div>
                  <h4 className="title">{movie?.title}</h4>
                </div>
                <div>
                  <p className="date">
                    <span className="added">Description: </span> {movie?.overview}
                  </p>
                  <p className="date">
                    <span className="added">Genres: </span> {movieGenres?.map((name) => name)}
                  </p>

                  <p className="date">
                    <span className="added">Runtime: </span> {movie?.runtime} min
                  </p>
                  <p className="date">
                    <span className="added">Release date: </span> {movie?.release_date}
                  </p>
                  <p className="date">
                    <span className="added">Rating: </span> {rating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalMovie;
