import { createSlice } from '@reduxjs/toolkit';

import { IintialState } from './snackbarSlice.types';

const initialState: IintialState = {
    open: false,
    alertSeverity: 'info',
    message: '',
};

export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        openSnackbar: (
            state,
            action: { payload: { alertSeverity: string; message: string } },
        ) => {
            const { alertSeverity, message } = action.payload;

            state.open = true;
            state.alertSeverity = alertSeverity;
            state.message = message;
        },
        closeSnackbar: (state) => {
            state.open = false;
            state.alertSeverity = 'info';
            state.message = '';
        },
    },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;

export const selectOpen = (state: { snackbar: IintialState }) =>
    state.snackbar.open;

export const selectAlertSeverity = (state: { snackbar: IintialState }) =>
    state.snackbar.alertSeverity;

export const selectMessage = (state: { snackbar: IintialState }) =>
    state.snackbar.message;

export default snackbarSlice.reducer;
