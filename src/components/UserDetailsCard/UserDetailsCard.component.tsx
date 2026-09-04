import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import GroupIcon from '@mui/icons-material/Group';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LaunchIcon from '@mui/icons-material/Launch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';

import { UserProfileContent, UserProfileInfoCard } from '@components';
import { IUserProfileDetails } from '@pages';

import {
    ProfileDivider,
    UserProfileCard,
    UserProfileHeading,
    UserProfileImage,
    UserProfileSection,
} from './UserDetailsCard.styles';

const UserDetailsCard = ({ user }: { user: IUserProfileDetails }) => {
    const theme = useTheme();

    return (
        <UserProfileCard elevation={12}>
            {!user ? (
                <Typography variant="h2">No User Data Found</Typography>
            ) : (
                <>
                    <UserProfileSection>
                        <UserProfileImage
                            src={user?.profileImage}
                            alt={user?.username}
                        />
                        <Button
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            endIcon={<LaunchIcon />}
                            color="primary"
                            onClick={() =>
                                window.open(user?.html_url, '_blank')
                            }
                        >
                            View on GitHub
                        </Button>
                    </UserProfileSection>
                    <ProfileDivider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                    />
                    <UserProfileSection flex={1}>
                        <Box>
                            <UserProfileHeading
                                variant="h3"
                                fontSize={16}
                                component="h1"
                            >
                                {user?.name ?? ''}
                            </UserProfileHeading>
                            <Typography component="h2">
                                @{user?.username}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                component="p"
                                color={user?.bio ? '' : 'lightgray'}
                            >
                                {user?.bio || 'User Bio'}
                            </Typography>
                        </Box>
                        <Stack gap={theme.typography.pxToRem(12)}>
                            <UserProfileContent
                                icon={EmailIcon}
                                content={user?.email || 'No data available'}
                            />
                            <UserProfileContent
                                icon={BusinessIcon}
                                content={user?.company || 'No data available'}
                            />
                            <UserProfileContent
                                icon={LocationOnIcon}
                                content={user?.location || 'No data available'}
                            />
                            <UserProfileContent
                                icon={CalendarMonthIcon}
                                content={
                                    user?.joined?.split('T')[0] ||
                                    'No data available'
                                }
                            />
                        </Stack>
                        <Box
                            display="flex"
                            gap={theme.typography.pxToRem(20)}
                            flexWrap="wrap"
                        >
                            <UserProfileInfoCard
                                icon={ImportContactsIcon}
                                heading="Repositories"
                                content={user?.public_repos || 0}
                            />
                            <UserProfileInfoCard
                                icon={GroupIcon}
                                heading="Followers"
                                content={user?.followers || 0}
                            />
                            <UserProfileInfoCard
                                icon={GroupIcon}
                                heading="Following"
                                content={user?.following || 0}
                            />
                        </Box>
                    </UserProfileSection>
                </>
            )}
        </UserProfileCard>
    );
};

export default UserDetailsCard;
