import { Box, Skeleton, useTheme } from '@mui/material';

import { UserCardContainer } from './UserCard.styles';

const UserCardSkeleton = () => {
    const {
        typography: { pxToRem },
    } = useTheme();

    return (
        <UserCardContainer>
            <Skeleton
                variant="circular"
                width={pxToRem(40)}
                height={pxToRem(40)}
            />
            <Box
                textAlign="left"
                display="flex"
                flexDirection="column"
                gap={pxToRem(8)}
            >
                <Skeleton
                    variant="rectangular"
                    height={pxToRem(16)}
                    width={pxToRem(140)}
                />
                <Skeleton
                    variant="rectangular"
                    height={pxToRem(16)}
                    width={pxToRem(80)}
                />
            </Box>
        </UserCardContainer>
    );
};

export default UserCardSkeleton;
