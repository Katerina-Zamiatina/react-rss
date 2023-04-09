import React, { useState, useEffect } from 'react';
import Input from '../../components/Input';
import CardsList from '../../components/CardsList';
import LoadMoreBtn from '../../components/LoadMoreBtn';
import Loader from '../../components/Loader';
import movieApi from '../../services/movieApi';
import { MovieI } from '../../types/types';
import './MainPage.css';

const MainPage: React.FC = () => {
  const [trendies, setTrendies] = useState<MovieI[]>([]);
  const [movies, setMovies] = useState<MovieI[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(localStorage.getItem('inputValue') || '');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) fetchTrendies();
    else fetchMoviesByQuery();
  }, [searchQuery]);

  const fetchMoviesByQuery = async () => {
    setIsLoading(true);
    try {
      const results = await movieApi.fetchByQuery(searchQuery, currentPage);
      setMovies((prevResults) => [...prevResults, ...results]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTrendies = async () => {
    setIsLoading(true);
    try {
      const results = await movieApi.fetchTrendies();
      setTrendies(results);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setMovies([]);
    setError(null);
  };

  const shouldRenderBtn = movies.length > 0 && !isLoading;

  return (
    <div className="mainPage">
      <Input name="inputValue" onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      {error && <p>ERROR</p>}
      {!searchQuery && <CardsList movies={trendies} />}
      {movies.length > 0 ? <CardsList movies={movies} /> : <p>Nothing found</p>}
      {shouldRenderBtn && <LoadMoreBtn onClick={fetchMoviesByQuery} />}
    </div>
  );
};

export default MainPage;
