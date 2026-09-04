import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getTokenFromLocalStorage } from '@utils';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com',
        prepareHeaders: (headers) => {
            if (!headers.has('authorization')) {
                const token = getTokenFromLocalStorage();

                if (token) {
                    headers.set('authorization', `Bearer ${token}`);
                }
            }

            return headers;
        },
    }),
    tagTypes: ['User', 'Profile'],
    endpoints: () => ({}),
});
