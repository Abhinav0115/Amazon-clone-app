"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
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

    const itemList = [
        "Fresh",
        "Amazon miniTV",
        "Sell",
        "Gift Cards",
        "Amazon pay",
        "Gift Ideas",
        "Electronics",
        "Mobiles",
        "Home",
        "Fashion",
        "Appliances",
        "Toys",
        "Books",
    ];

    useEffect(() => {
        getUserData();
    }, []);

    // console.log("UserData", UserData);

    return (
        <>
            <div className="px-6 flex flex-1 text-white bg-amazon-dark w-full min-h-[10vh] h-fit items-center gap-10 justify-between">
                <Link href={"/"}>
                    <Image
                        src={amazonLogoWhite}
                        alt="amazon logo"
                        width={540}
                        height={540}
                        className="cursor-pointer mt-3 w-28 h-10 sm:w-24 md:w-20 md:h-6"
                    />
                </Link>
                <nav className="md:flex flex-1 h-full gap-10 hidden">
                    <div className="flex items-center justify-center text-base font-semibold cursor-pointer tracking-tight" onClick={()=> {
                        router.push("/")
                    }}>
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
                                            <>
                                                Hello,{" "}
                                                {
                                                    UserData.user_metadata.name?.split(
                                                        " "
                                                    )[0]
                                                }
                                            </>
                                        ) : (
                                            <div
                                                className=""
                                                style={{ fontSize: "10px" }}
                                            >
                                                {UserData.email}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div
                                        className="hover:underline font-medium cursor-pointer"
                                        onClick={() => {
                                            router.push("/auth/signin");
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

            <div className="px-5 lg:px-1 flex flex-1 p-1 text-gray-200 bg-amazon-gray w-full min-h-[5vh] h-fit items-center gap-10 justify-between text-xs tracking-tight">
                <div className="flex gap-1 items-left justify-start w-full">
                    <Link
                        href={"/"}
                        className="flex items-center p-0.5 pr-2 hover:outline outline-1 rounded hover:bg-gray-700"
                    >
                        <BiMenu className="text-2xl" />
                        All
                    </Link>
                    {itemList.map((item, index) => (
                        <Link
                            href={"/"}
                            key={index}
                            className="p-0.5 px-2 hover:outline outline-1 rounded mt-1 hover:bg-gray-800 hidden lg:block"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
                {UserData !== null && (
                    <button
                        onClick={async () => {
                            const { error } = await supabase.auth.signOut();
                            router.push("/auth/signin");
                        }}
                        className="text-primary font-medium text-base p-0.5 px-2 text-nowrap hover:underline rounded hover:text-amazon-secondary"
                    >
                        Sign out
                    </button>
                )}
            </div>
        </>
    );
};

export default Header;
