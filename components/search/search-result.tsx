import React from "react";
import Productcards from "../cards/Productcards";

interface SearchResultProps {
    queryFilteredData: {
        id: string;
        title: string;
        description: string;
        price: number;
        image: string;
        category: string;
        rating: string;
    }[];
    query: string;
}

const SearceResult = ({ queryFilteredData, query }: SearchResultProps) => {
    return (
        // use this tempelete when u also include filter in the search result
        // <div className="grid grid-flow-col grid-cols-12 pt-10">
        //     <div className="col-span-3 bg-red-300 hidden md:block mt-10">
        //         hello
        //     </div>
        //     <div className="col-span-12 md:col-span-9 mt-10 px-3">
        //         <div>
        //             <h1 className="text-2xl font-bold">Results</h1>
        //             <p className="text-gray-600 text-sm">
        //                 Price and other details may vary based on product size
        //                 and colour.
        //             </p>
        //         </div>
        //         <div className="grid grid-cols-4 gap-3">
        //             {queryFilteredData?.map((product: any) => {
        //                 return (
        //                     <div key={product.id} className="px-2">
        //                         <Productcards product={product} />
        //                     </div>
        //                 );
        //             })}
        //         </div>
        //     </div>
        // </div>

        //----------------------------------------------
        // use this template when u only want to display the search result
        <>
            <div className="w-[80%] mx-auto min-h-screen my-10">
                <div className="mt-8">
                    <div>
                        <h1 className="text-xl font-semibold">
                            <span className="text-gray-800">
                                Search results for:{" "}
                            </span>{" "}
                            &quot;
                            <span className="capitalize text-gray-800">
                                {query}
                            </span>
                            &quot;{" - "}
                            <span className="font-medium text-gray-600">
                                {queryFilteredData.length}
                            </span>
                        </h1>
                        <p className="text-gray-600 text-xs">
                            Price and other details may vary based on product
                            size and colour.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
                        {queryFilteredData?.map((product: any) => {
                            return (
                                <div key={product.id} className="mt-5 ">
                                    <Productcards product={product} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearceResult;
