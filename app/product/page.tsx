/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import Productcards from "@/components/cards/Productcards";
import { useSupabase } from "@/utils/hooks/useSupabase";

const Page = () => {
    const { getAllProducts, products } = useSupabase();

    useEffect(() => {
        // Fetch single product
        getAllProducts();
    }, []);
    return (
        <div>
            <div className="w-[80%] mx-auto min-h-screen my-10">
                <div className="mt-8">
                    <div>
                        <h1 className="text-2xl font-bold">
                            All Products{" "}
                            <span className="font-medium text-gray-600">
                                {products.length}
                            </span>
                        </h1>
                        <p className="text-gray-600 text-sm">
                            Price and other details may vary based on product
                            size and colour.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
                        {products?.map((product: any) => {
                            return (
                                <div key={product.id} className="mt-5 ">
                                    <Productcards product={product} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
