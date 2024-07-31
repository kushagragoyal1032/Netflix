import React from 'react'
import Header from './Header'
import useGetMoviesFromApi from '../hooks/useGetMoviesFromApi'
import MainContainor from './section/MainContainor';
import SecondaryContainor from './section/SecondaryContainor';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './gpt/GptSearch';

const Brose = () => {
  useGetMoviesFromApi();  // custom hook
  useGetPopularMovies(); // custom hook
  useGetTopRatedMovies(); // custom hook
  const toggle = useSelector((store) => store.gpt.showSearchView);
  return (
    <div>
      <Header />
      {
        toggle ? (
          <GptSearch />
        ) : (
          <>
            <MainContainor />
            <SecondaryContainor />
          </>
        )
      }
    </div>
  )
}

export default Brose