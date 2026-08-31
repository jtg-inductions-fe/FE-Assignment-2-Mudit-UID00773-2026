import { Box, BoxProps, styled } from '@mui/material';

export const UserCardContainer = styled(Box)<BoxProps>(
    ({ theme: { spacing, palette, typography } }) => ({
        width: spacing(200),
        background: palette.grey[200],
        color: palette.secondary.main,
        padding: typography.pxToRem(12),
        display: 'flex',
        alignItems: 'center',
        gap: typography.pxToRem(24),
        borderBottom: `${typography.pxToRem(1)} solid ${palette.secondary.main}`,
    }),
);
