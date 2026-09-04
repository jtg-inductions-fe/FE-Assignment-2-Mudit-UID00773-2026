import { useParams } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import { useGetUserInfoQuery } from '@app/api/user/userApiSlice';
import { UserDetailsCard } from '@components';

import { UserProfileContainer } from './UserProfile.styles';

const UserProfile = () => {
    const { id } = useParams();
    const {
        data: user,
        isLoading,
        isError,
        error,
    } = useGetUserInfoQuery(id ?? '', {
        skip: !id,
    });

    if (
        isError &&
        'data' in error &&
        typeof error.data == 'object' &&
        error.data !== null &&
        'message' in error.data
    ) {
        throw Error('Error fetching user data: ' + String(error.data.message));
    }

    return (
        <UserProfileContainer minHeight="100vh" paddingTop="12vh">
            {isLoading ? (
                <CircularProgress aria-label="Loading…" />
            ) : (
                <>{user && <UserDetailsCard user={user} />}</>
            )}
        </UserProfileContainer>
    );
};

export default UserProfile;
