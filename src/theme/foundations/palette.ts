import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    // TODO: Add necessary colors here
    primary: {
        main: COLORS.PRIMARY.MAIN,
        dark: COLORS.PRIMARY.DARK,
        contrastText: COLORS.DARK.DARKER,
    },
    secondary: {
        main: COLORS.DARK.MAIN,
        dark: COLORS.DARK.DARKER,
        contrastText: COLORS.LIGHT.MAIN,
    },
    background: {
        default: COLORS.LIGHT.MAIN,
        paper: COLORS.DARK.MAIN,
    },
};
