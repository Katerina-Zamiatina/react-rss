import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieById } from 'types/types';


const API_KEY = 'aeae34054ac98d0d602e1f03fa929a0c';
const BASE_URL = 'https://api.themoviedb.org/3/';
const trendMovies = 'trending/movie/day';
const searchMovies = 'search/movie';

interface MovieI {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchTrendies: builder.query<MovieI[], void>({
      query: () => `${trendMovies}?api_key=${API_KEY}`,
    }),
    fetchByQuery: builder.query<MovieI[], { searchQuery: string; currentPage: number }>({
      query: ({ searchQuery, currentPage }) =>
        `${searchMovies}?api_key=${API_KEY}&query=${searchQuery}&page=${currentPage}`,
    }),
    fetchById: builder.query<MovieById,  number >({
      query: ( id ) => `movie/${id}?api_key=${API_KEY}`,
    }),
  }),
});

export const useFetchTrendies = movieApi.endpoints.fetchTrendies.useQuery;
export const useFetchByQuery = movieApi.endpoints.fetchByQuery.useQuery;
export const useFetchById = movieApi.endpoints.fetchById.useQuery;
