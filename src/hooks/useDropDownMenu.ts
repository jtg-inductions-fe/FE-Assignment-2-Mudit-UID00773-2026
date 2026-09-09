import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@constant';

export const useDropDownMenu = (handleLogout: () => void) => {
    const navigate = useNavigate();

    const menuOptions = [
        {
            label: 'View Profile',
            onClick: () => void navigate(ROUTES.MY_PROFILE),
        },
        { label: 'Logout', onClick: () => handleLogout() },
    ];

    return { menuOptions };
};
