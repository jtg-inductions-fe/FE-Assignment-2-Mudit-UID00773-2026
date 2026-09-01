import { Box, styled } from '@mui/material';

export const UserCardContainer = styled(Box)(
    ({ theme: { spacing, palette } }) => ({
        width: spacing(200),
        background: '#0f0f0f1f',
        color: palette.secondary.main,
        padding: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        borderBottom: `1px solid ${palette.secondary.main}`,
    }),
) as typeof Box;
