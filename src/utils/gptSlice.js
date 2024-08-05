import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showSearchView: false,
        gptMovies: null,
        moviesResults: null,
    },
    reducers: {
        toggleSearchView: (state) => {
            state.showSearchView = !state.showSearchView;
        },
        addGptMovies: (state, action) => {
            const { movies, movieResult } = action.payload;
            state.gptMovies = movies;
            state.moviesResults = movieResult;
        }
    },
})

export const { toggleSearchView, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;