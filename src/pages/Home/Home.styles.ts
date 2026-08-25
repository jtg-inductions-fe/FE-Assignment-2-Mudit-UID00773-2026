import { Box, styled, TextField } from '@mui/material';

export const HomeContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30vh',
    textAlign: 'center',

    [theme.breakpoints.down('md')]: {
        marginTop: '20vh',
    },
}));

export const SearchBoxContainer = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(12),
    position: 'relative',
})) as typeof Box;

export const SearchBox = styled(TextField)(({ theme }) => ({
    width: theme.spacing(160),
    textAlign: 'center',

    [theme.breakpoints.down('md')]: {
        width: theme.spacing(140),
    },

    [theme.breakpoints.down('sm')]: {
        width: theme.spacing(60),
    },
})) as typeof TextField;

export const CardContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: theme.spacing(160),
    maxHeight: '42vh',
    overflowY: 'scroll',
    overflowX: 'hidden',

    [theme.breakpoints.down('md')]: {
        width: theme.spacing(140),
    },

    [theme.breakpoints.down('sm')]: {
        width: theme.spacing(60),
    },
}));
