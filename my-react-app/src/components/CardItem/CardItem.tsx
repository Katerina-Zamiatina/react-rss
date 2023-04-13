import React, { useState, useEffect } from 'react';
import './CardItem.css';
import { MovieI, MovieById } from 'types/types';
import movieApi from '../../services/movieApi';
import defaultImg from '../../assets/default.png';
import { useModal } from '../../utils/useModal';
import Portal from '../Portal';
import ModalMovie from '../ModalMovie';

type MovieProp = {
  movie: MovieI;
};

const CardItem: React.FC<MovieProp> = ({ movie }) => {
  const { isShown, toggle } = useModal();
  const [cardMovie, setCardMovie] = useState<MovieById>({
    id: 0,
    poster_path: '',
    title: '',
    overview: '',
    vote_average: 0,
    release_date: '',
    genres: [],
    runtime: 0,
    production_companies: [],
  });
  const { poster_path, title, id, vote_average, release_date } = movie;

  const imgUrl = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : defaultImg;
  const rating = (vote_average + '').slice(0, 3);

  const fetchMovieById = async () => {
    const data = await movieApi.fetchById(id);
    setCardMovie(data);
  };

  const onShowMoreDetails = () => {
    fetchMovieById();
    toggle();
  };

  return (
    <li className="item" data-testid="card-item">
      <img src={imgUrl} alt={title} className="image" />
      <div className="infoWrapper">
        <div>
          <h4 className="title">{title}</h4>
        </div>
        <div>
          <p className="date">
            <span className="added">Release date: </span> {release_date}
          </p>
          <p className="date">
            <span className="added">Rating: </span> {rating}
          </p>
          <button onClick={onShowMoreDetails}>Show more</button>
        </div>
      </div>
      {isShown && (
        <Portal wrapperId="modal-movie">
          <ModalMovie movie={cardMovie} isOpen={isShown} hide={toggle} />
        </Portal>
      )}
    </li>
  );
};

export default CardItem;
