import React from 'react';
import { render } from '@testing-library/react';
import CardsList from './CardsList';

describe('CardsList', () => {
  it('renders CardsList component', () => {
    render(<CardsList />);
  });
});
