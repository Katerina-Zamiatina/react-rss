import { act } from 'react-dom/test-utils';
import axios from 'axios';
import movieApi from './movieApi';
import { vi, Mock } from 'vitest';

vi.mock('axios');

describe('movieApi', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('fetchTrendies', () => {
    it('should fetch trendies from API and return the data', async () => {
      const data = {
        results: [
          { id: 1, title: 'Movie 1' },
          { id: 2, title: 'Movie 2' },
        ],
      };
      (axios.get as Mock).mockResolvedValueOnce({ data });

      let result;
      await act(async () => {
        result = await movieApi.fetchTrendies();
      });

      expect(axios.get).toHaveBeenCalledWith('trending/movie/day');
      expect(result).toEqual(data.results);
    });

    it('should handle API errors and return an empty array', async () => {
      const errorMessage = 'API error';
      (axios.get as Mock).mockRejectedValueOnce(new Error(errorMessage));

      let result;
      await act(async () => {
        result = await movieApi.fetchTrendies();
      });

      expect(axios.get).toHaveBeenCalledWith('trending/movie/day');
      expect(result).toEqual([]);
    });
  });

  describe('fetchByQuery', () => {
    it('should fetch movies by search query and current page from API and return the data', async () => {
      const searchQuery = 'search';
      const currentPage = 1;
      const data = { results: [{ id: 1, title: 'Movie 1' }] };
      (axios.get as Mock).mockResolvedValueOnce({ data });

      let result;
      await act(async () => {
        result = await movieApi.fetchByQuery(searchQuery, currentPage);
      });

      expect(axios.get).toHaveBeenCalledWith('search/movie', {
        params: { query: searchQuery, page: currentPage },
      });
      expect(result).toEqual(data.results);
    });

    it('should handle API errors and return an empty array', async () => {
      const errorMessage = 'API error';
      (axios.get as Mock).mockRejectedValueOnce(new Error(errorMessage));

      let result;
      await act(async () => {
        result = await movieApi.fetchByQuery('search', 1);
      });

      expect(axios.get).toHaveBeenCalledWith('search/movie', {
        params: { query: 'search', page: 1 },
      });
      expect(result).toEqual([]);
    });
  });

  describe('fetchById', () => {
    it('should fetch movie by id from API and return the data', async () => {
      const id = 1;
      const data = { id, title: 'Movie 1' };
      (axios.get as Mock).mockResolvedValueOnce({ data });

      let result;
      await act(async () => {
        result = await movieApi.fetchById(id);
      });

      expect(axios.get).toHaveBeenCalledWith('movie/1');
      expect(result).toEqual(data);
    });

    it('should handle API errors and return an empty array', async () => {
      const errorMessage = 'API error';
      (axios.get as Mock).mockRejectedValueOnce(new Error(errorMessage));

      let result;
      await act(async () => {
        result = await movieApi.fetchById(1);
      });

      expect(axios.get).toHaveBeenCalledWith('movie/1');
      expect(result).toEqual([]);
    });
  });
});
