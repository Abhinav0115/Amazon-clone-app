import Image from "next/image";
import React from "react";
import ProductRating from "../rating/Rating";
import AddToCartContainer from "../Add-to-cart";

interface singleProductProps {
    singleProduct: {
        id: number;
        title: string;
        description: string;
        category: string;
        image: string;
        price: number | string | null | undefined;
        rating: number | string | null | undefined;
    };
}

const SingleProduct = ({ singleProduct }: singleProductProps) => {
    return (
        <div className="w-[90%] mx-auto my-16 ">
            <div className="flex justify-between flex-col md:flex-row gap-2">
                <div className="md:w-[35%] flex items-center justify-center rounded-lg">
                    <Image
                        src={singleProduct?.image}
                        alt={singleProduct?.title}
                        width={400}
                        height={300}
                        className="mix-blend-multiply w-full h-[70%] rounded-xl"
                    />
                </div>
                <div className=" md:w-[60%] px-2 flex flex-col gap-3">
                    <div className="text-2xl font-bold ">
                        {singleProduct?.title}
                    </div>
                    <p className="text-sm ">{singleProduct?.description} </p>{" "}
                    <div className="text-sm capitalize">
                        <span className="a">Category: </span>
                        <span className="">{singleProduct?.category}</span>
                    </div>
                    {/* <ProductRating ratings={singleProduct[0]?.rating} /> */}
                    {singleProduct?.rating !== null &&
                        singleProduct?.rating !== undefined && (
                            <ProductRating ratings={singleProduct?.rating} />
                        )}
                    <div className="text-5xl m-2 font-bold">
                        ₹{singleProduct?.price}
                    </div>
                    {/* <div className="flex gap-2">
                        <button className="bg-green-300 p-2 rounded-lg">
                            Add to Cart
                        </button>
                        <button className="bg-green-300 p-2 rounded-lg">
                            Buy Now
                        </button>
                    </div> */}
                    <div className="text-sm">
                        <h1 className="text-base font-semibold">
                            About this item
                        </h1>
                        <li className="ml-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quidem aperiam quo dolores vel repellat
                            voluptas sint placeat, consectetur fugiat nam dolor
                            id ullam explicabo laborum accusantium sit, ut
                            mollitia iure?
                        </li>
                        <li className="ml-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quidem aperiam quo dolores vel repellat
                            voluptas sint placeat, consectetur fugiat nam dolor
                            id ullam explicabo laborum accusantium sit, ut
                            mollitia iure?
                        </li>
                        <li className="ml-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quidem aperiam quo dolores vel repellat
                            voluptas sint placeat, consectetur fugiat nam dolor
                            id ullam explicabo laborum accusantium sit, ut
                            mollitia iure?
                        </li>
                    </div>
                </div>
                <div className="md:w-[25%] ">
                    <AddToCartContainer singleProduct={singleProduct} />
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
