import { Box } from '@mui/material';
import Alert, { AlertColor } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { useCustomizedSnackbars } from './CustomizedSnackbars.hooks';

const CustomizedSnackbars = () => {
    const { alertSeverity, handleClose, message, open } =
        useCustomizedSnackbars();

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
