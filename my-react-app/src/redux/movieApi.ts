import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieById, MovieI } from 'types/types';

const API_KEY = 'aeae34054ac98d0d602e1f03fa929a0c';
const BASE_URL = 'https://api.themoviedb.org/3/';
const trendMovies = 'trending/movie/day';
const searchMovies = 'search/movie';

type ResponseData = { page: number; results: MovieI[]; total_pages: number; total_results: number };

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchTrendies: builder.query<MovieI[], void>({
      query: () => `${trendMovies}?api_key=${API_KEY}`,
      transformResponse: (response: ResponseData) => response.results,
    }),
    fetchByQuery: builder.query<MovieI[], { value: string; currentPage: number }>({
      query: ({ value, currentPage }) =>
        `${searchMovies}?api_key=${API_KEY}&query=${value}&page=${currentPage}`,
      transformResponse: (response: ResponseData) => response.results,
    }),
    fetchById: builder.query<MovieById, number>({
      query: (id) => `movie/${id}?api_key=${API_KEY}`,
    }),
  }),
});

export const useFetchTrendies = movieApi.endpoints.fetchTrendies.useQuery;
export const useFetchByQuery = movieApi.endpoints.fetchByQuery.useQuery;
export const useFetchById = movieApi.endpoints.fetchById.useQuery;
