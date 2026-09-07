import { useGetUserInfoFromTokenQuery } from '@app/api/user/userApiSlice';

export const useUserDetailFromToken = (token: string) => {
    const { data: user, isLoading } = useGetUserInfoFromTokenQuery(token, {
        skip: !token,
    });

    return { user, isLoading };
};
