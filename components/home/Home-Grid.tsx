"use client";
import React from "react";
import HomeCard from "./card";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HomeGrid = ({ products, title, category }: any) => {
    const router = useRouter();

    const Plen = products.length > 7 ? 8 : 4;

    return (
        <>
            <div className="mx-5 bg-white px-5 pb-6 rounded-md pt-3 flex sm:flex-none items-center lg:items-start flex-col">
                <h2
                    className="text-2xl text-center font-bold mb-3 cursor-pointer hover:underline"
                    onClick={() => router.push(`/search/${category}`)}
                    title={title}
                >
                    {title}
                </h2>

                {/* {products.length === 4 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                    {products.map((product: any) => (
                        <div key={product.id}>
                            <HomeCard product={product} />
                        </div>
                    ))}
                </div>
            )}
            {products.length === 6 && ( */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                    {products.slice(0, Plen).map((product: any) => (
                        <div key={product.id}>
                            <HomeCard product={product} />
                        </div>
                    ))}
                </div>
                {/* )} */}
            </div>
        </>
    );
};

export default HomeGrid;
