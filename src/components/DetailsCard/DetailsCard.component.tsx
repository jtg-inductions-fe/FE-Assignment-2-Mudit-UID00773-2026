import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import GroupIcon from '@mui/icons-material/Group';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LaunchIcon from '@mui/icons-material/Launch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';

import { IUserProfileDetails } from '@app/api/user/userApiSlice.types';
import { DetailItem, InfoCard } from '@components';

import {
    InfoCardContainer,
    ProfileDivider,
    UserProfileCard,
    UserProfileHeading,
    UserProfileImage,
    UserProfileSection,
} from './DetailsCard.styles';

const DetailsCard = ({ user }: { user: IUserProfileDetails | undefined }) => {
    const theme = useTheme();
    return (
        <UserProfileCard elevation={12}>
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
                    onClick={() => window.open(user?.htmlUrl, '_blank')}
                >
                    View on GitHub
                </Button>
            </UserProfileSection>
            <ProfileDivider orientation="vertical" variant="middle" flexItem />
            <UserProfileSection flex={1}>
                <Box>
                    <UserProfileHeading
                        variant="h3"
                        fontSize={16}
                        component="h1"
                    >
                        {user?.name ?? ''}
                    </UserProfileHeading>

                    <Typography component="h2">@{user?.username}</Typography>
                </Box>
                <Box>
                    <Typography component="p">{user?.bio}</Typography>
                </Box>
                <Stack gap={theme.typography.pxToRem(12)}>
                    <DetailItem
                        icon={EmailIcon}
                        content={user?.email || 'No data available'}
                    />

                    <DetailItem
                        icon={BusinessIcon}
                        content={user?.company || 'No data available'}
                    />

                    <DetailItem
                        icon={LocationOnIcon}
                        content={user?.location || 'No data available'}
                    />

                    <DetailItem
                        icon={CalendarMonthIcon}
                        content={
                            user?.joined?.split('T')[0] || 'No data available'
                        }
                    />
                </Stack>
                <InfoCardContainer>
                    <InfoCard
                        icon={ImportContactsIcon}
                        heading="Repositories"
                        content={user?.publicRepos || 0}
                    />

                    <InfoCard
                        icon={GroupIcon}
                        heading="Followers"
                        content={user?.followers || 0}
                    />

                    <InfoCard
                        icon={GroupIcon}
                        heading="Following"
                        content={user?.following || 0}
                    />
                </InfoCardContainer>
            </UserProfileSection>
        </UserProfileCard>
    );
};

export default DetailsCard;
