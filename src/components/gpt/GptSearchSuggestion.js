import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../section/MovieList';

const GptSearchSuggestion = () => {
  const { gptMovies, moviesResults } = useSelector(store => store.gpt);
  if (!moviesResults) return null;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
      {moviesResults.map((movie, i) => (
        <MovieList key={gptMovies[i]} title={gptMovies[i].toUpperCase()} movies={movie} />
      ))}
    </div>
  )
}

export default GptSearchSuggestion