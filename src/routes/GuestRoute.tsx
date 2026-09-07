import { Navigate, Outlet } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { ROUTES } from '@constant';
import { useValidateUser } from '@hooks';
import { getTokenFromLocalStorage } from '@utils';

const GuestRoute = () => {
    const { userInfoFromRedux, isLoggedIn } = useValidateUser();
    const token = getTokenFromLocalStorage();

    if (!!token && !userInfoFromRedux) {
        return (
            <Box
                width="100%"
                height="100%"
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h2">Verifing session...</Typography>
            </Box>
        );
    }

    return !isLoggedIn ? <Outlet /> : <Navigate to={ROUTES.HOME} />;
};

export default GuestRoute;
