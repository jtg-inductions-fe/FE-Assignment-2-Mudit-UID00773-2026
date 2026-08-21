import { Outlet } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import { Navbar } from '@components';

const BaseLayout = () => (
    <>
        <Box component="header">
            <Box component="nav">
                <Navbar />
            </Box>
        </Box>

        <Container maxWidth="xl">
            <Box>
                <Outlet />
            </Box>
        </Container>
    </>
);

export default BaseLayout;
