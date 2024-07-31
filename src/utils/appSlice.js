import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null
    },
    reducers: {
        addUser: (state, action) => {
            state.userData = action.payload;
        },
        removeUser: (state, action) => {
            state.userData = null;
        }
    },
})

export const { addUser, removeUser } = appSlice.actions;
export default appSlice.reducer;