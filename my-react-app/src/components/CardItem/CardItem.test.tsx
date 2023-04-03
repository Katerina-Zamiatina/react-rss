import { render, screen } from '@testing-library/react';
import CardItem from './CardItem';
import React from 'react';
import { ArtT } from 'components/CardsList/CardsList';

const mockArt: ArtT = {
  id: '1',
  author: 'Artist 1',
  url: '',
  download_url: '',
  title: 'Art 1',
  added_at: '2022-03-01T12:00:00Z',
  short_description: 'Description for Art 1',
};

describe('CardItem', () => {
  it('renders art info', () => {
    render(<CardItem art={mockArt} />);
    expect(screen.getByText('Art 1')).toBeInTheDocument();
    expect(screen.getByText('Artist 1')).toBeInTheDocument();
    expect(screen.getByText('Description for Art 1')).toBeInTheDocument();
    expect(screen.getByText('Added at')).toBeInTheDocument();
    expect(screen.getByText('2022-03-01')).toBeInTheDocument();
  });
});
