import { useUserDetailFromId } from 'hooks/useUserDetailFromId';
import { useParams } from 'react-router-dom';

import { DetailsCard, DetailsCardSkeleton } from '@components';

import { UserProfileContainer } from './UserProfile.styles';

const UserProfile = () => {
    const { id } = useParams();

    const { isLoading, user } = useUserDetailFromId(id!);

    return (
        <UserProfileContainer>
            {isLoading ? (
                <DetailsCardSkeleton />
            ) : (
                <DetailsCard user={user} isLoading={isLoading} />
            )}
        </UserProfileContainer>
    );
};

export default UserProfile;
