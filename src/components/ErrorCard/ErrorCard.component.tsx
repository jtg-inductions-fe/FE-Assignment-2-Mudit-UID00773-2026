import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

import { ErrorBox, ErrorImage } from './ErrorCard.styles';

const ErrorCard = ({
    heading,
    message,
    imgPath,
}: {
    heading: string;
    message: string;
    imgPath: string;
}) => {
    const navigate = useNavigate();
    return (
        <ErrorBox>
            <ErrorImage src={imgPath} alt="Error" />
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                {heading}
            </Typography>
            <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: 500 }}
            >
                {message}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" onClick={() => void navigate('/')}>
                    Go to Home
                </Button>
            </Box>
        </ErrorBox>
    );
};

export default ErrorCard;
