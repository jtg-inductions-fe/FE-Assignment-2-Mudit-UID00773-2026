import { useLoginQuery } from '@app/api/auth/authApiSlice';
import { UserDetailsCard } from '@components';
import { getTokenFromLocalStorage } from '@utils';

import { MyProfileContainer } from './MyProfile.styles';

const MyProfile = () => {
    const token = getTokenFromLocalStorage();
    const { data: user, isLoading } = useLoginQuery(token, { skip: !token });

    return (
        <MyProfileContainer minHeight="100vh" paddingTop="12vh">
            <UserDetailsCard user={user} isLoading={isLoading} />
        </MyProfileContainer>
    );
};

export default MyProfile;
