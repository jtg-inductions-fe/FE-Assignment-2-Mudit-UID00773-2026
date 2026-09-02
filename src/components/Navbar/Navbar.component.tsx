import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { getTokenFromLocalStorage } from 'utils/userLocalStorage';

import { Avatar, Box, Button, Toolbar } from '@mui/material';

import { useLazyLoginQuery } from '@app/api/auth/authApiSlice';
import { logOut } from '@app/auth/authSlice';
import Logo from '@assets/images/Logo.svg';
import { DropDown } from '@components';

import { LogoImage, MyAppBar, NavItemContainer } from './Navbar.styles';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(
        (state: { auth: { isAuthenticated: boolean } }) =>
            state.auth.isAuthenticated,
    );

    const imageUrl = useSelector(
        (state: { auth: { user: { avatar_url: string } | null } }) =>
            state.auth.user?.avatar_url || '',
    );

    const [triggerLoginQuery] = useLazyLoginQuery();

    const handleLogout = () => {
        dispatch(logOut());
    };

    const menuOptions = [
        { label: 'View Profile', onClick: () => void navigate('/profile') },
        { label: 'Logout', onClick: () => handleLogout() },
    ];

    useEffect(() => {
        const token = getTokenFromLocalStorage();

        if (token) {
            void triggerLoginQuery({ token });
        }
    }, []);

    return (
        <MyAppBar position="fixed" elevation={10}>
            <Toolbar>
                <Box flex={1}>
                    <NavItemContainer component={RouterLink} to="/">
                        <LogoImage src={Logo} alt="GITFETCH" />
                    </NavItemContainer>
                </Box>

                <NavItemContainer>
                    {isAuthenticated ? (
                        <DropDown items={menuOptions}>
                            <Avatar alt="Remy Sharp" src={imageUrl} />
                        </DropDown>
                    ) : (
                        <Button
                            color="primary"
                            variant="contained"
                            sx={{ fontWeight: 'bold' }}
                            onClick={() => void navigate('/login')}
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
