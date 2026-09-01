import { MenuItem, styled } from '@mui/material';

export const ProfileDropdownItem = styled(MenuItem)(
    ({ theme: { palette } }) => ({
        color: palette.secondary.contrastText,

        '&:hover': {
            color: 'yellow',
        },
    }),
);
