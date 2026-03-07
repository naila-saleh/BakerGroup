import React from 'react'
import Hero from "../../components/hero/Hero.jsx";
import Categories from "../../components/categories/Categories.jsx";
import Features from "../../components/features/Features.jsx";
import Products from "../../components/products/Products.jsx";

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Categories />
            <Products />
        </>
    )
}
