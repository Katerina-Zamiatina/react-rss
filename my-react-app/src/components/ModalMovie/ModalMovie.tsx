import React from 'react';
import { MovieById, GenreI } from 'types/types';
import './ModalMovie.css';

export type ModalProps = {
  movie: MovieById;
  isOpen: boolean;
  hide: () => void;
};

const ModalMovie: React.FC<ModalProps> = ({ movie, isOpen, hide }) => {
  const { title, vote_average, release_date, overview, runtime } = movie;
  const movieGenres = movie.genres?.map((genre: GenreI) => genre.name + ' ');
  const rating = (vote_average + '').slice(0, 3);

  const onCloseClick = (event: React.MouseEvent<HTMLElement>) => {
    const isBackdrop = event.target === event.currentTarget;
    const isCloseBtn = (event.target as HTMLElement).classList.contains('close-btn');
    if (isBackdrop || isCloseBtn) {
      hide();
    }
  };

  return (
    <>
      {isOpen && (
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
                  <h4 className="title">{title}</h4>
                </div>
                <div>
                  <p className="date">
                    <span className="added">Description: </span> {overview}
                  </p>
                  <p className="date">
                    <span className="added">Genres: </span> {movieGenres?.map((name) => name)}
                  </p>

                  <p className="date">
                    <span className="added">Runtime: </span> {runtime} min
                  </p>
                  <p className="date">
                    <span className="added">Release date: </span> {release_date}
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
