import { Dispatch, SetStateAction, useMemo } from 'react';

import { SetURLSearchParams } from 'react-router-dom';

import { debounce } from '@mui/material';

import { useGetUsersQuery } from '@app/api/user/userApiSlice';
import { IUserInfo } from '@components';

export const useSearchBar = (
    data: string,
    setData: Dispatch<SetStateAction<string>>,
    setSearchParams: SetURLSearchParams,
) => {
    const { data: user, isFetching } = useGetUsersQuery(data, {
        skip: !data || data === '',
    });

    const searchBarDebouncer = useMemo(
        () =>
            debounce((value: string) => {
                setData(value);
                setSearchParams(value ? { q: value } : {});
            }, 500),
        [setData, setSearchParams],
    );
    const searchUserSample: IUserInfo[] = Array.from({ length: 5 }).map(
        (_, index) => ({
            username: '',
            url: '',
            profileImage: '',
            id: index,
        }),
    );

    return { user, isFetching, searchBarDebouncer, searchUserSample };
};
