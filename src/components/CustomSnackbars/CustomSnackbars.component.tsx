import { Box } from '@mui/material';
import Alert, { AlertColor } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { useCustomSnackbars } from './CustomSnackbars.hooks';

const CustomSnackbars = () => {
    const { alertSeverity, handleClose, message, open } = useCustomSnackbars();

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

export default CustomSnackbars;
