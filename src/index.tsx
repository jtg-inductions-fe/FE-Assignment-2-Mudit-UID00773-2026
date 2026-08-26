import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import AppRoutes from 'routes/router';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { store } from '@app/store';
import { theme } from '@theme';

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
