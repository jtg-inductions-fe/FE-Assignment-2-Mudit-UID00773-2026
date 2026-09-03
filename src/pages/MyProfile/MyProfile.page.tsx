import { useLoginQuery } from '@app/api/auth/authApiSlice';
import { UserDetailsCard } from '@components';
import { getTokenFromLocalStorage } from '@utils';

import { MyProfileContainer } from './MyProfile.styles';

const MyProfile = () => {
    const token = getTokenFromLocalStorage();
    const { data: user } = useLoginQuery(token);

    return (
        <MyProfileContainer minHeight="100vh" paddingTop="12vh">
            {user && <UserDetailsCard {...user} />}
        </MyProfileContainer>
    );
};

export default MyProfile;
