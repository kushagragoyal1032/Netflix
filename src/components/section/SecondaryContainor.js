import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainor = () => {
    const movies = useSelector((store) => store.movie?.movies);
    const popularMovies = useSelector((store) => store.movie?.popularMovies);
    const topRatedMovies = useSelector((store) => store.movie?.topRated);
    return (
        <div className='bg-black pt-[40%] md:p-0'>
            <div className='-mt-52 z-20 relative'>
                <MovieList title={"Now Playing"} movies={movies} />
                <MovieList title={"Top Rated"} movies={topRatedMovies} />
                <MovieList title={"Popular Movies"} movies={popularMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainor