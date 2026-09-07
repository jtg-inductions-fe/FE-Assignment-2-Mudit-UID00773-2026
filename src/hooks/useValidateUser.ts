import { useCallback } from 'react';

import { IFormInput } from 'pages/Login/Login.types';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { useLazyGetUserInfoFromTokenQuery } from '@app/api/user/userApiSlice';
import {
    isAuthenticated,
    logOut,
    selectUser,
    setCredentials,
} from '@app/auth/authSlice';
import { openSnackbar } from '@app/snackbar/snackbarSlice';
import { getTokenFromLocalStorage } from '@utils';

export const useValidateUser = () => {
    const dispatch = useDispatch();

    const [triggerLoginQuery, { isLoading, isFetching }] =
        useLazyGetUserInfoFromTokenQuery();

    const onSubmit: SubmitHandler<IFormInput> = async (inputData) => {
        const { username, password } = inputData;

        try {
            const response = await triggerLoginQuery(password).unwrap();

            if (response && response?.username !== username) {
                dispatch(
                    openSnackbar({
                        alertSeverity: 'error',
                        message: 'Invalid Username',
                    }),
                );
                return;
            }

            dispatch(setCredentials({ user: response, token: password }));
            dispatch(
                openSnackbar({
                    alertSeverity: 'success',
                    message: 'Successfully Logged in',
                }),
            );
        } catch (error) {
            let errorMessage = 'Something went worng';
            if (error && typeof error === 'object' && 'error' in error) {
                errorMessage = String(error?.error);
            }
            dispatch(
                openSnackbar({
                    alertSeverity: 'error',
                    message: errorMessage,
                }),
            );
        }
    };

    const autoLoginFromToken = useCallback(
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

    const handleLogout = () => {
        dispatch(logOut());
        dispatch(
            openSnackbar({
                alertSeverity: 'success',
                message: 'Successfully Logged out',
            }),
        );
    };

    const userInfoFromRedux = useSelector(selectUser);

    const isLoggedIn = useSelector(isAuthenticated);

    return {
        onSubmit,
        isLoading,
        handleLogout,
        userInfoFromRedux,
        autoLoginFromToken,
        isFetching,
        isLoggedIn,
    };
};
