import { Navigate, Outlet } from 'react-router-dom';

import { Box, CircularProgress } from '@mui/material';

import { ROUTES } from '@constant';
import { useValidateUser } from '@hooks';
import { getTokenFromLocalStorage } from '@utils';

const ProtectedRoute = () => {
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
                <CircularProgress aria-label="Loading…" />
            </Box>
        );
    }

    return isLoggedIn ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
};

export default ProtectedRoute;
