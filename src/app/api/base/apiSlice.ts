import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com',
    }),
    tagTypes: ['User', 'Profile'],
    endpoints: () => ({}),
});
