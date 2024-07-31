import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import movieSlice from './movieSlice';
import gptSlice from './gptSlice';
import configSlice from './configSlice';

export const appStore = configureStore({
    reducer: {
        movie: movieSlice,
        user: appSlice,
        gpt: gptSlice,
        lang: configSlice,
    }
})