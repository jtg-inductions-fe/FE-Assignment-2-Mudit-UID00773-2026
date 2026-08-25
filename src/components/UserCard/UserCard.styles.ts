import { Box, styled } from '@mui/material';

export const UserCardContainer = styled(Box)(({ theme }) => ({
    width: theme.spacing(200),
    background: '#0f0f0f1f',
    color: theme.palette.secondary.main,
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
})) as typeof Box;
