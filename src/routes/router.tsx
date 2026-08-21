import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
                index: true,
                element: <Home />,
            },
            {
                path: 'user/:id',
                element: <UserProfile />,
            },
            {
                path: 'profile',
                element: <MyProfile />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
