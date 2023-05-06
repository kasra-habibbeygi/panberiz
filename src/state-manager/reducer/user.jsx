import { createSlice } from '@reduxjs/toolkit';

export const UserInfo = createSlice({
    name: 'userInfo',
    initialState: {
        theme: typeof window !== 'undefined' && localStorage.getItem('theme') !== null ? localStorage.getItem('theme') : 'light'
    },
    reducers: {
        themeStateHandler: (state, action) => {
            state.theme = action.payload;
        }
    }
});

export const { themeStateHandler } = UserInfo.actions;

export default UserInfo.reducer;
