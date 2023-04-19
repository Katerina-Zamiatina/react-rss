import React, { useState, useEffect } from 'react';
import { useFetchTrendies, useFetchByQuery } from '../../redux/movieApi';
import { useAppSelector } from '../../redux/hooks';
import { getValue } from '../../redux/searchSlice';
import Input from '../../components/Input';
import CardsList from '../../components/CardsList';
import LoadMoreBtn from '../../components/LoadMoreBtn';
import Loader from '../../components/Loader';
import { MovieI } from '../../types/types';
import './MainPage.css';

const MainPage: React.FC = () => {
  const [currentMovies, setCurrentMovies] = useState<MovieI[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const value = useAppSelector(getValue);

  const { data: trendies, error: errorTrendies, isLoading: isLoadingTrendies } = useFetchTrendies();
  const {
    data: movies,
    isLoading: isLoadingMovies,
    error: errorMovies,
    isFetching,
    refetch,
  } = useFetchByQuery({ value, currentPage });

  useEffect(() => {
    if (!value) {
      if (trendies) {
        setCurrentMovies(trendies);
      }
    } else {
      if (movies) {
        setCurrentMovies(movies);
      }
    }
  }, [value, trendies, movies]);

  const handleSearchSubmit = () => {
    setCurrentPage(1);
    setCurrentMovies([]);
  };

  const handleLoadMoreClick = () => {
    setCurrentPage((page) => page + 1);
    setCurrentMovies((prev) => [...prev, ...(movies ?? [])]);
    refetch();
  };

  if (isLoadingTrendies || isLoadingMovies || isFetching) {
    return (
      <div className="mainPage" data-testid="mainPage">
        <Loader />
      </div>
    );
  }

  if (errorTrendies || errorMovies) {
    return <p>Error</p>;
  }

  if (!value && trendies) {
    return (
      <div className="mainPage" data-testid="mainPage">
        <Input onSubmit={handleSearchSubmit} />
        <CardsList movies={trendies} />;
      </div>
    );
  }

  if (movies?.length) {
    return (
      <div className="mainPage" data-testid="mainPage">
        <Input onSubmit={handleSearchSubmit} />
        <CardsList movies={currentMovies} />
        <LoadMoreBtn onClick={handleLoadMoreClick} />
      </div>
    );
  }

  return (
    <div className="mainPage" data-testid="mainPage">
      <p>Nothing found</p>
    </div>
  );
};

export default MainPage;
