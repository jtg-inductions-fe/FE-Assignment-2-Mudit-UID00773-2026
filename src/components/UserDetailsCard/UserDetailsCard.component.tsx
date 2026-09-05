import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import GroupIcon from '@mui/icons-material/Group';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LaunchIcon from '@mui/icons-material/Launch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
    Box,
    Button,
    Skeleton,
    Stack,
    Typography,
    useTheme,
} from '@mui/material';

import { IUserProfileDetails } from '@app/api/user/userApiSlice.types';
import { UserProfileContent, UserProfileInfoCard } from '@components';

import {
    ProfileDivider,
    UserProfileCard,
    UserProfileHeading,
    UserProfileHeadingSkeleton,
    UserProfileImage,
    UserProfileImageSkeleton,
    UserProfileInfoCardContainer,
    UserProfileInfoCardSkeleton,
    UserProfileSection,
    UserProfileTextSkeleton,
} from './UserDetailsCard.styles';

const UserDetailsCard = ({
    user,
    isLoading,
}: {
    user: IUserProfileDetails | undefined;
    isLoading: boolean;
}) => {
    const theme = useTheme();
    return (
        <UserProfileCard elevation={12}>
            <UserProfileSection>
                {isLoading ? (
                    <UserProfileImageSkeleton variant="circular" />
                ) : (
                    <UserProfileImage
                        src={user?.profileImage}
                        alt={user?.username}
                    />
                )}
                {isLoading ? (
                    <Skeleton variant="rectangular" height={32} />
                ) : (
                    <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        endIcon={<LaunchIcon />}
                        color="primary"
                        onClick={() => window.open(user?.htmlUrl, '_blank')}
                    >
                        View on GitHub
                    </Button>
                )}
            </UserProfileSection>
            <ProfileDivider orientation="vertical" variant="middle" flexItem />
            <UserProfileSection flex={1}>
                <Box>
                    {isLoading ? (
                        <UserProfileHeadingSkeleton variant="text" />
                    ) : (
                        <UserProfileHeading
                            variant="h3"
                            fontSize={16}
                            component="h1"
                        >
                            {user?.name ?? ''}
                        </UserProfileHeading>
                    )}
                    {isLoading ? (
                        <UserProfileHeadingSkeleton
                            variant="text"
                            width="50%"
                        />
                    ) : (
                        <Typography component="h2">
                            @{user?.username}
                        </Typography>
                    )}
                </Box>
                <Box>
                    {isLoading ? (
                        <UserProfileTextSkeleton variant="text" />
                    ) : user?.bio ? (
                        <Typography component="p">{user?.bio}</Typography>
                    ) : null}
                </Box>
                <Stack gap={theme.typography.pxToRem(12)}>
                    {isLoading ? (
                        <UserProfileTextSkeleton variant="text" width="40%" />
                    ) : (
                        <UserProfileContent
                            icon={EmailIcon}
                            content={user?.email || 'No data available'}
                        />
                    )}
                    {isLoading ? (
                        <UserProfileTextSkeleton variant="text" width="40%" />
                    ) : (
                        <UserProfileContent
                            icon={BusinessIcon}
                            content={user?.company || 'No data available'}
                        />
                    )}
                    {isLoading ? (
                        <UserProfileTextSkeleton variant="text" width="40%" />
                    ) : (
                        <UserProfileContent
                            icon={LocationOnIcon}
                            content={user?.location || 'No data available'}
                        />
                    )}
                    {isLoading ? (
                        <UserProfileTextSkeleton variant="text" width="40%" />
                    ) : (
                        <UserProfileContent
                            icon={CalendarMonthIcon}
                            content={
                                user?.joined?.split('T')[0] ||
                                'No data available'
                            }
                        />
                    )}
                </Stack>
                <UserProfileInfoCardContainer>
                    {isLoading ? (
                        <UserProfileInfoCardSkeleton variant="rectangular" />
                    ) : (
                        <UserProfileInfoCard
                            icon={ImportContactsIcon}
                            heading="Repositories"
                            content={user?.publicRepos || 0}
                        />
                    )}
                    {isLoading ? (
                        <UserProfileInfoCardSkeleton variant="rectangular" />
                    ) : (
                        <UserProfileInfoCard
                            icon={GroupIcon}
                            heading="Followers"
                            content={user?.followers || 0}
                        />
                    )}
                    {isLoading ? (
                        <UserProfileInfoCardSkeleton variant="rectangular" />
                    ) : (
                        <UserProfileInfoCard
                            icon={GroupIcon}
                            heading="Following"
                            content={user?.following || 0}
                        />
                    )}
                </UserProfileInfoCardContainer>
            </UserProfileSection>
        </UserProfileCard>
    );
};

export default UserDetailsCard;
