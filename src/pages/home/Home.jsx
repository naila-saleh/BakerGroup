import React from 'react'
import {Typography} from "@mui/material";
import Hero from "../../components/hero/Hero.jsx";
import Categories from "../../components/categories/Categories.jsx";
import Features from "../../components/features/Features.jsx";

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Categories />
        </>
    )
}
