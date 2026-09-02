import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Navbar from '../src/components/Navbar/Navbar.component';

describe('Navbar Component', () => {
    it('should render properly with logo and login button', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>,
        );

        const logo = screen.getByAltText(/GITFETCH/i);
        const button = screen.getByRole('button', {
            name: /login/i,
        });

        expect(logo).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it('should change state to logged in and show avatar when login is clicked', async () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>,
        );

        const loginButton = screen.getByRole('button', {
            name: /login/i,
        });

        await userEvent.click(loginButton);

        expect(loginButton).not.toBeInTheDocument();

        const avatarImage = screen.getByRole('img', { name: /remy sharp/i });
        expect(avatarImage).toBeInTheDocument();
    });
});
