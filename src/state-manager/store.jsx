import { configureStore } from '@reduxjs/toolkit';
import UserInfo from './reducer/user';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
    configureStore({
        reducer: {
            UserInfo: UserInfo
        },
        devTools: true
    });

export const wrapper = createWrapper(makeStore);
