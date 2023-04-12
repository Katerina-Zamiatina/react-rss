import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { AppThunk } from '../store';
import movieApi from '../services/movieApi';
import { MovieI } from '../types/types';

interface MainPageState {
  trendies: MovieI[];
  movies: MovieI[];
  searchQuery: string;
  currentPage: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: MainPageState = {
  trendies: [],
  movies: [],
  searchQuery: localStorage.getItem('inputValue') || '',
  currentPage: 1,
  isLoading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    setTrendies(state, action: PayloadAction<MovieI[]>) {
      state.trendies = action.payload;
    },
    setMovies(state, action: PayloadAction<MovieI[]>) {
      state.movies.push(...action.payload);
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    reset(state) {
      state.movies = [];
      state.currentPage = 1;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  setTrendies,
  setMovies,
  setSearchQuery,
  setCurrentPage,
  setIsLoading,
  setError,
  reset,
} = movieSlice.actions;

export default movieSlice;
