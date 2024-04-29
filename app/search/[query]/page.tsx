"use client";
import NoProductFound from "@/components/products/No-Product-Found";
import SearceResult from "@/components/search/search-result";
import { useSupabase } from "@/utils/hooks/useSupabase";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
    let { query } = useParams();

    query = Array.isArray(query) ? query[0] : query; // Ensure query is a string
    query = query
        .replace("[", "")
        .replace("]", "")
        .replace(/%20/g, " ")
        .replace(/%26/g, "&"); // Remove special characters

    const {
        getQueryData,
        queryFilteredData,
    }: { getQueryData: Function; queryFilteredData: any } = useSupabase();

    useEffect(() => {
        getQueryData(query.toString());
    }, []);

    return (
        <div>
            {queryFilteredData.length !== 0 ? (
                <SearceResult
                    queryFilteredData={queryFilteredData}
                    query={query}
                />
            ) : (
                <NoProductFound
                    query={query}
                    queryFilteredData={queryFilteredData}
                />
            )}
        </div>
    );
};

export default Page;
