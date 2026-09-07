import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOut, selectUser } from '@app/auth/authSlice';
import { openSnackbar } from '@app/snackbar/snackbarSlice';
import { ROUTES } from '@constant';

export const useNavbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const imageUrl = useSelector(selectUser)?.profileImage;
    const username = useSelector(selectUser)?.username;

    const handleLogout = () => {
        dispatch(logOut());
        dispatch(
            openSnackbar({
                alertSeverity: 'success',
                message: 'Successfully Logged out',
            }),
        );
    };

    const menuOptions = [
        {
            label: 'View Profile',
            onClick: () => void navigate(ROUTES.MY_PROFILE),
        },
        { label: 'Logout', onClick: () => handleLogout() },
    ];

    return { imageUrl, username, menuOptions, navigate };
};
