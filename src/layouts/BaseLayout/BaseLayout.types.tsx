import { Container, ContainerProps, styled } from '@mui/material';

export const MainContainer = styled(Container)<ContainerProps>(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
}));
