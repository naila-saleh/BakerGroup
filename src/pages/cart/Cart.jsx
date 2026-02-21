import React from 'react'
import useCart from "../../hooks/useCart";

export default function Cart() {
    const {data, isLoading, isError, error} = useCart();
    console.log(data);
    return (
        <div>Cart</div>
    )
}
