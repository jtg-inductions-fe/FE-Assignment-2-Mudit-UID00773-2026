import { Dispatch, MouseEvent, SetStateAction, useId } from 'react';

export const useDropDown = (
    anchorEl: null | HTMLElement,
    setAnchorEl: Dispatch<SetStateAction<null | HTMLElement>>,
) => {
    const id = useId();
    const buttonId = `${id}-button`;
    const menuId = `${id}-menu`;

    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    return { buttonId, menuId, open, handleClick, handleClose };
};
