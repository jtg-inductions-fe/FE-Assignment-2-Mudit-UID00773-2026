import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ROUTES } from '@constant';
import { BaseLayout } from '@layouts';
import { ErrorBoundary, Home, MyProfile, NotFound, UserProfile } from '@pages';

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
                path: ROUTES.MY_PROFILE,
                element: <MyProfile />,
            },
            {
                path: ROUTES.NOT_FOUND,
                element: <NotFound />,
            },
        ],
    },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
