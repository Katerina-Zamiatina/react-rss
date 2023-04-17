import React from 'react';
import { fireEvent } from '@testing-library/react';
import { server } from '../../mocks/setupServer';
import renderWithProvider from '../../utils/test-utils';
import MainPage from './MainPage';

describe('MainPage', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('renders without crashing', () => {
    const { getByTestId } = renderWithProvider(<MainPage />);
    const main = getByTestId('mainPage');
    expect(main).toBeInTheDocument();
  });

  it('should render trendies when value is empty', async () => {
    const { queryByText } = renderWithProvider(<MainPage />);
    expect(queryByText(/movie 1/i)).toBeInTheDocument();
  });

  it('should render search results when value is not empty', async () => {
    const { getByRole, queryByText } = renderWithProvider(<MainPage />);
    const searchInput = getByRole('textbox');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.submit(getByRole('form'));
    expect(queryByText(/test/i)).toBeInTheDocument();
  });

  // it('should load more movies when load more button is clicked', async () => {
  //   const { getByRole, queryByText } = renderWithProvider(<MainPage />);
  //   const loadMoreButton = getByRole('button', { name: /load more/i });
  //   fireEvent.click(loadMoreButton);
  //   expect(queryByText(/movie 1/i)).toBeInTheDocument();
  //   expect(queryByText(/movie test/i)).toBeInTheDocument();
  // });
});
