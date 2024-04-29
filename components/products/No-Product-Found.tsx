import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const NoProductFound = ({ query, queryFilteredData }: any) => {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center h-[80vh]">
            <h1 className="text-4xl font-bold text-blue-gray-700">
                No results found for &quot;
                <span className="capitalize">{query}</span>
                &quot;
            </h1>
            <h2 className="text-base text-gray-600">
                Products are being added weekly, please check back later.
            </h2>

            <div className="flex gap-10">
                <button
                    onClick={() => router.push("/")}
                    className="mt-5 bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                >
                    Go back to home
                </button>
                <button
                    onClick={() => router.push("/product")}
                    className="mt-5 bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
                >
                    View all products
                </button>
            </div>
        </div>
    );
};

export default NoProductFound;
