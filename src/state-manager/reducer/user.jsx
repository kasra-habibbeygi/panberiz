/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';

const dirProvider = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('pmlmLang') !== null) {
            return localStorage.getItem('pmlmLang');
        }
        return 'fa';
    }

    return 'fa';
};

export const UserInfo = createSlice({
    name: 'userInfo',
    initialState: {
        theme: typeof window !== 'undefined' && localStorage.getItem('theme') !== null ? localStorage.getItem('theme') : 'light',
        lang: dirProvider(),
        isLogin: typeof window !== 'undefined' && localStorage.getItem('pmlmToken') !== null ? true : false,
        role:
            typeof window !== 'undefined' && localStorage.getItem('pmlmToken') !== null
                ? JSON.parse(localStorage.getItem('pmlmToken')).role
                : '',
        username: '',
        fullname: '',
        rank: 1
    },
    reducers: {
        themeStateHandler: (state, action) => {
            state.theme = action.payload;
        },
        userInfohandler: (state, action) => {
            Object.keys(action.payload).forEach(item => {
                if (item === 'user_role') {
                    state.role = action.payload[item];
                } else {
                    state[item] = action.payload[item];
                }
            });
        },
        loginStatushandler: (state, action) => {
            state.isLogin = action.payload;
        },
        roleHandler: (state, action) => {
            state.role = action.payload;
        },
        langHandler: (state, action) => {
            state.lang = action.payload;
        }
    }
});

export const { themeStateHandler, userInfohandler, loginStatushandler, roleHandler, langHandler } = UserInfo.actions;

export default UserInfo.reducer;
