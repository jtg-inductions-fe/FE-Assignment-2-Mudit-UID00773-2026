import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { Avatar, Box, Button, Toolbar } from '@mui/material';

import Logo from '@assets/images/Logo.svg';
import { DropDown } from '@components';
import { ROUTES } from '@constant';
import { useDropDownMenu } from '@hooks';

import {
    AvatarSkeleton,
    LogoImage,
    MyAppBar,
    NavItemContainer,
} from './Navbar.styles';

const Navbar = ({
    isAuthenticated,
    isFetching,
    imageUrl,
    username,
    handleLogout,
}: {
    isAuthenticated: boolean;
    isFetching: boolean;
    imageUrl: string | undefined;
    username: string | undefined;
    handleLogout: () => void;
}) => {
    const navigate = useNavigate();
    const { menuOptions } = useDropDownMenu(handleLogout);

    return (
        <MyAppBar position="fixed" elevation={10}>
            <Toolbar>
                <Box flex={1}>
                    <NavItemContainer component={RouterLink} to={ROUTES.HOME}>
                        <LogoImage src={Logo} alt="GITFETCH" />
                    </NavItemContainer>
                </Box>

                <NavItemContainer>
                    {isFetching ? (
                        <AvatarSkeleton variant="circular" />
                    ) : isAuthenticated ? (
                        <DropDown items={menuOptions}>
                            <Avatar alt={username} src={imageUrl} />
                        </DropDown>
                    ) : (
                        <Button
                            color="primary"
                            variant="contained"
                            sx={{ fontWeight: 'bold' }}
                            onClick={() => void navigate(ROUTES.LOGIN)}
                        >
                            LOGIN
                        </Button>
                    )}
                </NavItemContainer>
            </Toolbar>
        </MyAppBar>
    );
};

export default Navbar;
