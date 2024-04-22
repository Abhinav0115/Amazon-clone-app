import React from "react";
import { PriceWithDeliveryCharge, TotalCost } from "../common/Total";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux-hooks";
import { getCart } from "@/store/slices/cartSlice";
import { supabase } from "@/utils/supabase/client";
import { stripeCheckout } from "./stripe-checkout";
import { useRouter } from "next/navigation";
import { addToOrder, getOrder } from "@/store/slices/orderSlice";

const OrderSummery = () => {
    const cart = useAppSelector(getCart);
    const order = useAppSelector(getOrder);

    const router = useRouter();

    const createStripeSession = async () => {
        const {
            data: { user },
        } = await supabase.auth.getUser();

        stripeCheckout(
            cart,
            user?.email ?? "",
            user?.user_metadata.full_name ?? ""
        );
    };

    const dispatch = useAppDispatch();

    const handlePlaceOrder = () => {
        dispatch(addToOrder(cart));
        createStripeSession();
    };

    // console.log("cart", cart);
    // console.log("order", order);

    return (
        <div className="p-2">
            <div className="border-b-2 py-2 text-xs  text-center">
                Choose a shipping address and payment method to calculate
                shipping, handling and tax.
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <h1 className="text-xl font-bold">Order Summery</h1>
                <div className="flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2 border-b-2 p-2 text-xs">
                        <div className="flex justify-between">
                            <div className=" ">Items:</div>
                            <div className=" ">
                                ₹<TotalCost />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className=" ">Delivery fee:</div>
                            <div className=" ">₹ 120.0</div>
                        </div>
                        <div className="flex justify-between">
                            <div className=" font-medium text-sm ">Total:</div>
                            <div className="font-medium text-sm ">
                                ₹<PriceWithDeliveryCharge />
                            </div>
                        </div>{" "}
                        <div className="flex justify-between">
                            <div className=" ">Promotion Applied:</div>
                            <div className=" ">₹ -120.00</div>
                        </div>
                    </div>
                    <div className="flex justify-between border-b-2 text-lg pb-3 font-semibold">
                        <div className=" ">Order Total: </div>
                        <div className="">
                            ₹<TotalCost />
                        </div>
                    </div>
                    <div className="mx-3 mb-2">
                        {cart.length === 0 ? (
                            <button
                                className="focus:outline-none text-white bg-amazon-blue hover:hover:bg-[#509ed2] focus:ring-4 focus:ring-yellow-300 font-semibold p-1.5 dark:focus:ring-yellow-900 w-full rounded-lg text-lg shadow "
                                onClick={() => router.push("/")}
                            >
                                Add Items to Cart
                            </button>
                        ) : (
                            <button
                                className="focus:outline-none text-white bg-amazon-primary hover:hover:bg-[#ffa052] focus:ring-4 focus:ring-yellow-300 font-semibold p-1.5 dark:focus:ring-yellow-900 w-full rounded-lg text-lg shadow "
                                onClick={handlePlaceOrder}
                            >
                                Place Your Order
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummery;
