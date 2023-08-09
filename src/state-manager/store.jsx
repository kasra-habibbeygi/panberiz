import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import Utils from './reducer/utils';
import UserInfo from './reducer/user';

const makeStore = () =>
    configureStore({
        reducer: {
            UserInfo: UserInfo,
            Utils: Utils
        },
        devTools: true
    });

export const wrapper = createWrapper(makeStore);
