import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PATHS } from '@constant';
import { BaseLayout } from '@layout';
import {
    ErrorBoundaryPage,
    Home,
    MyProfile,
    NotFound,
    UserProfile,
} from '@pages';

const router = createBrowserRouter([
    {
        element: <BaseLayout />,
        errorElement: <ErrorBoundaryPage />,
        children: [
            {
                path: PATHS.HOME,
                element: <Home />,
            },
            {
                path: PATHS.USERPROFILE,
                element: <UserProfile />,
            },
            {
                path: PATHS.MYPROFILE,
                element: <MyProfile />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
