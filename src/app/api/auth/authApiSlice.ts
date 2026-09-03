// import { setCredentials } from '@app/auth/authSlice';

import { IUserProfileDetails } from '@pages';

import { apiSlice } from '../base/apiSlice';
import { IUser } from '../user/userApiSlice.types';
import { transformUserProfileData } from '../user/userApiSlice.utils';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.query<IUserProfileDetails, string | null>({
            query: (token: string) => ({
                url: '/user',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            transformResponse: (response: IUser) => {
                const loadedUserInfo: IUser = response;
                return transformUserProfileData(loadedUserInfo);
            },
        }),
    }),
    overrideExisting: false,
});

export const { useLazyLoginQuery, useLoginQuery } = authApiSlice;
