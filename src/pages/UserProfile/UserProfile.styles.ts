import { Box, BoxProps, styled } from '@mui/material';

export const UserProfileContainer = styled(Box)<BoxProps>(({}) => ({
    minHeight: '100vh',
    paddingTop: '12vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
}));
