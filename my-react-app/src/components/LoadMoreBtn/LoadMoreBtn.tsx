import React from 'react';

type LoadMoreButton = {
  onClick: () => void;
};

const LoadMoreButton: React.FC<LoadMoreButton> = ({ onClick }) => (
  <button type="button" className="Button" onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreButton;
