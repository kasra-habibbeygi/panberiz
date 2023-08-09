/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';

export const Utils = createSlice({
    name: 'utils',
    initialState: {
        loader: false
    },

    reducers: {
        loaderStatusHandler: (state, action) => {
            state.loader = action.payload;
        }
    }
});

export const { loaderStatusHandler } = Utils.actions;

export default Utils.reducer;
