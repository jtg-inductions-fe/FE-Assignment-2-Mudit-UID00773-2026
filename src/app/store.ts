import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './api/base/apiSlice';
import authReducer from './auth/authSlice';
import snackbarReducer from './snackbar/snackbarSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        snackbar: snackbarReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
