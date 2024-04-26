import Image from "next/image";
import Link from "next/link";
import kettle from "@/public/kettle_.svg";

const EmptyCart = () => {
    return (
        <>
            <div className="bg-[#eaeded] min-h-full pb-5 m-0 mt-0 min-w-full px-6 pt-9 select-none">
                <div className="md:w-9/12 w-full text-black gap-10   ">
                    <div className=" min-h-[38vh] bg-white rounded">
                        <div className="flex flex-col md:flex-row items-center p-5 gap-10">
                            <div className="mt-5">
                                <Image
                                    className=" h-48 w-80"
                                    src={kettle}
                                    alt="empty cart"
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="mb-5 text-center">
                                    <h1 className="text-2xl font-semibold tracking-tight  ">
                                        Your Amazon Cart is empty
                                    </h1>
                                    <Link
                                        href={"/"}
                                        className="text-sm mt-3 cursor-pointer text-amazon-primary font-normal hover:font-medium hover:text-amazon-secondary transition-all duration-300 ease-in-out tracking-tighter hover:underline"
                                    >
                                        Shop today&apos;s deals (Home)
                                    </Link>
                                </div>
                                <div className="flex gap-5">
                                    <Link href="/user/signin">
                                        <button className="bg-yellow-500 hover:bg-yellow-600 text-xs sm:text-sm shadow border font-semibold rounded-md px-3 py-2 hover:underline ">
                                            Sign in to your account
                                        </button>
                                    </Link>
                                    <Link href="/user/signin">
                                        <button className="bg-white text-xs sm:text-sm hover:bg-gray-100 border-e-1 shadow border rounded-md px-3 py-2 hover:underline ">
                                            Sign up now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" min-h-[15vh] bg-white p-3 rounded mt-5"></div>
                    <div className="text-xs mt-5 space-y-2  ">
                        <p>
                            The price and availability of items at Amazon.in are
                            subject to change. The shopping cart is a temporary
                            place to store a list of your items and reflects
                            each item&apos;s most recent price.
                        </p>
                        <p>
                            Do you have a promotional code? We&apos;ll ask you
                            to enter your claim code when it&apos;s time to pay
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-5 mb-12 select-none">
                <hr className="border-gray-300" />
                <div className="flex flex-col justify-center items-center m-9">
                    <div className="lg:w-1/4 md:w-2/4 w-full text-center space-y-1">
                        <div className="text-base md:text-sm font-medium tracking-tighter">
                            See personalized recommendations
                        </div>
                        <Link href={"/user/signin"}>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-base md:w-4/5 w-full rounded p-1.5 font-bold shadow leading-tight hover:underline">
                                Sign in
                            </button>
                        </Link>
                        <div className="text-sm md:text-xs">
                            <span className="">New customer? </span>
                            <Link
                                href="/auth/sigin"
                                className="text-blue-900 hover:text-amazon-primary hover:font-medium transition-all duration-300 ease-in-out tracking-tighter hover:underline"
                            >
                                Start here.
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300" />
            </div>
        </>
    );
};

export default EmptyCart;
