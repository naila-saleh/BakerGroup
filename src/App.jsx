import React, {useEffect} from 'react'
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import './i18next.jsx';
import {useTranslation} from "react-i18next";

export default function App() {
    const {i18n} = useTranslation();
    useEffect(() => {
        const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', dir);
    }, [i18n.language]);
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    )
}