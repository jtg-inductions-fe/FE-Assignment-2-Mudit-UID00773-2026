import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'example.com',
    }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    endpoints: (builder) => ({}),
});
