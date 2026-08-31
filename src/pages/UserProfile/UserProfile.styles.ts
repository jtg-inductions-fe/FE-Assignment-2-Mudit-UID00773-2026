import {
    Box,
    BoxProps,
    Divider,
    Paper,
    PaperProps,
    Stack,
    StackProps,
    styled,
    Typography,
    TypographyProps,
} from '@mui/material';

export const UserProfileContainer = styled(Box)<BoxProps>(({}) => ({
    minHeight: '100vh',
    paddingTop: '12vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
}));

export const UserProfileHeading = styled(Typography)<TypographyProps>(
    ({ theme }) => ({
        fontSize: theme.typography.pxToRem(24),
        fontWeight: '900',
    }),
);

export const UserProfileCard = styled(Paper)<PaperProps>(({ theme }) => ({
    display: 'flex',
    alignItems: 'strech',
    justifyContent: 'center',
    width: theme.typography.pxToRem(1000),
    background: 'white',
    padding: theme.typography.pxToRem(32),
    gap: theme.typography.pxToRem(48),

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
}));

export const UserProfileSection = styled(Stack)<StackProps>(({ theme }) => ({
    gap: theme.typography.pxToRem(24),
    justifyContent: 'space-between',
}));

export const UserProfileImage = styled('img')(({ theme }) => ({
    width: theme.typography.pxToRem(200),
    height: theme.typography.pxToRem(200),
    borderRadius: '100%',
    border: `${theme.typography.pxToRem(1)} dotted grey`,
    padding: theme.typography.pxToRem(8),
    objectFit: 'cover',
    objectPosition: 'center',
    [theme.breakpoints.down('sm')]: {
        margin: '0 auto',
    },
}));

export const ProfileDivider = styled(Divider)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));
