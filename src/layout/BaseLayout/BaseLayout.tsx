import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

const BaseLayout = () => (
    <>
        <Box>
            <Box component="nav">Header</Box>
        </Box>

        <Box>
            <Outlet />
        </Box>
    </>
);

export default BaseLayout;
