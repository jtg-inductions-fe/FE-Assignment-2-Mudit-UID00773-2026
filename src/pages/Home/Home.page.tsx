import { useEffect, useMemo, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import {
    Autocomplete,
    Box,
    debounce,
    Typography,
    useTheme,
} from '@mui/material';

import { useGetUsersQuery } from '@app/api/user/userApiSlice';
import { IUserInfo, UserCard, UserCardSkeleton } from '@components';

import { HomeContainer, SearchBox, SearchBoxContainer } from './Home.styles';

const Home = () => {
    const [searchContent, setSearchContent] = useState('');
    const [data, setData] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const theme = useTheme();

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

    const { data: user, isFetching } = useGetUsersQuery(data, {
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

    useEffect(() => () => debouncer.clear(), [debouncer]);

    const sample: IUserInfo[] = Array.from({ length: 5 }).map((_, index) => ({
        username: '',
        url: '',
        profileImage: '',
        id: index,
    }));

    return (
        <HomeContainer>
            <Typography variant="h1">MEET THE DEVELOPERS</Typography>
            <Typography variant="h2">
                Discover Devs Through Their Github Profiles
            </Typography>
            <SearchBoxContainer>
                <Autocomplete
                    freeSolo
                    options={(isFetching ? sample : user) || []}
                    open={Boolean(data)}
                    value={searchContent}
                    onInputChange={(_event, newInputValue) => {
                        setSearchContent(newInputValue);
                        debouncer(newInputValue);
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
