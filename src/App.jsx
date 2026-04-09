import React, {useEffect} from 'react'
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
    useEffect(() => {
        const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', dir);
    }, [i18n.language]);
    const mode = useThemeStore((state) => state.mode);
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={getTheme(mode)}>
                <CssBaseline />
                <RouterProvider router={router}/>
            </ThemeProvider>
        </QueryClientProvider>
    )
}