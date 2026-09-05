import { IUserInfo } from '@components';
import { ENDPOINTS } from '@constant';

import { IUserProfileDetails } from './userApiSlice.types';
import { ISearchUser, IUser } from './userApiSlice.types';
import {
    transformUserData,
    transformUserProfileData,
} from './userApiSlice.utils';
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
        getUserInfo: builder.query<IUserProfileDetails, string>({
            query: (username: string) => ({
                url: ENDPOINTS.GET_USER_INFO.replace(':username', username),
            }),
            transformResponse: (response: IUser) => {
                const loadedUserInfo: IUser = response;
                return transformUserProfileData(loadedUserInfo);
            },
        }),
        getUserInfoFromToken: builder.query<IUserProfileDetails, string | null>(
            {
                query: (token: string) => ({
                    url: ENDPOINTS.GET_USER_INFO_FROM_TOKEN,
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                transformResponse: (response: IUser) => {
                    const loadedUserInfo: IUser = response;
                    return transformUserProfileData(loadedUserInfo);
                },
            },
        ),
    }),
    overrideExisting: false,
});

export const {
    useGetUsersQuery,
    useGetUserInfoQuery,
    useGetUserInfoFromTokenQuery,
    useLazyGetUserInfoFromTokenQuery,
} = searchUserApiSlice;
