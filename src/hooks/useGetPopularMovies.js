import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from "react";

const useGetPopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movie.popularMovies);
    const getPopularMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const data = await res.json();
        dispatch(addPopularMovies(data.results));
    }
    useEffect(() => {
        !popularMovies && getPopularMovies();
    }, []);
}

export default useGetPopularMovies;