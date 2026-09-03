import { Box, BoxProps, styled } from '@mui/material';

export const UserCardContainer = styled(Box)<BoxProps>(
    ({ theme: { spacing, palette } }) => ({
        width: spacing(200),
        backgroundColor: palette.grey[200],
        color: palette.secondary.main,
        padding: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        borderBottom: `1px solid ${palette.secondary.main}`,
    }),
);
