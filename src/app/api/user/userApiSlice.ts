import { IUserInfo } from '@components';
import { ENDPOINTS } from '@constant';

import { ISearchUser } from './userApiSlice.types';
import { transformUserData } from './userApiSlice.utils';
import { apiSlice } from '../base/apiSlice';

export const searchUserApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<IUserInfo[], string>({
            query: (userSearch: string) => ({
                url: ENDPOINTS.GET_USERS.replace('username', userSearch),
            }),
            transformResponse: (response: { items: ISearchUser[] }) => {
                const loadedUsers: ISearchUser[] = response.items;
                return transformUserData(loadedUsers);
            },
        }),
    }),
    overrideExisting: false,
});

export const { useGetUsersQuery } = searchUserApiSlice;
