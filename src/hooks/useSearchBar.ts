import { useEffect, useMemo, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { debounce } from '@mui/material';

import { useGetUsersQuery } from '@app/api/user/userApiSlice';
import { IUserInfo } from '@components';

export const useSearchBar = () => {
    const [searchContent, setSearchContent] = useState('');
    const [data, setData] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

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

    useEffect(() => () => searchBarDebouncer.clear(), [searchBarDebouncer]);
    useEffect(() => {
        const q = searchParams.get('q');
        if (q) {
            setSearchContent(q);
            setData(q);
        } else {
            setSearchContent('');
            setData('');
        }
    }, [searchParams]);

    return {
        searchContent,
        setSearchContent,
        user,
        data,
        isFetching,
        searchBarDebouncer,
        searchUserSample,
    };
};
