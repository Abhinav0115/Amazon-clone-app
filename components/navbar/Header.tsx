"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { SidebarWithBurgerMenu } from "./Sidebar/SidebarWithBurgerMenu";

import amazonLogoWhite from "@/public/amazon-logo-white.png";
import { useAppSelector } from "@/utils/hooks/redux-hooks";
import { getCart } from "@/store/slices/cartSlice";
import { TotalQuantity } from "../common/Total";
import { supabase } from "@/utils/supabase/client";
import { useSupabase } from "@/utils/hooks/useSupabase";

// TODO: Add responsive design to the Navbar and category dropdown
//FIXME: mobile view is not working properly

const Header = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const { UserData, getUserData } = useSupabase();
    const router = useRouter();

    const cart = useAppSelector(getCart);

    const handleSearch = () => {
        router.push(`/search/${searchQuery}`);
        setSearchQuery("");
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const itemList = ["Fresh", "Amazon miniTV", "Gift Cards", "Amazon pay"];
    const ProductsItemList = [
        "Electronics",
        "Furniture",
        "Jewelry",
        "Shoes",
        "Men's Clothing",
        "Women's Clothing",
        "Fashion",
        "Kids & Baby",
    ];

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <>
            <div className="px-6 flex flex-1 text-white bg-amazon-dark w-full min-h-[8vh] md:min-h-[11vh] h-fit items-center gap-10 justify-between">
                <Link href={"/"}>
                    <Image
                        src={amazonLogoWhite}
                        alt="amazon logo"
                        width={540}
                        height={540}
                        className="cursor-pointer mt-3 py-1 md:py-0 w-28 h-10 sm:w-24 md:w-20 md:h-6"
                    />
                </Link>
                <nav className="md:flex flex-1 h-full gap-10 hidden">
                    <div
                        className="flex items-center justify-center text-base font-semibold cursor-pointer tracking-tight"
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        Category
                        {/* <BiChevronDown /> */}
                    </div>
                    <div className="flex flex-1">
                        <input
                            type="text"
                            placeholder="Search for products, brands and more"
                            name="search"
                            value={searchQuery}
                            id="search"
                            onKeyUp={(e) => handleKeyPress(e)}
                            className="rounded-l-md px-3 text-black h-10 outline-none w-full border-none"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            className="h-10 w-14 bg-amazon-primary rounded-r-md outline-none border-none text-2xl flex items-center justify-center hover:bg-amazon-secondary transition-all duration-300"
                            onClick={handleSearch}
                        >
                            <FiSearch />
                        </button>
                    </div>
                    <div className="flex items-end gap-1 cursor-pointer tracking-tight">
                        <div className="flex flex-col gap-0 justify-around text-sm text-center">
                            <span className="h-4 ">
                                {UserData ? (
                                    <div className="">
                                        {UserData.user_metadata.name ? (
                                            <div
                                                title={
                                                    UserData.user_metadata.name
                                                }
                                            >
                                                Hello,{" "}
                                                {
                                                    UserData.user_metadata.name?.split(
                                                        " "
                                                    )[0]
                                                }
                                            </div>
                                        ) : (
                                            <div
                                                className=""
                                                style={{ fontSize: "10px" }}
                                                title={UserData.email}
                                            >
                                                {UserData.email}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div
                                        className="hover:underline font-medium cursor-pointer"
                                        onClick={() => {
                                            router.push("/user/signin");
                                        }}
                                    >
                                        Sign In
                                    </div>
                                )}
                            </span>
                            <div className="font-medium tracking-tighter text-sm cursor-text">
                                Account & Order
                            </div>
                        </div>
                        {/* <BiChevronDown className="text-xl" /> */}
                    </div>
                    <div
                        className="cursor-pointer items-center flex"
                        onClick={() => router.push("/cart")}
                    >
                        <div className="flex items-end relative">
                            <Image
                                src="/cart.png"
                                alt="cart"
                                height={40}
                                width={40}
                            />
                            <span className="font-medium">Cart</span>
                            <span className="absolute bottom-3 left-[16px] w-4 text-sm text-amazon-secondary font-semibold">
                                <TotalQuantity />
                            </span>
                        </div>
                    </div>
                </nav>
                <div className="flex md:hidden">
                    <SidebarWithBurgerMenu cartProducts={cart.length} />
                </div>
            </div>

            <div className="px-3 pr-5 md:px-3 flex flex-1 p-1 text-gray-200 bg-amazon-gray w-full min-h-[5vh] h-fit items-center gap-5 justify-between text-sm ">
                <div className="flex gap-1 items-left justify-start w-full overflow-hidden">
                    <Link
                        href={"/"}
                        className="flex items-center p-0.5 rounded "
                    >
                        <span className="outline-1 outline-blue-gray-300 hover:bg-gray-800 hover:outline p-0.5   px-1.5 flex items-center rounded-md">
                            <BiMenu className="text-2xl" />
                            All
                        </span>
                    </Link>
                    {itemList.map((item, index) => (
                        <div
                            key={index}
                            className="p-0.5 px-2 rounded my-2 text-nowrap hover:bg-gray-800 hidden md:block text-xs select-none cursor-default"
                        >
                            {item}
                        </div>
                    ))}
                    <div className="my-2 hidden md:block">|</div>
                    {ProductsItemList.map((item, index) => (
                        <Link
                            href={`/search/${item.toLowerCase()}`}
                            key={index}
                            className="p-0.5 px-2 hover:outline outline-1 outline-blue-gray-300 rounded my-2 text-nowrap hover:bg-gray-800 hidden md:block text-xs "
                        >
                            {item}
                        </Link>
                    ))}
                    <div className="flex md:hidden flex-1 ms-3 my-2">
                        <input
                            type="text"
                            placeholder="Search for products, brands and more"
                            name="search"
                            value={searchQuery}
                            id="search"
                            onKeyUp={(e) => handleKeyPress(e)}
                            className="rounded-l-md px-3 text-black h-8 outline-none w-full border-none"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            className="h-8 w-12 bg-amazon-primary rounded-r-md outline-none border-none text-2xl flex items-center justify-center hover:bg-amazon-secondary transition-all duration-300"
                            onClick={handleSearch}
                        >
                            <FiSearch />
                        </button>
                    </div>
                </div>
                {UserData !== null && (
                    <button
                        onClick={async () => {
                            const { error } = await supabase.auth.signOut();
                            router.push("/user/signin");
                        }}
                        className="text-primary font-medium text-base p-0.5 px-2 text-nowrap hover:underline rounded hover:text-amazon-secondary hidden md:block"
                    >
                        Sign out
                    </button>
                )}
            </div>
        </>
    );
};

export default Header;
