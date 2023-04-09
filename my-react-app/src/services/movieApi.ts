import axios from 'axios';

const API_KEY = 'aeae34054ac98d0d602e1f03fa929a0c';
const BASE_URL = 'https://api.themoviedb.org/3/';
const trendMovies = 'trending/movie/day';
const searchMovies = 'search/movie';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

const fetchTrendies = async () => {
  try {
    const { data } = await axios.get(`${trendMovies}`);
    const trends = data.results;
    return trends;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const fetchByQuery = async (searchQuery: string, currentPage: number) => {
  try {
    const { data } = await axios.get(`${searchMovies}`, {
      params: { query: searchQuery, page: currentPage },
    });
    const results = data.results;
    return results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const fetchById = async (id: number) => {
  try {
    const { data } = await axios.get(`movie/${id}`);
    const movieWithId = data;
    return movieWithId;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

// const fetchMovieCast = async (id: string) => {
//   try {
//     const { data } = await axios.get(`movie/${id}/credits`);
//     const cast = data;
//     return cast;
//   } catch (error) {
//     console.log('error', { error });
//     return [];
//   }
// };

// const fetchMovieReviews = async (id: string) => {
//   try {
//     const { data } = await axios.get(`movie/${id}/reviews`);
//     const reviews = data;
//     return reviews;
//   } catch (error) {
//     console.log('error', { error });
//     return [];
//   }
// };

const movieApi = { fetchTrendies, fetchByQuery, fetchById };

export default movieApi;
