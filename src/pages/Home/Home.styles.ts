import { Box, styled, TextField } from '@mui/material';

export const HomeContainer = styled(Box)(({ theme: { breakpoints } }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10vh',
    marginTop: '10vh',
    minHeight: '90vh',
    textAlign: 'center',

    [breakpoints.down('md')]: {
        marginTop: '10vh',
    },
}));

export const SearchBoxContainer = styled(Box)(({ theme: { spacing } }) => ({
    marginTop: spacing(12),
    position: 'relative',
})) as typeof Box;

export const SearchBox = styled(TextField)(
    ({ theme: { spacing, breakpoints } }) => ({
        width: spacing(160),
        textAlign: 'center',

        [breakpoints.down('md')]: {
            width: spacing(140),
        },

        [breakpoints.down('sm')]: {
            width: spacing(60),
        },
    }),
) as typeof TextField;

export const CardContainer = styled(Box)(
    ({ theme: { spacing, breakpoints } }) => ({
        display: 'flex',
        flexDirection: 'column',
        width: spacing(160),
        maxHeight: '42vh',
        overflowY: 'scroll',
        overflowX: 'hidden',

        [breakpoints.down('md')]: {
            width: spacing(140),
        },

        [breakpoints.down('sm')]: {
            width: spacing(60),
        },
    }),
);
