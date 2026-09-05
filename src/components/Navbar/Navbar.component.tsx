import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

import { Avatar, Box, Button, Toolbar } from '@mui/material';

import { logOut, selectUser } from '@app/auth/authSlice';
import { openSnackbar } from '@app/snackbar/snackbarSlice';
import Logo from '@assets/images/Logo.svg';
import { DropDown } from '@components';
import { ROUTES } from '@constant';

import { LogoImage, MyAppBar, NavItemContainer } from './Navbar.styles';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { pathname } = useLocation();

    const isAuthenticated = useSelector(
        (state: { auth: { isAuthenticated: boolean } }) =>
            state.auth.isAuthenticated,
    );

    const imageUrl = useSelector(selectUser)?.profileImage;
    const username = useSelector(selectUser)?.username;

    const handleLogout = () => {
        dispatch(logOut());
        dispatch(
            openSnackbar({
                alertSeverity: 'success',
                message: 'Successfully Logged out',
            }),
        );

        if (pathname === '/' + ROUTES.MY_PROFILE) void navigate(ROUTES.LOGIN);
    };

    const menuOptions = [
        {
            label: 'View Profile',
            onClick: () => void navigate(ROUTES.MY_PROFILE),
        },
        { label: 'Logout', onClick: () => handleLogout() },
    ];

    return (
        <MyAppBar position="fixed" elevation={10}>
            <Toolbar>
                <Box flex={1}>
                    <NavItemContainer component={RouterLink} to={ROUTES.HOME}>
                        <LogoImage src={Logo} alt="GITFETCH" />
                    </NavItemContainer>
                </Box>

                <NavItemContainer>
                    {isAuthenticated ? (
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
