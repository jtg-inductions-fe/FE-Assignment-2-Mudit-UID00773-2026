import { useEffect, useMemo, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Autocomplete, debounce, Typography } from '@mui/material';

import { useGetUsersQuery } from '@app/api/user/userApiSlice';
import { UserCard } from '@components';

import { HomeContainer, SearchBox, SearchBoxContainer } from './Home.styles';

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

    const { data: user, isLoading } = useGetUsersQuery(data, {
        skip: !data || data === '',
    });

    const debouncer = useMemo(
        () =>
            debounce((value: string) => {
                setData(value);
                setSearchParams(value ? { q: value } : {});
            }, 500),
        [setSearchParams],
    );

    return (
        <HomeContainer>
            <Typography variant="h1">MEET THE DEVELOPERS</Typography>
            <Typography variant="h2">
                Discover Devs Through Their Github Profiles
            </Typography>
            <SearchBoxContainer>
                <Autocomplete
                    freeSolo
                    options={user || []}
                    open={Boolean(data) && !isLoading}
                    value={searchContent}
                    onInputChange={(_event, newInputValue) => {
                        setSearchContent(newInputValue);
                        debouncer(newInputValue);
                    }}
                    filterOptions={(x) => x}
                    loading={isLoading}
                    renderInput={(params) => (
                        <SearchBox
                            {...params}
                            hiddenLabel
                            autoComplete="off"
                            variant="outlined"
                            placeholder="Search for a developer"
                        />
                    )}
                    slotProps={{
                        listbox: {
                            sx: {
                                padding: 0,
                                overflowX: 'hidden',
                            },
                        },
                    }}
                    renderOption={(props, option) => (
                        <UserCard {...props} key={option.id} item={option} />
                    )}
                />
            </SearchBoxContainer>
        </HomeContainer>
    );
};

export default Home;
