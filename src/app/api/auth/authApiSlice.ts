import { setCredentials } from '@app/auth/authSlice';

import { apiSlice } from '../base/apiSlice';
import { IUser } from '../user/userApiSlice.types';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.query<IUser, { token: string }>({
            query: ({ token }) => ({
                url: '/user',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            async onQueryStarted({ token }, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setCredentials({
                            user: data,
                            token,
                        }),
                    );
                } catch (error) {
                    throw new Error('Error during login: ' + String(error));
                }
            },
        }),
    }),
    overrideExisting: false,
});

export const { useLazyLoginQuery } = authApiSlice;
