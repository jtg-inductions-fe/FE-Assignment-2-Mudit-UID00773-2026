import {
    Card,
    CardProps,
    Stack,
    StackProps,
    styled,
    Typography,
    TypographyProps,
} from '@mui/material';

export const InfoCard = styled(Card)<CardProps>(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'stretch',
    gap: theme.typography.pxToRem(8),
    padding: theme.typography.pxToRem(12),
    border: `${theme.typography.pxToRem(1)} solid lightgrey`,
    background: 'white',
}));

export const InfoCardHeading = styled(Typography)<TypographyProps>(
    ({ theme }) => ({
        fontSize: theme.typography.pxToRem(16),
        fontWeight: '900',
    }),
);

export const InfoCardSection = styled(Stack)<StackProps>(({ theme }) => ({
    gap: theme.typography.pxToRem(2),
    justifyContent: 'center',
}));

export const InfoCardIconContainer = styled(Stack)<StackProps>(({ theme }) => ({
    width: theme.typography.pxToRem(42),
    height: theme.typography.pxToRem(42),
    borderRadius: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d6e9cb',
}));
