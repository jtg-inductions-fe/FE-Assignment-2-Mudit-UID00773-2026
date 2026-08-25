import { Outlet } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import { Navbar } from '@components';

const BaseLayout = () => (
    <>
        <Navbar />
        <Container maxWidth="xl">
            <Box component="main">
                <Outlet />
            </Box>
        </Container>
    </>
);

export default BaseLayout;
