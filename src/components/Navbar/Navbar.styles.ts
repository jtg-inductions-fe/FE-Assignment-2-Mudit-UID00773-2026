import { AppBar, Box, styled } from '@mui/material';

export const MyAppBar = styled(AppBar)(({ theme }) => ({
    borderRadius: theme.spacing(2),
    margin: theme.spacing(3),
    left: '0',
    width: `calc(100% - ${24}px)`,
    color: 'red',
    backgroundColor: theme.palette.background.paper,
    padding: '0px 12px',

    [theme.breakpoints.down('sm')]: {
        padding: '0px 12px',
    },
}));

export const LogoImage = styled('img')(({ theme }) => ({
    width: '140px',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
        width: '100px',
    },
}));

export const NavItemContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'stretch',
}));
