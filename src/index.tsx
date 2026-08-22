import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from 'App';
import { store } from 'app/store';
import { Provider } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </StrictMode>,
);
