import React from 'react';
import CardItem from '../CardItem';
import { v4 as uuidv4 } from 'uuid';
import './CardsList.css';
import { MovieI } from 'types/types';

type CardsListProps = {
  movies: MovieI[];
};

const CardsList: React.FC<CardsListProps> = ({ movies }) => {
  return (
    movies && (
      <div className="galleryWrapper">
        <ul className="gallery">
          {movies.map((movie: MovieI) => (
            <CardItem key={uuidv4()} movie={movie} />
          ))}
        </ul>
      </div>
    )
  );
};

export default CardsList;
