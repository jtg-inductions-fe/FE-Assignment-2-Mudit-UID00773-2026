import {
    Box,
    BoxProps,
    Paper,
    PaperProps,
    styled,
    TextField,
    TextFieldProps,
} from '@mui/material';

export const LoginContainer = styled(Box)<BoxProps>(({}) => ({
    width: '100%',
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const LoginCard = styled(Paper)<PaperProps>(({ theme }) => ({
    padding: theme.typography.pxToRem(16),
    backgroundColor: theme.palette.background.default,
    display: 'inline-flex',
    flexDirection: 'column',
    gap: theme.typography.pxToRem(16),
}));

export const LoginInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
    width: theme.typography.pxToRem(320),

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}));

export const IconContainer = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'inline-flex',
    width: 'fit-content',
    padding: theme.typography.pxToRem(12),
    backgroundColor: '#5cd62c3f',
    borderRadius: '100%',
    marginBottom: theme.typography.pxToRem(12),
    marginTop: theme.typography.pxToRem(12),
}));
