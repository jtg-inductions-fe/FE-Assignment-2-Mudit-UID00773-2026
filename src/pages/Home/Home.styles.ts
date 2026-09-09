import {
    Box,
    BoxProps,
    styled,
    TextField,
    TextFieldProps,
} from '@mui/material';

export const HomeContainer = styled(Box)<BoxProps>(
    ({ theme: { breakpoints } }) => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',

        [breakpoints.down('md')]: {
            marginTop: '4vh',
        },
    }),
);

export const SearchBoxContainer = styled(Box)<BoxProps>(
    ({ theme: { spacing } }) => ({
        marginTop: spacing(12),
        position: 'relative',
    }),
);

export const SearchBox = styled(TextField)<TextFieldProps>(
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
);

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
