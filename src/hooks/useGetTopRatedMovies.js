import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/movieSlice";
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from "react";

const useGetTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const data = await res.json();
        dispatch(addTopRated(data.results));
    }
    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useGetTopRatedMovies;