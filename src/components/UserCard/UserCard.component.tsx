import { Link } from 'react-router-dom';

import { Avatar, Box, Typography } from '@mui/material';

import { ISearchUser } from '@app/api/user/userApiSlice.types';

import { UserCardContainer } from './UserCard.styles';

const UserCard = ({ item }: { item: ISearchUser }) => (
    <UserCardContainer color="secondary">
        <Avatar src={item.avatar_url} />
        <Box textAlign="left">
            <Typography>{item.login}</Typography>
            <Link color="primary" to={`/user/${item.login}`}>
                Know more
            </Link>
        </Box>
    </UserCardContainer>
);

export default UserCard;
