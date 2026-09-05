import { useParams } from 'react-router-dom';

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
        <UserProfileContainer>
            <UserDetailsCard user={user} isLoading={isLoading} />
        </UserProfileContainer>
    );
};

export default UserProfile;
