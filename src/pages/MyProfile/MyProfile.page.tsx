import { useGetUserInfoFromTokenQuery } from '@app/api/user/userApiSlice';
import { UserDetailsCard } from '@components';
import { getTokenFromLocalStorage } from '@utils';

import { MyProfileContainer } from './MyProfile.styles';

const MyProfile = () => {
    const token = getTokenFromLocalStorage();
    const { data: user, isLoading } = useGetUserInfoFromTokenQuery(token, {
        skip: !token,
    });

    return (
        <MyProfileContainer>
            <UserDetailsCard user={user} isLoading={isLoading} />
        </MyProfileContainer>
    );
};

export default MyProfile;
