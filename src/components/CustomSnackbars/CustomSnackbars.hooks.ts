import { SyntheticEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SnackbarCloseReason } from '@mui/material';

import {
    closeSnackbar,
    selectAlertSeverity,
    selectMessage,
    selectOpen,
} from '@app/snackbar/snackbarSlice';

export const useCustomSnackbars = () => {
    const dispatch = useDispatch();

    const open = useSelector(selectOpen);
    const alertSeverity = useSelector(selectAlertSeverity);
    const message = useSelector(selectMessage);

    const handleClose = (
        _event?: SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(closeSnackbar());
    };

    return { open, alertSeverity, message, handleClose };
};
