import { LinkProps as RouterLinkProps } from 'react-router-dom';

import { AppBar, Link, LinkProps, styled } from '@mui/material';

export const MyAppBar = styled(AppBar)(
    ({ theme: { spacing, breakpoints, palette } }) => ({
        borderRadius: spacing(2),
        margin: spacing(3),
        left: '0',
        width: `calc(100% - ${24}px)`,
        color: 'red',
        backgroundColor: palette.background.paper,
        padding: '0px 12px',

        [breakpoints.down('sm')]: {
            padding: '0px 12px',
        },
    }),
);

export const LogoImage = styled('img')(({ theme: { breakpoints } }) => ({
    width: '140px',
    cursor: 'pointer',
    [breakpoints.down('sm')]: {
        width: '100px',
    },
}));

type NavItemContainerProps = LinkProps & Partial<RouterLinkProps>;

export const NavItemContainer = styled(Link)<NavItemContainerProps>(() => ({
    display: 'flex',
    alignItems: 'stretch',
    width: 'fit-content',
}));
