import { MouseEvent, useId, useState } from 'react';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

import { ProfileDropdownItem } from './DropDown.styles';
import { DropDownProps } from './DropDown.types';

const DropDown = ({ items, children }: DropDownProps) => {
    const id = useId();
    const buttonId = `${id}-button`;
    const menuId = `${id}-menu`;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Button
                id={buttonId}
                aria-controls={open ? menuId : undefined}
                aria-haspopup="true"
                aria-expanded={open}
                onClick={handleClick}
                sx={{
                    minWidth: 0,
                    padding: 0,
                    borderRadius: '50%',
                    textTransform: 'none',
                }}
            >
                {children}
            </Button>
            <Menu
                id={menuId}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        'aria-labelledby': buttonId,
                    },
                }}
            >
                {items.map((item, index) => (
                    <ProfileDropdownItem
                        key={`${item.label}-${index}`}
                        onClick={(): void => {
                            item.onClick();
                            handleClose();
                        }}
                    >
                        {item.label}
                    </ProfileDropdownItem>
                ))}
            </Menu>
        </Box>
    );
};

export default DropDown;
