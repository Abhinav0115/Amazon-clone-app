"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// import { useSelector, useDispatch } from "react-redux";
// import toast from "react-hot-toast";

import amazonLogo from "@/public/amazon-logo.png";

import { useRouter } from "next/navigation";

const SigninPage = () => {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    });

    // const notify = () => toast("Wow so easy !", { type: "success" });

    const router = useRouter();
    // const dispatch = useDispatch();

    const handleSigninChange = (e: any) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = (e: any) => {
        e.preventDefault();

        if (!userDetails.email || !userDetails.password) {
            return alert("Please fill in all fields");
        }

        router.push("/");

        setUserDetails({
            email: "",
            password: "",
        });
    };

    return (
        <section className=" bg-gray-50 overflow-hidden">
            <div className="flex justify-center items-center flex-col px-8 py-8 mx-auto md:h-screen lg:py-0">
                <Link href={"/"} className="cursor-pointer">
                    <Image
                        src={amazonLogo}
                        alt="amazon logo"
                        width={200}
                        height={150}
                    />
                </Link>
                <div className="w-full bg-white rounded-lg shadow sm:max-w-sm">
                    <div className="p-6 space-y-7 sm:p-8 ">
                        <h1 className="font-bold text-xl md:text-2xl leading-tight text-gray-900 tracking-tight">
                            Login to Your Account
                        </h1>
                        <div className=" space-y-4 md:scroll-py-3">
                            <label
                                htmlFor="email"
                                className="block font-medium text-gray-900 text-base"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-lg text-base font-medium text-black border-e-gray-300 bg-gray-50 outline-none py-2 px-3 focus:ring-1 focus:ring-orange-500 transition duration-100 ease-in-out"
                                name="email"
                                placeholder="Your email address"
                                value={userDetails.email}
                                onChange={handleSigninChange}
                            />
                        </div>
                        <div className="space-y-4 md:space-y-3">
                            <label
                                htmlFor="password"
                                className="text-gray-900 text-base block font-medium"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full rounded-lg text-base font-medium text-black border-e-gray-300 bg-gray-50 outline-none py-2 px-3 focus:ring-1 focus:ring-orange-500 transition duration-100 ease-in-out"
                                name="password"
                                placeholder="Your password"
                                value={userDetails.password}
                                onChange={handleSigninChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 py-2.5 px-auto rounded-lg text-white font-medium text-base uppercase text-center tracking-wide transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 "
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
                <div className="w-full bg-gray-50 sm:max-w-sm text-center">
                    <div className="text-sm font-light my-4 flex justify-center items-center text-gray-400">
                        <hr className="w-1/3 " />
                        <span className="mx-1">New to Amazon?</span>
                        <hr className="w-1/3" />
                    </div>
                    <Link href="/auth/signin" className="  ">
                        <div className=" bg-gray-100 hover:bg-gray-200 rounded-lg shadow text-sm text-gray-500 p-3 hover:font-medium tracking-tight transition-all duration-150 ">
                            Create your Amazon account
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SigninPage;
