import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormState } from 'types/types';
import './FormCards.css';

type FormCardsProps = {
  cards: FormState[];
};

const FormCards: React.FC<FormCardsProps> = ({ cards }) => {
  return (
    <div className="form-gallery_wrapper">
      <ul className="form-gallery">
        {cards.map((card) => (
          <li key={uuidv4()} className="form-gallery_item" data-testid="card-item">
            <img src={card.artwork} alt={card.title} className="image" />
            <div className="infoWrapper">
              <div>
                <h4 className="title">{card.title}</h4>
                <p className="author">{card.author}</p>
              </div>
              <div>
                <p className="type">
                  <span className="art-type">Type of Art: </span> {card.type}
                </p>
                <p className="date">
                  <span className="added">Added at: </span> {card.addedAt}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormCards;
