import { Link } from 'react-router-dom';

import { Avatar, Box, Typography } from '@mui/material';

import { IUserInfo } from '@app/api/user/userApiSlice.types';

import { UserCardContainer } from './UserCard.styles';

const UserCard = ({ item }: { item: IUserInfo }) => (
    <UserCardContainer>
        <Avatar src={item.profileImage} />
        <Box textAlign="left">
            <Typography>{item.username}</Typography>
            <Link color="primary" to={`/user/${item.username}`}>
                Know more
            </Link>
        </Box>
    </UserCardContainer>
);

export default UserCard;
