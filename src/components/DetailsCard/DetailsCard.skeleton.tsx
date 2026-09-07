import { Box, Skeleton, Stack, useTheme } from '@mui/material';

import {
    InfoCardContainer,
    InfoCardSkeleton,
    ProfileDivider,
    UserProfileCard,
    UserProfileHeadingSkeleton,
    UserProfileImageSkeleton,
    UserProfileSection,
    UserProfileTextSkeleton,
} from './DetailsCard.styles';

const DetailsCardSkeleton = () => {
    const theme = useTheme();
    return (
        <UserProfileCard elevation={12}>
            <UserProfileSection>
                <UserProfileImageSkeleton variant="circular" />

                <Skeleton variant="rectangular" height={32} />
            </UserProfileSection>
            <ProfileDivider orientation="vertical" variant="middle" flexItem />
            <UserProfileSection flex={1}>
                <Box>
                    <UserProfileHeadingSkeleton variant="text" />

                    <UserProfileHeadingSkeleton variant="text" width="50%" />
                </Box>
                <Box>
                    <UserProfileTextSkeleton variant="text" />
                </Box>
                <Stack gap={theme.typography.pxToRem(12)}>
                    <UserProfileTextSkeleton variant="text" width="40%" />

                    <UserProfileTextSkeleton variant="text" width="40%" />

                    <UserProfileTextSkeleton variant="text" width="40%" />

                    <UserProfileTextSkeleton variant="text" width="40%" />
                </Stack>
                <InfoCardContainer>
                    <InfoCardSkeleton variant="rectangular" />

                    <InfoCardSkeleton variant="rectangular" />

                    <InfoCardSkeleton variant="rectangular" />
                </InfoCardContainer>
            </UserProfileSection>
        </UserProfileCard>
    );
};

export default DetailsCardSkeleton;
