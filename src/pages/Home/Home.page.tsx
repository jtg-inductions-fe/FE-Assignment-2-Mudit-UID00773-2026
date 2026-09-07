import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Autocomplete, Box, Typography, useTheme } from '@mui/material';

import { UserCard, UserCardSkeleton } from '@components';
import { useSearchBar } from '@hooks';

import { HomeContainer, SearchBox, SearchBoxContainer } from './Home.styles';

const Home = () => {
    const [searchContent, setSearchContent] = useState('');
    const [data, setData] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const theme = useTheme();

    const { searchBarDebouncer, isFetching, searchUserSample, user } =
        useSearchBar(data, setData, setSearchParams);

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

    return (
        <HomeContainer>
            <Typography variant="h1">MEET THE DEVELOPERS</Typography>
            <Typography variant="h2">
                Discover Devs Through Their Github Profiles
            </Typography>
            <SearchBoxContainer>
                <Autocomplete
                    freeSolo
                    disablePortal
                    options={(isFetching ? searchUserSample : user) || []}
                    open={Boolean(data)}
                    value={searchContent}
                    onInputChange={(_event, newInputValue) => {
                        setSearchContent(newInputValue);
                        searchBarDebouncer(newInputValue);
                    }}
                    filterOptions={(x) => x}
                    loading={isFetching}
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
                                maxHeight: theme.typography.pxToRem(260),
                            },
                        },
                    }}
                    renderOption={(props, option) =>
                        isFetching ? (
                            <UserCardSkeleton />
                        ) : (
                            <UserCard
                                {...props}
                                key={option.id}
                                item={option}
                            />
                        )
                    }
                />
                {Boolean(data) && (!user || user.length == 0) && (
                    <Box
                        component="div"
                        bgcolor={theme.palette.grey[200]}
                        textAlign="left"
                        padding={4}
                    >
                        No user Found...
                    </Box>
                )}
            </SearchBoxContainer>
        </HomeContainer>
    );
};

export default Home;
