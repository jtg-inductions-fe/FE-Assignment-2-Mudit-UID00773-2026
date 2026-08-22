import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Avatar, Button, Toolbar } from '@mui/material';

import Logo from '@assets/images/Logo.svg';
import { DropDown } from '@components';

import { LogoImage, MyAppBar, NavItemContainer } from './Navbar.styles';

const Navbar = () => {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggenIn] = useState<boolean>(false);

    const handleLogoClicked = (): void => {
        void navigate('/');
    };

    const menuOptions = [
        { label: 'View Profile', onClick: () => void navigate('/profile') },
        { label: 'Logout', onClick: () => setIsLoggenIn(false) },
    ];

    return (
        <MyAppBar position="fixed" elevation={10}>
            <Toolbar>
                <NavItemContainer onClick={handleLogoClicked} flex={1}>
                    <LogoImage src={Logo} alt="GITFETCH" />
                </NavItemContainer>

                <NavItemContainer>
                    {isLoggedIn ? (
                        <DropDown items={menuOptions}>
                            <Avatar alt="Remy Sharp" src={Logo} />
                        </DropDown>
                    ) : (
                        <Button
                            color="primary"
                            variant="contained"
                            sx={{ fontWeight: 'bold' }}
                            onClick={() => setIsLoggenIn(true)}
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
