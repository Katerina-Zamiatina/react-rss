import React, { useState, useEffect } from 'react';
import Input from '../../components/Input';
import CardsList from '../../components/CardsList';
import LoadMoreBtn from '../../components/LoadMoreBtn';
import Loader from '../../components/Loader';
import { useFetchTrendies, useFetchByQuery } from '../../redux/movieApi';
import { MovieI } from '../../types/types';
import './MainPage.css';
import movieApi from '../../services/movieApi';

// const MainPage: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState<string>(localStorage.getItem('inputValue') || '');
//   const [currentPage, setCurrentPage] = useState(1);
//   const { data: trendies, error: errorTrendies, isLoading: isLoadingTrendies } = useFetchTrendies();
//   const {
//     data: movies,
//     isLoading: isLoadingMovies,
//     error: errorMovies,
//     isFetching,
//     refetch
//   } = useFetchByQuery({ searchQuery, currentPage });



//   const handleSearchSubmit = (query: string) => {
//     setSearchQuery(query);
//     setCurrentPage(1);
//   };

//   const handleLoadMoreClick = () => {
//     setCurrentPage((page) => page + 1);
//   };

//   const shouldRenderBtn = movies?.length && !isFetching;

//   return (
//     <div className="mainPage">
//       <Input name="inputValue" onSubmit={handleSearchSubmit} />
//       {isLoadingTrendies && <Loader />}
//       {errorTrendies && <p>ERROR</p>}
//       {!searchQuery ? (
//         <CardsList movies={trendies ?? []} />
//       ) : movies?.length ? (
//         <CardsList movies={movies as MovieI[]} />
//       ) : (
//         <p>Nothing found</p>
//       )}
//       {shouldRenderBtn && (
//         <LoadMoreBtn onClick={() => fetchByQuery(searchQuery, currentPage + 1)} />
//       )}
//       {isFetching && <Loader />}
//     </div>
//   );
// };

// export default MainPage;

const MainPage: React.FC = () => {
  const [trendies, setTrendies] = useState<MovieI[]>([]);
  const [movies, setMovies] = useState<MovieI[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(localStorage.getItem('inputValue') || '');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchQuery) fetchTrendies();
    else fetchMoviesByQuery();
    // eslint-disable-next-line
  }, [searchQuery]);

  const fetchMoviesByQuery = async () => {
    setIsLoading(true);
    try {
      const results = await movieApi.fetchByQuery(searchQuery, currentPage);
      setMovies((prevResults) => [...prevResults, ...results]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError((error as Error).message);
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
      setError((error as Error).message);
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
      {!searchQuery ? (
        <CardsList movies={trendies} />
      ) : movies.length > 0 ? (
        <CardsList movies={movies} />
      ) : (
        <p>Nothing found</p>
      )}
      {shouldRenderBtn && <LoadMoreBtn onClick={fetchMoviesByQuery} />}
    </div>
  );
};

export default MainPage;
