import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import AppRoutes from 'routes/router';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '@theme';

import { store } from './app/store';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        </ThemeProvider>
    </StrictMode>,
);
