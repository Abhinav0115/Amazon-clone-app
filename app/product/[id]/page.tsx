"use client";
import SingleProduct from "@/components/products/Single-product";
import { useSupabase } from "@/utils/hooks/useSupabase";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
    const { id } = useParams();

    const { getSingleProduct, singleProduct } = useSupabase();

    useEffect(() => {
        // Fetch single product
        getSingleProduct(Number(id));
    }, []);

    return (
        <div>
            <SingleProduct singleProduct={singleProduct} />
        </div>
    );
};

export default Page;
