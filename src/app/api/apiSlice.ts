import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://github.com',
    }),
    tagTypes: ['User', 'Profile'],
    endpoints: () => ({}),
});
