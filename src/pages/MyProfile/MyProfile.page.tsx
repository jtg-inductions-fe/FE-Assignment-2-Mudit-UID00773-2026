import { DetailsCard, DetailsCardSkeleton } from '@components';
import { useUserDetailFromToken } from '@hooks';
import { getTokenFromLocalStorage } from '@utils';

import { MyProfileContainer } from './MyProfile.styles';

const MyProfile = () => {
    const token = getTokenFromLocalStorage();

    const { user, isLoading } = useUserDetailFromToken(token!);

    return (
        <MyProfileContainer>
            {isLoading ? <DetailsCardSkeleton /> : <DetailsCard user={user} />}
        </MyProfileContainer>
    );
};

export default MyProfile;
