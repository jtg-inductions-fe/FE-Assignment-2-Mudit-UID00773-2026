import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ROUTES } from '@constant';
import { BaseLayout } from '@layouts';
import {
    ErrorBoundary,
    Home,
    Login,
    MyProfile,
    NotFound,
    UserProfile,
} from '@pages';

import GuestRoute from './GuestRoute';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
    {
        element: <BaseLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: ROUTES.HOME,
                element: <Home />,
            },
            {
                path: ROUTES.USER_PROFILE,
                element: <UserProfile />,
            },
            {
                path: ROUTES.NOT_FOUND,
                element: <NotFound />,
            },
            {
                element: <GuestRoute />,
                children: [
                    {
                        path: ROUTES.LOGIN,
                        element: <Login />,
                    },
                ],
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: ROUTES.MY_PROFILE,
                        element: <MyProfile />,
                    },
                ],
            },
        ],
    },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
