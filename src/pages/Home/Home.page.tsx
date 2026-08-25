import { FormEvent, useEffect, useMemo, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Box, Button, debounce, Typography } from '@mui/material';

import { useGetUsersQuery } from '@app/api/user/userApiSlice';
import { UserCard } from '@components';

import {
    CardContainer,
    HomeContainer,
    SearchBox,
    SearchBoxContainer,
} from './Home.styles';

const Home = () => {
    const [searchContent, setSearchContent] = useState('');
    const [data, setData] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

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

    const { data: user } = useGetUsersQuery(data, {
        skip: !data || data === '',
    });

    const debouncer = useMemo(
        () =>
            debounce((value: string) => {
                setData(value);
            }, 500),
        [],
    );

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchContent === '') return;
        setSearchParams({ q: searchContent });
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextValue = e.target.value;
        setSearchContent(nextValue);
        debouncer(nextValue);
    };

    return (
        <HomeContainer>
            <Typography variant="h1">MEET THE DEVELOPERS</Typography>
            <Typography variant="h2">
                Discover Devs Through Thier Github Profiles
            </Typography>
            <SearchBoxContainer component="form" onSubmit={handleFormSubmit}>
                <Box position="absolute" top="9px" right="8px" zIndex={2}>
                    <Button variant="contained" type="submit">
                        {' '}
                        Search
                    </Button>
                </Box>
                <SearchBox
                    hiddenLabel
                    autoComplete="off"
                    variant="outlined"
                    value={searchContent}
                    onChange={handleSearchChange}
                />
            </SearchBoxContainer>
            {data ? (
                <CardContainer>
                    {user?.map((item) => (
                        <UserCard key={item.id} item={item} />
                    ))}
                </CardContainer>
            ) : null}
        </HomeContainer>
    );
};

export default Home;
