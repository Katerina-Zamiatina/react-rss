import React, { useState } from 'react';
import CardItem from '../CardItem';
import './CardsList.css';
import { images } from '../../data';

export type ArtT = {
  id: string;
  author: string;
  url: string;
  download_url: string;
  title: string;
  added_at: string;
  short_description: string;
};

const CardsList: React.FC = () => {
  const [arts, setArts] = useState(images);

  // useEffect(() => {
  //   setArts(images);
  // });
  return (
    <div className="galleryWrapper">
      <ul className="gallery">
        {arts?.map((art: ArtT) => (
          <CardItem key={art.id} art={art} />
        ))}
      </ul>
    </div>
  );
};

export default CardsList;
