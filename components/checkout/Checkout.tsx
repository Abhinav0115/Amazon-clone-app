"use client";
import Image from "next/image";
import React from "react";
import amazonLogo from "@/public/amazon-logo.png";
import { FaLock } from "react-icons/fa";
import { useAppSelector } from "@/utils/hooks/redux-hooks";
import { getCart } from "@/store/slices/cartSlice";
import { TotalCost, TotalQuantity } from "../common/Total";
import OrderSummery from "./OrderSummery";
import Link from "next/link";

const CheckoutPage = () => {
    const cart = useAppSelector(getCart);

    return (
        <div className="bg-blue-gray-50">
            <div className="space-y-6">
                <div className="flex justify-between items-center rounded-b-xl bg-white mx-10 p-2 px-10 border-b-2">
                    <Link href={"/"}>
                        <Image
                            src={amazonLogo}
                            alt="amazon logo"
                            width={130}
                            height={50}
                            className=""
                        />
                    </Link>
                    <div className="font-bold text-3xl">Checkout</div>
                    <div className="text-lg text-gray-500">
                        <FaLock />
                    </div>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-1 gap-5 w-[90%] mx-auto ">
                    <div className="col-span-3">
                        <div className="flex flex-col gap-5 p-4 rounded-lg bg-white">
                            <div className="">
                                <div className="flex justify-between border-b-2 border-gray-300 py-4">
                                    <div className="font-semibold text-xl">
                                        1. Delivery address
                                    </div>
                                    <div className="text-right">
                                        <p>Lorem ipsum dolor,</p>
                                        <p>sit amet consectetur,</p>
                                        <p>adipisicing elit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-2 border-gray-300 py-4 space-y-3">
                                <div className="font-semibold text-xl">
                                    2. Items and delivery
                                </div>
                                <div>
                                    <div className="flex justify-between rounded-full bg-gray-200 px-5 p-2 ">
                                        <div className="text-center">
                                            <div>
                                                Total Items (
                                                <span className="font-medium">
                                                    <TotalQuantity />
                                                </span>
                                                )
                                            </div>
                                            <div className="font-semibold">
                                                ₹<TotalCost />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="font-medium">
                                                Delivery fee
                                            </div>
                                            <div className="font-semibold">
                                                ₹ 0.0
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        {cart?.map((item: any) => (
                                            <div
                                                key={item.id}
                                                className="flex justify-between items-center gap-5 border-t-2 border-gray-200 py-4"
                                            >
                                                <div className="flex items-center gap-5">
                                                    <div className="bg-gray-200 rounded-lg">
                                                        <Image
                                                            src={item.image}
                                                            alt={item.title}
                                                            width={80}
                                                            height={80}
                                                            className=" p-1 mix-blend-multiply "
                                                        />
                                                    </div>
                                                    <div>{item.title}</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-gray-500">
                                                        {item.quantity} x ₹
                                                        {item.price}
                                                    </div>
                                                    <div>
                                                        ₹
                                                        {item.price *
                                                            item.quantity}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm leading-snug my-5 ">
                            When your order is placed, we&apos;ll send you an
                            e-mail message acknowledging receipt of your order.
                            If you choose to pay using an electronic payment
                            method (credit card, debit card or net banking), you
                            will be directed to your bank&apos;s website to
                            complete your payment. Your contract to purchase an
                            item will not be complete until we receive your
                            electronic payment and dispatch your item. If you
                            choose to pay using Pay on Delivery (POD), you can
                            pay using cash/card/net banking when you receive
                            your item.
                        </div>
                    </div>
                    <div className="bg-white border-2 h-fit rounded-lg">
                        <OrderSummery />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
