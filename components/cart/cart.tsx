"use client";
import EmptyCart from "./empty-cart";
import ShoppingCart from "./shopping-cart";
import { getCart } from "@/store/slices/cartSlice";
import { useAppSelector } from "@/utils/hooks/redux-hooks";
import React from "react";

const CartPage = () => {
    const cart = useAppSelector(getCart);

    return (
        <div className="">
            {cart.length > 0 ? <ShoppingCart /> : <EmptyCart />}
        </div>
    );
};

export default CartPage;
