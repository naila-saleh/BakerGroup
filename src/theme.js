import {createTheme} from "@mui/material/styles";

const getTheme = (mode, direction = 'ltr') => {
    return createTheme({
        direction,
        palette: {
            mode: mode,
            primary: {
                main: '#616161',
                dark: '#4C4C4C'
            },
            secondary: {
                main: '#D09523',
                light: '#FFB934',
                dark: '#9D691E',
            },
            info: {
                main: '#afafaf',
                light: '#F6F6F6',
                dark: '#5C5C5C',
            },
        }
    });
}
export default getTheme;
