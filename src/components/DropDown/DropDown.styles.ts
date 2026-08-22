import { MenuItem, styled } from '@mui/material';

export const ProfileDropdownItem = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.secondary.contrastText,

    '&:hover': {
        color: 'yellow',
    },
}));
