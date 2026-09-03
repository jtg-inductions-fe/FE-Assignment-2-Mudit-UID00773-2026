import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constant';
import { getTokenFromLocalStorage } from '@utils';

const ProtectedRoute = () => {
    const isLoggedin = !!getTokenFromLocalStorage();

    return isLoggedin ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
};

export default ProtectedRoute;
