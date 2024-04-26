"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import prime from "@/public/prime-logo.png";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/utils/hooks/useSupabase";
import { useAppDispatch } from "@/utils/hooks/redux-hooks";
import { clearOrder } from "@/store/slices/orderSlice";

interface checkoutCartProps {
    totalPrice: number;
    totalQuantity: number;
}

const CartCheckout = ({ totalPrice, totalQuantity }: checkoutCartProps) => {
    const { UserData, getUserData } = useSupabase();

    // const isFreeShipping = totalPrice > 550 || totalPrice === 550;
    // const remainingAmount = (550 - totalPrice).toFixed(2);

    const shippingCost = 0.0;
    // const shippingCost = isFreeShipping ? 0 : 50;
    // const finalCost = shippingCost + +totalPrice;

    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(clearOrder());
        getUserData();
    }, [dispatch, getUserData]);

    return (
        <div className="flex flex-col justify-between gap-5">
            <div className="">
                <div className="flex gap-3 bg-gray-300 p-3 rounded-t-xl">
                    <input
                        type="radio"
                        name="prime"
                        id="withprime"
                        className="w-4"
                        disabled
                    />
                    <div className="flex text-gray-700">
                        <span className="font-bold">With</span>
                        <Image
                            src={prime}
                            alt="prime"
                            width={40}
                            height={40}
                            className="mx-3"
                        />
                    </div>
                </div>
                <div className="flex gap-3 p-3 ">
                    <input
                        type="radio"
                        name="prime"
                        id="withoutprime"
                        className="w-4"
                        checked
                        disabled
                    />
                    <div className="flex text-gray-700">
                        <span className="font-bold">Without</span>
                        <Image
                            src={prime}
                            alt="prime"
                            width={40}
                            height={40}
                            className="mx-3"
                        />
                    </div>
                </div>
            </div>
            <div className="text-center px-3">
                <div className="text-amazon-primary px-1 font-semibold text-2xl">
                    FREE Shipping
                </div>
            </div>
            {/* {isFreeShipping ? (
                <div className="text-center px-3">
                    <div className="text-amazon-primary px-1 font-semibold text-2xl">
                        FREE Shipping
                    </div>
                </div>
            ) : (
                <div className="px-3">
                    <div className="text-base text-center">
                        Add items worth{" "}
                        <span className="text-amazon-primary px-1 font-semibold">
                            ₹{remainingAmount}
                        </span>{" "}
                        for
                        <span className="text-amazon-blue px-1 font-semibold">
                            FREE Delivery
                        </span>
                    </div>
                    <div className="text-center">
                        Shipping cost ₹{shippingCost}
                    </div> 
                </div> 
            )}{" "}
                */}
            <div className="flex flex-col gap-2 px-3 mt-2">
                <div className="flex gap-3 justify-between font-medium">
                    <div className="text-sm font-medium">
                        Subtotal{" "}
                        <span className="font-normal">
                            ({totalQuantity} items):
                        </span>
                    </div>
                    <div className="text-lg font-medium">
                        ₹{Number(totalPrice).toFixed(1)}
                    </div>
                </div>
                <div className="flex gap-3 justify-between">
                    <div className="text-base font-light">Shipping cost:</div>
                    <div className="text-lg font-medium">₹{shippingCost}</div>
                </div>
                <div className="flex justify-between gap-3">
                    <span className="text-base font-medium">Total:</span>
                    <span className="text-lg font-bold">
                        ₹{Number(totalPrice).toFixed(1)}
                    </span>
                </div>
            </div>
            <div className="mx-5 mb-4">
                {UserData ? (
                    <button
                        className="focus:outline-none text-white bg-amazon-primary hover:hover:bg-[#ffa052] focus:ring-4 focus:ring-yellow-300 font-semibold p-1.5 dark:focus:ring-yellow-900 w-full rounded-lg text-lg shadow "
                        onClick={() => {
                            router.push("/checkout");
                        }}
                    >
                        Proceed to Buy
                    </button>
                ) : (
                    <button
                        className="focus:outline-none text-black bg-amber-300 hover:hover:bg-amber-400 focus:ring-4 focus:ring-yellow-300 font-semibold p-1.5 dark:focus:ring-yellow-900 w-full rounded-lg text-lg shadow "
                        onClick={() => {
                            router.push("/user/signin");
                        }}
                    >
                        Sign In to Proceed
                    </button>
                )}
            </div>
        </div>
    );
};

export default CartCheckout;
