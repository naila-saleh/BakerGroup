import {useEffect} from 'react'
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import './i18next.jsx';
import {useTranslation} from "react-i18next";
import {ThemeProvider} from "@mui/material";
import {CssBaseline} from "@mui/material";
import getTheme from "./theme.js";
import useThemeStore from "./store/useThemeStore.js";

export default function App() {
    const {i18n} = useTranslation();
    const direction = i18n.dir();
    useEffect(() => {
        document.documentElement.setAttribute('dir', direction);
    }, [direction]);
    const mode = useThemeStore((state) => state.mode);
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={getTheme(mode, direction)}>
                <CssBaseline />
                <RouterProvider router={router}/>
            </ThemeProvider>
        </QueryClientProvider>
    )
}
