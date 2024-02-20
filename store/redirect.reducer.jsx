import { createSlice } from "@reduxjs/toolkit";

const redirectSlice = createSlice({
    name: "redirect",
    initialState: {
        isRedirected: false,
    },
    reducers: {
        setIsRedirected: (state) => {
            state.isRedirected = true;
        },
        unsetIsRedirected: (state) => {
            state.isRedirected = false;
        },
    },
});

export default redirectSlice.reducer;
export const { setIsRedirected, unsetIsRedirected } = redirectSlice.actions;
