import React from 'react';
import { act, waitFor } from '@testing-library/react';
import CardItem from './CardItem';
import renderWithProvider from '../../utils/test-utils';

const mockMovie = {
  id: 1,
  title: 'Batman',
  poster_path: '',
  overview: 'Description of film',
  release_date: '2022-03-01',
  vote_average: 5,
};

describe('CardItem', () => {
  it('renders movie info', async () => {
    const { getByText } = renderWithProvider(<CardItem movie={mockMovie} />);
    expect(getByText('Batman')).toBeInTheDocument();
    const showMoreButton = getByText('Show more');
    expect(showMoreButton).toBeInTheDocument();
    act(() => {
      showMoreButton.click();
    });

    await waitFor(() => {
      expect(getByText('Batman')).toBeInTheDocument();
      expect(getByText('Description:')).toBeInTheDocument();
      expect(getByText('Runtime:')).toBeInTheDocument();
    });
  });
});
