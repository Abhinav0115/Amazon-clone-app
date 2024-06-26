/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import { getCart } from "@/store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux-hooks";
import { useSupabase } from "@/utils/hooks/useSupabase";
import HomeGrid from "./Home-Grid";
import HomeCarousels from "./carousel/HomeCarousel";
import AppleCards from "./carousel/AppleCarousel";
import PrimeVideos from "./carousel/PrimeCarousel";
import { useRouter } from "next/navigation";
import { clearOrder } from "@/store/slices/orderSlice";
interface CategoryProps {
    category: string;
}

const HomePage = () => {
    const { getAllProducts, products } = useSupabase();

    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        // Fetch single product
        dispatch(clearOrder());
        getAllProducts();
    }, []);

    const MensProducts = products.filter(
        (product: CategoryProps) =>
            product.category === "men's clothing" ||
            product.category === "men's Clothing" ||
            product.category === "Men's clothing" ||
            product.category === "Men's Clothing"
    );
    const WomensProducts = products.filter(
        (product: CategoryProps) =>
            product.category === "women's clothing" ||
            product.category === "women's Clothing" ||
            product.category === "Women's clothing" ||
            product.category === "Women's Clothing"
    );
    const ElectronicsProducts = products.filter(
        (product: CategoryProps) =>
            product.category === "electronics" ||
            product.category === "Electronics"
    );
    const JewelryProducts = products.filter(
        (product: CategoryProps) =>
            product.category === "jewelry" ||
            product.category === "Jewelry" ||
            product.category === "jewellery" ||
            product.category === "Jewellery"
    );
    const ShoesProducts = products.filter(
        (product: CategoryProps) =>
            product.category === "Shoe" ||
            product.category === "Shoes" ||
            product.category === "shoes" ||
            product.category === "Footwear" ||
            product.category === "footwear"
    );
    const FurnitureProducts = products.filter(
        (product: CategoryProps) =>
            product.category === "Furniture" || product.category === "furniture"
    );

    return (
        // home ->  home-grid(category's product, title) -> card (products)

        <div
            className=" bg-[#dddddd] bg-gradient-to-b from-[#ffffff] to-[#2c2e2e] w-full  transition-all flex flex-col gap-5 aapb-64 aamd:aapb-0"
            id="homePage"
        >
            <HomeCarousels />
            <div className="md:relative h-fit md:-top-64 flex flex-col gap-10 md:-mb-52 mb-10  ">
                <HomeGrid
                    products={MensProducts}
                    title={"Men's Clothing"}
                    category={"men's clothing"}
                />{" "}
                <div className="text-black font-semibold bg-white mx-5 p-3 rounded-md">
                    <div
                        className="cursor-pointer text-xl w-fit mx-auto px-4 p-1 rounded-sm hover:underline hover:bg-gray-100 transition-all duration-300 ease-in-out"
                        onClick={() => {
                            router.push("/product");
                        }}
                    >
                        View All Products
                    </div>
                </div>
                <HomeGrid
                    products={WomensProducts}
                    title={"Women's Clothing"}
                    category={"women's clothing"}
                />
                <HomeGrid
                    products={FurnitureProducts}
                    title={"Furnitures"}
                    category={"Furniture"}
                />
                <AppleCards />
                <HomeGrid
                    products={ElectronicsProducts}
                    title={"Electronics"}
                    category={"Electronics"}
                />
                <HomeGrid
                    products={JewelryProducts}
                    title={"Jewelry"}
                    category={"jewelry"}
                />
                <HomeGrid
                    products={ShoesProducts}
                    title={"Shoes"}
                    category={"Shoes"}
                />
                <PrimeVideos />{" "}
                <div className="text-white font-semibold bg-gray-700 mx-5 p-3 rounded-md">
                    <div
                        className="cursor-pointer text-xl w-fit mx-auto px-4 p-1 rounded-sm hover:underline transition-all duration-300 ease-in-out"
                        onClick={() => {
                            router.push("/product");
                        }}
                    >
                        View All Products
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
