import React from 'react'
import useAuthStore from "./store/useAuthStore.js";
import {Navigate} from "react-router-dom";

export default function ProtectedRouter({children}) {
    console.log('ProtectedRouter');
    const token = useAuthStore((state)=>state.token);
    if(!token) return <Navigate to={'/auth/login'} />
    return children;
}
