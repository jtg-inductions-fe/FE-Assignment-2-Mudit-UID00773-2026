import { Outlet } from 'react-router-dom';

import { Box, Container } from '@mui/material';

const BaseLayout = () => (
    <>
        <Box>
            <Box component="nav">Header</Box>
        </Box>

        <Container maxWidth="xl">
            <Box>
                <Outlet />
            </Box>
        </Container>
    </>
);

export default BaseLayout;
