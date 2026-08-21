import { useNavigate, useRouteError } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

import { AlertBox } from './ErrorBoundaryPage.styles';

const ErrorBoundaryPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();

    let errorMessage = 'An unexpected runtime error occurred.';

    if (error instanceof Error) {
        errorMessage = error.message;
    } else if (
        typeof error === 'object' &&
        error !== null &&
        'statusText' in error
    ) {
        errorMessage = (error as { statusText: string }).statusText;
    }
    return (
        <AlertBox>
            <Typography
                variant="h4"
                color="error"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
            >
                Application Error
            </Typography>
            <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: 500 }}
            >
                {errorMessage}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" onClick={() => void navigate('/')}>
                    Go to Home
                </Button>
            </Box>
        </AlertBox>
    );
};

export default ErrorBoundaryPage;
