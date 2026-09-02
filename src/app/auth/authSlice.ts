import {
    removeTokenFromLocalStorage,
    removeUserFromLocalStorage,
    setTokenToLocalStorage,
    setUserToLocalStorage,
} from 'utils/userLocalStorage';

import { IUser } from '@app/api/user/userApiSlice.types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: {
    user: IUser | null;
    token: string;
    isAuthenticated: boolean;
} = {
    user: null,
    token: '',
    isAuthenticated: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: { payload: { user: IUser; token: string } },
        ) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isAuthenticated = true;

            setUserToLocalStorage(user);
            setTokenToLocalStorage(token);
        },
        logOut: (state) => {
            state.user = null;
            state.token = '';
            state.isAuthenticated = false;

            removeUserFromLocalStorage();
            removeTokenFromLocalStorage();
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
