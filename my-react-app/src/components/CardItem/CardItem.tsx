import React, { Component } from 'react';
import './CardItem.css';
import { ArtT } from 'components/CardsList/CardsList';

type ArtProp = {
  art: ArtT;
};

class CardItem extends Component<ArtProp> {
  render() {
    const { art } = this.props;
    const data = this.props.art.added_at.slice(0, 10);

    return (
      <li className="item" data-testid="card-item">
        <img src={art.download_url} alt={art.title} className="image" />
        <div className="infoWrapper">
          <div>
            <h4 className="title">{art.title}</h4>
            <p className="author">{art.author}</p>
          </div>
          <div>
            <p className="description">{art.short_description}</p>
            <p className="date">
              <span className="added">Added at </span> {data}
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default CardItem;

// const CardItem: FC<artProp> = ({ art }) => {
//   return (
//     <li className="item">
//       <img src={art.image} alt={art.title} />
//     </li>
//   );
// };
