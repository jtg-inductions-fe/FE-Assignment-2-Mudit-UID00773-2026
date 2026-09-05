import { useCallback, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { useLazyLoginQuery } from '@app/api/auth/authApiSlice';
import { logOut, setCredentials } from '@app/auth/authSlice';
import { CustomizedSnackbars, Navbar } from '@components';
import { getTokenFromLocalStorage } from '@utils';

import { MainContainer } from './BaseLayout.types';

const BaseLayout = () => {
    const dispatch = useDispatch();
    const [triggerLoginQuery] = useLazyLoginQuery();

    const func = useCallback(
        async (token: string) => {
            try {
                const response = await triggerLoginQuery(token).unwrap();

                const currentToken = getTokenFromLocalStorage();

                if (currentToken !== token) {
                    return;
                }

                dispatch(setCredentials({ user: response, token: token }));
            } catch {
                const currentToken = getTokenFromLocalStorage();
                if (currentToken === token) {
                    dispatch(logOut());
                }
            }
        },
        [dispatch, triggerLoginQuery],
    );

    useEffect(() => {
        const token = getTokenFromLocalStorage();

        if (token) {
            void func(token);
        }
    }, [func]);

    return (
        <>
            <CustomizedSnackbars />
            <Navbar />
            <MainContainer component="main" maxWidth="xl">
                <Outlet />
            </MainContainer>
        </>
    );
};

export default BaseLayout;
