import React from 'react'
import useCart from "../../hooks/useCart";
import CategoriesSection from "../../components/categories/CategoriesSection.jsx";

export default function Cart() {
    const {data, isLoading, isError, error} = useCart();
    return (
        <>
            <div>Cart</div>
        </>
    )
}
