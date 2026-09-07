import { useGetUserInfoQuery } from '@app/api/user/userApiSlice';

export const useUserDetailFromId = (id: string) => {
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

    return { user, isLoading };
};
