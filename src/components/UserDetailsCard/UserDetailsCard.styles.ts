import {
    Divider,
    Paper,
    PaperProps,
    Stack,
    StackProps,
    styled,
    Typography,
    TypographyProps,
} from '@mui/material';

export const UserProfileHeading = styled(Typography)<TypographyProps>(
    ({ theme: { typography } }) => ({
        fontSize: typography.pxToRem(24),
        fontWeight: '900',
    }),
);

export const UserProfileCard = styled(Paper)<PaperProps>(
    ({ theme: { typography, breakpoints } }) => ({
        display: 'flex',
        alignItems: 'strech',
        justifyContent: 'center',
        width: typography.pxToRem(1000),
        background: 'white',
        padding: typography.pxToRem(32),
        gap: typography.pxToRem(48),

        [breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    }),
);

export const UserProfileSection = styled(Stack)<StackProps>(
    ({ theme: { typography } }) => ({
        gap: typography.pxToRem(24),
        justifyContent: 'space-between',
    }),
);

export const UserProfileImage = styled('img')(
    ({ theme: { typography, breakpoints } }) => ({
        width: typography.pxToRem(200),
        height: typography.pxToRem(200),
        borderRadius: '100%',
        border: `${typography.pxToRem(1)} dotted grey`,
        padding: typography.pxToRem(8),
        objectFit: 'cover',
        objectPosition: 'center',
        [breakpoints.down('sm')]: {
            margin: '0 auto',
        },
    }),
);

export const ProfileDivider = styled(Divider)(({ theme: { breakpoints } }) => ({
    [breakpoints.down('sm')]: {
        display: 'none',
    },
}));
