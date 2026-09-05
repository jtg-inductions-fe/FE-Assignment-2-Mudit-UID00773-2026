import { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { useLazyGetUserInfoFromTokenQuery } from '@app/api/user/userApiSlice';
import { logOut, setCredentials } from '@app/auth/authSlice';
import { CustomizedSnackbars, Navbar } from '@components';
import { getTokenFromLocalStorage } from '@utils';

import { MainContainer } from './BaseLayout.types';

const BaseLayout = () => {
    const dispatch = useDispatch();
    const [triggerLoginQuery, { isFetching }] =
        useLazyGetUserInfoFromTokenQuery();

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

    const isAuthenticated = useSelector(
        (state: { auth: { isAuthenticated: boolean } }) =>
            state.auth.isAuthenticated,
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
            <Navbar isAuthenticated={isAuthenticated} isFetching={isFetching} />
            <MainContainer component="main" maxWidth="xl">
                <Outlet />
            </MainContainer>
        </>
    );
};

export default BaseLayout;
