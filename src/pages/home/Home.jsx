import React from 'react'
import Hero from "../../components/hero/Hero.jsx";
import CategoriesSection from "../../components/categories/CategoriesSection.jsx";
import Features from "../../components/features/Features.jsx";
import ProductsSection from "../../components/products/ProductsSection.jsx";
import FaqSection from "../../components/FAQ/FAQSection.jsx";

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <CategoriesSection />
            <ProductsSection />
            <FaqSection />
        </>
    )
}
