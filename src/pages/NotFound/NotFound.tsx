import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

import { AlertBox } from './NotFound.styles';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <AlertBox>
            <Typography
                variant="h4"
                color="error"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
            >
                Page Not Found
            </Typography>
            <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: 500 }}
            >
                Could not Find the page you were looking for
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" onClick={() => void navigate('/')}>
                    Go to Home
                </Button>
            </Box>
        </AlertBox>
    );
};

export default NotFound;
