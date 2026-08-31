import { LinkProps as RouterLinkProps } from 'react-router-dom';

import { AppBar, Link, LinkProps, styled } from '@mui/material';

export const MyAppBar = styled(AppBar)(({ theme :{ spacing, breakpoints, palette , typography } }) => ({
    borderRadius: spacing(2),
    margin: spacing(3),
    left: '0',
    width: `calc(100% - ${typography.pxToRem(24)})`,
    color: 'red',
    backgroundColor:palette.background.paper,
    padding: `${typography.pxToRem(0)} ${typography.pxToRem(12)}`,

    [breakpoints.down('sm')]: {
        padding: `${typography.pxToRem(0)} ${typography.pxToRem(12)}`,
    },
}));

export const LogoImage = styled('img')(({ theme: { typography, breakpoints } }) => ({
    width: typography.pxToRem(140),
    cursor: 'pointer',
    [breakpoints.down('sm')]: {
        width: typography.pxToRem(100),
    },
}));

type NavItemContainerProps = LinkProps & Partial<RouterLinkProps>;

export const NavItemContainer = styled(Link)<NavItemContainerProps>(() => ({
    display: 'flex',
    alignItems: 'stretch',
    width: 'fit-content',
}));
