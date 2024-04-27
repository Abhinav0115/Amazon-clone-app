import React from "react";
import { GrLocation } from "react-icons/gr";
import { FaLock } from "react-icons/fa6";
import { useAppDispatch } from "@/utils/hooks/redux-hooks";
import { addToCart } from "@/store/slices/cartSlice";
import { useRouter } from "next/navigation";

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
const AddToCartContainer = ({ singleProduct }: singleProductProps) => {
    //Date --------------------------------------------------------
    let today = new Date();
    const month = today.toLocaleString("default", { month: "long" });
    // const currTime = today.toLocaleTimeString();
    // let day = today.toLocaleString("en-us", { weekday: "long" });

    // +2 from current
    const nextTwoDays = new Date(today.setDate(today.getDate() + 2));
    const secondDay = nextTwoDays.getDate();
    const fastestDeliveryDay = nextTwoDays.toLocaleString("en-us", {
        weekday: "long",
    });

    // +7 from current
    const nextFiveDays = new Date(today.setDate(today.getDate() + 5));
    today = new Date();
    const seventhDay = nextFiveDays.getDate();
    const freeDeliveryDay = nextFiveDays.toLocaleString("en-us", {
        weekday: "long",
    });

    const DeliveryData = {
        freeDelivery: ` ${freeDeliveryDay}, ${seventhDay} ${month}`,
        fastestDelivery: `${fastestDeliveryDay}, ${secondDay} ${month}`,
        month: month,
    };

    //----------------------------------------------------------------

    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <div className="border border-gray-300 rounded-md h-fit text-sm pb-4 py-5">
            <div className="flex flex-col gap-5 px-3 mb-3">
                <h1 className="">
                    <span className="text-[#147C8F] cursor-pointer ">
                        FREE delivery{" "}
                    </span>{" "}
                    <span className="font-medium">
                        {DeliveryData.freeDelivery}.{" "}
                    </span>
                    <span className="text-[#147C8F]  cursor-pointer">
                        Details
                    </span>
                </h1>
                <h1 className="a">
                    Or fastest delivery with{" "}
                    <span className="font-semibold text-[#147C8F]">prime</span>{" "}
                    <span className="text-black font-bold">
                        {DeliveryData.fastestDelivery}.{" "}
                    </span>
                    Order within{" "}
                    <span className="text-green-500 font-medium">
                        15 hours 10 mins.{" "}
                    </span>
                    <span className="text-[#147C8F] cursor-pointer ">
                        Details
                    </span>{" "}
                </h1>
                <div className="text-[#147C8F] flex items-center gap-1">
                    <GrLocation className="text-[#147C8F] text-lg" />
                    Deliver to user - New Delhi 120121
                </div>
                <div className="text-green-500 font-bold">IN STOCK</div>
                <div className="flex justify-between px-1">
                    <h1 className="text-sm">Sold by</h1>
                    <p className="text-black">Amazon</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 mx-2">
                <button
                    className="bg-amazon-primary hover:bg-[#ff9f50] rounded-full p-2.5 md:p-1.5"
                    onClick={() => {
                        dispatch(addToCart(singleProduct));
                        router.push("/cart");
                    }}
                >
                    Add to Cart
                </button>
                <button
                    className="bg-amazon-secondary hover:bg-[#ffc700] rounded-full p-2.5 md:p-1.5"
                    onClick={() => {
                        dispatch(addToCart(singleProduct));
                        router.push("/checkout");
                    }}
                >
                    Buy Now
                </button>
            </div>
            <div className="flex flex-col gap-2 px-3 mt-4">
                <div className="flex items-center gap-3">
                    <FaLock />
                    Secure transaction
                </div>
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        name="giftCheckbox"
                        id="giftCheckbox"
                        className="w-3.5 h-3.5"
                    />
                    <label htmlFor="giftCheckbox"> Add gift options</label>
                </div>
            </div>
        </div>
    );
};

export default AddToCartContainer;
