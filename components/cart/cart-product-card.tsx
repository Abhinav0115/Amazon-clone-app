import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductRating from "../rating/Rating";
import { useAppDispatch } from "@/utils/hooks/redux-hooks";
import {
    decrementQuantity,
    incrementQuantity,
    removeFromCart,
} from "@/store/slices/cartSlice";

interface ProductCardProps {
    product: {
        id: number;
        title: string;
        price: number;
        image: string;
        description: string;
        category: string;
        rating: any;
    };
    // quantity: number;
}

const CartProduct = ({ product }: any) => {
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.checked);
    };
    const dispatch = useAppDispatch();

    return (
        <div className="flex justify-between items-center px-2 py-2 border-b-2 my-2">
            <div className="flex items-center gap-5">
                {/* TODO: rebuild */}
                {/* <input
                    type="checkbox"
                    name={product.title}
                    id={product.title}
                    className="w-4 aspect-square border border-gray-500 rounded-md focus:ring-0 focus:ring-gray-500 focus:outline-none"
                    onChange={handleCheckboxChange}
                /> */}
                <div className="flex items-center gap-10">
                    <div className="w-[25%] flex items-center justify-center h-48 bg-gray-200 rounded-md relative">
                        <Image
                            src={product.image}
                            alt={product.title}
                            height={200}
                            width={480}
                            className="mix-blend-multiply w-fit h-40 p-1"
                            objectFit="contain"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link
                            // href={"/product/" + product.id}
                            href={"/"}
                            className="text-lg font-semibold text-gray-900"
                        >
                            {product.title}
                        </Link>
                        <div className="flex flex-col gap-1">
                            <div className="text-sm text-green-600 font-bold">
                                In Stock
                            </div>
                            <div className="text-xs text-gray-600 capitalize">
                                Category:{" "}
                                <span className="font-medium ">
                                    {product.category}
                                </span>
                            </div>
                            <div className="">
                                {/* <ProductRating ratings={product.rating} /> */}
                            </div>
                        </div>
                        <div className="flex text-sm items-center gap-4">
                            <div className="flex items-center bg-gray-200 w-fit px-1 rounded-full gap-1 ">
                                {/* <span className="font-medium">Qty:</span> */}
                                <div className="flex items-center gap-2">
                                    <button
                                        // disabled={quantity === 0}
                                        className="text-2xl disabled:text-red-300 font-medium px-1 rounded-lg text-red-500"
                                        onClick={() => {
                                            dispatch(
                                                decrementQuantity(product.id)
                                            );
                                            if (product.quantity === 1) {
                                                dispatch(
                                                    removeFromCart(product.id)
                                                );
                                            }
                                        }}
                                        // disabled={product.quantity === 1}
                                    >
                                        -
                                    </button>
                                    <p className="text-base font-medium ">
                                        {product.quantity}
                                    </p>{" "}
                                    <button
                                        className="text-2xl font-medium text-blue-800 px-1 rounded-lg"
                                        onClick={() => {
                                            dispatch(
                                                incrementQuantity(product.id)
                                            );
                                        }}
                                        disabled={product.quantity === 10}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <span className="opacity-40">|</span>
                            <div className="flex gap-3 text-nowrap">
                                <div>
                                    <button
                                        onClick={() =>
                                            dispatch(removeFromCart(product.id))
                                        }
                                        className="text-sm font-semibold text-teal-800 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                                <span className="opacity-40">|</span>
                                <div className="">
                                    <button
                                        className="text-sm font-semibold text-teal-800 opacity-60"
                                        disabled
                                    >
                                        Save for later
                                    </button>
                                </div>
                                <span className="opacity-40">|</span>
                                <div>
                                    <button className="text-sm font-semibold text-teal-800 hover:underline">
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="  flex items-center flex-col gap-1">
                    <h1 className="text-2xl font-bold">
                        ₹{Number(product.price).toFixed(1)}
                    </h1>
                    <span className="text-xs text-gray-700">
                        <span className=" tracking-tighter">M.R.P: </span>
                        <span className="line-through text-sm text-gray-800">
                            ₹{(product.price * 1.5).toFixed(1)}
                        </span>{" "}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
