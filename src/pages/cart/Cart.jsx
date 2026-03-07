import React from 'react'
import useCart from "../../hooks/useCart";
import Categories from "../../components/categories/Categories.jsx";

export default function Cart() {
    const {data, isLoading, isError, error} = useCart();
    return (
        <>
            <div>Cart</div>
            <hr />
            <Categories />
        </>
    )
}
