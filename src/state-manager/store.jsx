import { configureStore } from '@reduxjs/toolkit';
import UserInfo from './reducer/user';

const store = configureStore({
    reducer: {
        UserInfo: UserInfo
    }
});

export default store;
