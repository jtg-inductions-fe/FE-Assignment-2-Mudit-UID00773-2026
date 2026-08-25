import { createEntityAdapter } from '@reduxjs/toolkit';

import { apiSlice } from './apiSlice';
import { ISearchUser } from './userApiSlice.types';

const searchUsersAdaptor = createEntityAdapter();

const initialState = searchUsersAdaptor.getInitialState();

export const searchUserApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<ISearchUser[], string>({
            query: (userSearch: string) => ({
                url: `/search/users?q=${userSearch}`,
            }),
            transformResponse: (response: { items: ISearchUser[] }) => {
                const loadedUsers: ISearchUser[] = response.items;

                searchUsersAdaptor.setAll(initialState, loadedUsers);
                return loadedUsers;
            },
        }),
    }),
    overrideExisting: false,
});

export const { useGetUsersQuery } = searchUserApiSlice;
