import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { isAuthenticated, selectUser } from '@app/auth/authSlice';
import { ROUTES } from '@constant';
import { getTokenFromLocalStorage } from '@utils';

const ProtectedRoute = () => {
    const isLoggedin = useSelector(isAuthenticated);

    const user = useSelector(selectUser);

    const token = getTokenFromLocalStorage();

    if (Boolean(token) && !user) {
        return (
            <Box
                width="100%"
                height="100%"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="h2">Loading User data...</Typography>
            </Box>
        );
    }

    return isLoggedin ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
};

export default ProtectedRoute;
