import { Box, BoxProps, styled } from '@mui/material';

export const UserProfileData = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.typography.pxToRem(12),
}));
