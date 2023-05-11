/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';

export const UserInfo = createSlice({
    name: 'userInfo',
    initialState: {
        theme: typeof window !== 'undefined' && localStorage.getItem('theme') !== null ? localStorage.getItem('theme') : 'light',
        isLogin: typeof window !== 'undefined' && localStorage.getItem('pmlmToken') !== null ? true : false,
        role: '',
        username: '',
        fullname: '',
        rank: 1,
        rank_image: '',
        description: '',
        jdate: ''
    },
    reducers: {
        themeStateHandler: (state, action) => {
            state.theme = action.payload;
        },
        userInfohandler: (state, action) => {
            Object.keys(action.payload).forEach(item => {
                state[item] = action.payload[item];
            });
        },
        loginStatushandler: (state, action) => {
            state.isLogin = action.payload;
        }
    }
});

export const { themeStateHandler, userInfohandler, loginStatushandler } = UserInfo.actions;

export default UserInfo.reducer;
