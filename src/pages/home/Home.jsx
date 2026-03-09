import React from 'react'
import Hero from "../../components/hero/Hero.jsx";
import CategoriesSection from "../../components/categories/CategoriesSection.jsx";
import Features from "../../components/features/Features.jsx";
import Products from "../../components/products/Products.jsx";

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <CategoriesSection />
            <Products />
        </>
    )
}
