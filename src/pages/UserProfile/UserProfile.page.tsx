import { Box, styled, Typography } from '@mui/material';

import image from '@assets/images/Logo.png';

export const UserProfileContainer = styled(Box)(() => ({
    minHeight: '100vh',
    background: 'beige',
    paddingTop: '12vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const UserProfileHeading = styled(Typography)(({}) => ({
    fontSize: '2px',
})) as typeof Typography;

const UserProfile = () => (
    <UserProfileContainer>
        <Box>
            <img src={image} alt="" />
        </Box>
        <Box>
            <UserProfileHeading variant="h1">
                Mudit Kumar Singh
            </UserProfileHeading>
        </Box>
    </UserProfileContainer>
);

export default UserProfile;
