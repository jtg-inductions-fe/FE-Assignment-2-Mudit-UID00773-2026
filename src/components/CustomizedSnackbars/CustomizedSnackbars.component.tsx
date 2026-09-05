import { SyntheticEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@mui/material';
import Alert, { AlertColor } from '@mui/material/Alert';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';

import {
    closeSnackbar,
    selectAlertSeverity,
    selectMessage,
    selectOpen,
} from '@app/snackbar/snackbarSlice';

const CustomizedSnackbars = () => {
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

    return (
        <Box>
            <Snackbar
                key={message}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={alertSeverity as AlertColor}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default CustomizedSnackbars;
