import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: null,
        popularMovies: null,
        topRated: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.movies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        }
    },
})

export const { addNowPlayingMovies, addPopularMovies, addTopRated } = movieSlice.actions;
export default movieSlice.reducer;