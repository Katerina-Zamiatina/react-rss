import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { v4 as uuidv4 } from 'uuid';
import './FormCards.css';

const FormCards: React.FC = () => {
  const formList = useAppSelector((state: RootState) => state.form.formList);

  return (
    <div className="form-gallery_wrapper">
      <ul className="form-gallery">
        {formList.map((card) => (
          <li key={uuidv4()} className="form-gallery_item" data-testid="form-item">
            <img src={card.artwork} alt={card.title} className="image" data-testid="img" />
            <div className="infoWrapper">
              <div>
                <h4 className="title" data-testid="title">
                  {card.title}
                </h4>
                <p className="author" data-testid="author">
                  {card.author}
                </p>
              </div>
              <div>
                <p className="type">
                  <span className="art-type" data-testid="art">
                    Type of Art:
                  </span>
                  {card.type}
                </p>
                <p className="date">
                  <span className="added" data-testid="added">
                    Added at:
                  </span>
                  {card.addedAt}
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
