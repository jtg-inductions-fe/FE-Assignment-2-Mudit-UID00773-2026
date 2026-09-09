import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { CustomSnackbars, Navbar } from '@components';
import { useValidateUser } from '@hooks';
import { getTokenFromLocalStorage } from '@utils';

import { MainContainer } from './BaseLayout.types';

const BaseLayout = () => {
    const {
        autoLoginFromToken,
        isLoggedIn,
        isFetching,
        userInfoFromRedux,
        handleLogout,
    } = useValidateUser();

    useEffect(() => {
        const token = getTokenFromLocalStorage();

        if (token) {
            void autoLoginFromToken(token);
        }
    }, [autoLoginFromToken]);

    return (
        <>
            <CustomSnackbars />
            <Navbar
                isAuthenticated={isLoggedIn}
                isFetching={isFetching}
                imageUrl={userInfoFromRedux?.profileImage}
                username={userInfoFromRedux?.username}
                handleLogout={handleLogout}
            />
            <MainContainer component="main" maxWidth="xl">
                <Outlet />
            </MainContainer>
        </>
    );
};

export default BaseLayout;
