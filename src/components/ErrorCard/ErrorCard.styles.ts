import { Box, styled } from '@mui/material';

export const ErrorBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    padding: 3,
    textAlign: 'center',
    marginTop: '10vh',
}));

export const ErrorImage = styled('img')(
    ({ theme: { spacing, typography } }) => ({
        width: spacing(160),
        height: spacing(80),
        objectFit: 'cover',
        objectPosition: 'center',
        marginBottom: typography.pxToRem(24),
    }),
);
