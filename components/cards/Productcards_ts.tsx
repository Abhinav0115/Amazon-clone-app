import Image from "next/image";
import React from "react";

interface ProductProps {
    product: any; // Replace 'any' with the actual type of queryFilteredData
    // title
    // price
    // description
    // category
    // image
    // rating
    // numReviews
}

const Productcards = ({ product }: ProductProps) => {
    // console.log(product);

    return (
        <div className="bg-gray-500 rounded-lg p-2">
            <Image
                className="mix-blend-multiply"
                src={product.image}
                width={200}
                height={200}
                alt={product.title}
            />
            <div className="mt-4">
                <h1 className="font-bold text-base">{product.title} </h1>
                <p className="text-sm ">
                    {product.description.substring(0, 90)}...{" "}
                </p>
                <p className="font-bold text-2xl ">₹{product.price} </p>
            </div>
        </div>
    );
};

export default Productcards;
