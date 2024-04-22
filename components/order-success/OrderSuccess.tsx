"use client";
import { clearCart } from "@/store/slices/cartSlice";
import { getOrder } from "@/store/slices/orderSlice";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux-hooks";
import React, { useEffect } from "react";
import Image from "next/image";
import { useSupabase } from "@/utils/hooks/useSupabase";
import Link from "next/link";
import { useRouter } from "next/navigation";

const OrderSuccess = () => {
    const dispatch = useAppDispatch();

    const order = useAppSelector(getOrder);
    const { UserData, getUserData } = useSupabase();

    const router = useRouter();

    useEffect(() => {
        dispatch(clearCart());
        localStorage.removeItem("cart");
    }, []);

    useEffect(() => {
        getUserData();
    }, []);

    return order.length !== 0 ? (
        <div className=" w-[50%] mx-auto text-center my-14 space-y-5">
            <div className="font-bold text-4xl  ">
                Thank you for your order!
            </div>
            {/* <div>You will receive an email confirmation shortly.</div> */}
            <button
                className="focus:outline-none text-white bg-amazon-primary hover:hover:bg-[#ffa052] focus:ring-4 focus:ring-yellow-300 font-semibold p-1.5 dark:focus:ring-yellow-900 rounded-lg text-lg shadow w-32"
                onClick={() => {
                    router.push("/");
                }}
            >
                Home
            </button>
            <div>
                {order.length > 0 && (
                    <div className="text-start text-lg font-bold ">
                        Ordered Products:
                    </div>
                )}
                {UserData !== null &&
                    order &&
                    order.map((item: any) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center gap-5 border-t-2 border-gray-200 py-4"
                        >
                            <div className="flex items-center gap-5 ">
                                <div className="bg-gray-200 rounded-lg">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={100}
                                        height={100}
                                        className=" p-1 mix-blend-multiply "
                                    />
                                </div>
                                <div>{item.title}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-gray-500">
                                    Qty: {item.quantity}
                                </div>
                                <div>₹{item.price * item.quantity}</div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    ) : UserData === null ? (
        <div className=" h-full w-full text-center space-y-5 my-20">
            <div className="font-bold text-3xl ">
                Please Sign In to your account.
            </div>
            {/* <div>You will receive an email confirmation shortly.</div> */}
            <div className="flex gap-5 justify-center">
                <Link
                    href={"/"}
                    className="focus:outline-none text-white bg-amazon-primary hover:hover:bg-[#ffa052] focus:ring-4 focus:ring-yellow-300 font-semibold p-1.5 dark:focus:ring-yellow-900 rounded-lg text-lg shadow w-32"
                >
                    Home
                </Link>
                <Link
                    href={"/auth/signin"}
                    className="focus:outline-none text-white bg-green-600 hover:hover:bg-[#46b44d] focus:ring-4 focus:ring-yellow-300 font-semibold p-1.5 dark:focus:ring-yellow-900 rounded-lg text-lg shadow w-32"
                >
                    Sign In
                </Link>
            </div>
        </div>
    ) : (
        <div className=" w-[50%] mx-auto text-center my-20 space-y-5">
            <div className="font-bold text-3xl ">Please Order First.</div>
            <div className="flex gap-5 justify-center">
                <Link
                    href={"/"}
                    className="focus:outline-none text-white bg-amazon-primary hover:hover:bg-[#ffa052] focus:ring-4 focus:ring-yellow-300 font-semibold p-1.5 dark:focus:ring-yellow-900 rounded-lg text-lg shadow w-32"
                >
                    Home
                </Link>
                <Link
                    href={"/cart"}
                    className="focus:outline-none text-white bg-green-600 hover:hover:bg-[#46b44d] focus:ring-4 focus:ring-yellow-300 font-semibold p-1.5 dark:focus:ring-yellow-900 rounded-lg text-lg shadow w-32"
                >
                    Cart
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccess;
