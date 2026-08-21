import { Box, styled } from '@mui/material';

export const AlertBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    p: 3,
    textAlign: 'center',
}));
