import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartProduct from "./cart-product-card";
import CartCheckout from "./cart-checkout";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux-hooks";
import { clearCart, getCart } from "@/store/slices/cartSlice";
import { TotalCost, TotalQuantity } from "../common/Total";

//TODO: make the cart responsive

//TODO: Total cost error

const DeliShoppingCart = () => {
    const [itemSelected, setItemSelected] = useState(0);

    const cart = useAppSelector(getCart);
    const dispatch = useAppDispatch();

    // console.log("cart", cart);

    let totalPrice = cart
        ?.reduce((acc: any, item: any) => acc + item.price, 0)
        .toFixed(2);

    let totalQuantity = 0;
    cart.forEach((item: any) => {
        totalQuantity += item.quantity;
    });

    return (
        <>
            <div className="bg-[#eaeded] min-h-full pb-5 m-0 mt-0 min-w-full px-6 pt-9">
                <div className="w-full text-black">
                    <div className="">
                        <div className="grid md:grid-cols-4 grid-cols-1 gap-0 md:gap-5">
                            <div className=" min-h-[38vh] col-span-3 bg-white rounded-xl">
                                <div className="p-3 py-2 space-y-2">
                                    <div>
                                        <h1 className="text-2xl font-semibold text-center">
                                            Shopping Cart
                                        </h1>
                                        {/* TODO: rebuild */}
                                        <div className="flex justify-end px-6 items-center py-1">
                                            {/* <div className="text-xs">
                                                {itemSelected === 0 ? (
                                                    <div className="tracking-tight">
                                                        No item selected.{" "}
                                                        <button className=" text-blue-800">
                                                            Select All Items
                                                        </button>
                                                    </div>
                                                ) : itemSelected > 0 &&
                                                  itemSelected < cart.length ? (
                                                    <button>
                                                        Select all items
                                                    </button>
                                                ) : (
                                                    <button className="text-indigo-800 tracking-tight hover:text-amazon-secondary">
                                                        Deselect all Items
                                                    </button>
                                                )}
                                            </div> */}
                                            <div className="text-base hidden md:block ">
                                                Price
                                            </div>
                                        </div>
                                        <hr className="mx-3 border-gray-200" />
                                    </div>
                                    <div className="">
                                        {cart.map((product: any) => (
                                            <CartProduct
                                                key={product.id}
                                                product={product}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 gap-2">
                                        {cart.quantity === 0 ||
                                        cart.length === 0 ? (
                                            ""
                                        ) : (
                                            <span
                                                className="text-lg text-red-500 font-semibold cursor-pointer"
                                                onClick={() => {
                                                    dispatch(clearCart());
                                                }}
                                            >
                                                Clear All
                                            </span>
                                        )}
                                        <span className="text-lg font-semibold">
                                            <span className="text-sm font-medium">
                                                Total Items:{" "}
                                                <span className="text-lg">
                                                    {<TotalQuantity />}
                                                </span>
                                            </span>
                                        </span>
                                        <span className="font-bold text-lg">
                                            <span className="text-base font-medium">
                                                Subtotal:{" "}
                                            </span>
                                            ₹{<TotalCost />}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* TODO: Add Checked out button here */}
                            <div className=" bg-white rounded-xl md:mt-0 mt-5">
                                <CartCheckout
                                    totalPrice={totalPrice}
                                    totalQuantity={cart.length}
                                />
                            </div>
                        </div>
                        {/* TODO: Add the saved items here */}
                        <div className=" min-h-[15vh] bg-white p-3 rounded-xl mt-5 md:w-[74.5%] w-full">
                            {/* <div className="font-bold">TODO</div> */}
                            {/* <div>Your Items</div> */}
                            {/* <div>this will show the saved items </div> */}
                        </div>
                    </div>
                    <div className="text-xs mt-5 w-full md:w-2/3 space-y-2">
                        <p>
                            The price and availability of items at Amazon.in are
                            subject to change. The shopping cart is a temporary
                            place to store a list of your items and reflects
                            each item&apos;s most recent price.
                        </p>
                        <p>
                            Do you have a promotional code? We&apos;ll ask you
                            to enter your claim code when it&apos;s time to pay
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeliShoppingCart;
