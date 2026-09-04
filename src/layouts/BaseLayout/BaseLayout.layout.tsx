import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import { useLazyLoginQuery } from '@app/api/auth/authApiSlice';
import { logOut, setCredentials } from '@app/auth/authSlice';
import { Navbar } from '@components';
import { getTokenFromLocalStorage } from '@utils';

const BaseLayout = () => {
    const dispatch = useDispatch();
    const [triggerLoginQuery] = useLazyLoginQuery();

    const func = async (token: string) => {
        try {
            const response = await triggerLoginQuery(token).unwrap();

            const currentToken = getTokenFromLocalStorage();

            if (currentToken !== token) {
                return;
            }

            dispatch(setCredentials({ user: response, token: token }));
        } catch {
            dispatch(logOut());
        }
    };

    useEffect(() => {
        const token = getTokenFromLocalStorage();

        if (token) {
            void func(token);
        }
    }, []);

    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <Box component="main">
                    <Outlet />
                </Box>
            </Container>
        </>
    );
};

export default BaseLayout;
