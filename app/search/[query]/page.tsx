"use client";
import SearceResult from "@/components/search/search-result";
import { useSupabase } from "@/utils/hooks/useSupabase";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
    let { query } = useParams();

    query = Array.isArray(query) ? query[0] : query; // Ensure query is a string
    query = query.replace("[", "").replace("]", "").replace(/%20/g, " ");

    const { getQueryData, queryFilteredData } = useSupabase();

    useEffect(() => {
        getQueryData(query.toString());
    }, []);

    return (
        <div>
            <SearceResult queryFilteredData={queryFilteredData} />
        </div>
    );
};

export default Page;
