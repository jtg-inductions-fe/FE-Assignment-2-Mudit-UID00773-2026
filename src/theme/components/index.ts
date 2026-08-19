import type { Components } from '@mui/material/styles';

// Local Font files
import InterRegularTTF from '@assets/fonts/inter/inter-regular.ttf';
import InterRegularWOFF2 from '@assets/fonts/inter/inter-regular.woff2';
import PoppinsBoldWOFF2 from '@assets/fonts/poppins/poppins-bold-webfont.woff2';
import PoppinsLightWOFF2 from '@assets/fonts/poppins/poppins-light-webfont.woff2';
import PoppinsRegularWOFF2 from '@assets/fonts/poppins/poppins-regular-webfont.woff2';

// TODO: Add necessary font face declarations here
const fontFaceDeclarations = `
       @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        src: url(${InterRegularWOFF2}) format('woff2'), 
        url(${InterRegularTTF}) format('truetype');
      };

      @font-face {
        font-display: swap; 
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        src: url(${PoppinsRegularWOFF2}) format('woff2');
      };

      @font-face {
        font-display: swap; 
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        src: url(${PoppinsLightWOFF2}) format('woff2');
      };

      @font-face {
        font-display: swap; 
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 900;
        src: url(${PoppinsBoldWOFF2}) format('woff2');
      };
      
    `;

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                fontSize: '62.5%',
            },
            fontFaceDeclarations,
        },
    },
};
