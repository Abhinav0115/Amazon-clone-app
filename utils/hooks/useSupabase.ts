import { User } from "@supabase/supabase-js";
import { useState } from "react";
import { supabase } from "../supabase/client";

export const useSupabase = () => {
    const [products, setProducts] = useState<any>([]);
    const [queryFilteredData, setQueryFilteredData] = useState<any>([]);
    const [singleProduct, setSingleProduct] = useState<any>([]);
    const [UserData, setUserData] = useState<User | any>(null);

    const getAllProducts = async () => {
        let { data, error } = await supabase.from("products").select("*");
        if (data) {
            setProducts(data);
            // console.log("useSupabase.ts: data ->",data);
        }
        if (error) {
            console.error(error);
        }
    };

    const getQueryData = async (query: string) => {
        let { data, error } = await supabase
            .from("products")
            .select("*")
        .or(
            `title.ilike.*${query}*, description.ilike.*${query}*, category.ilike.*${query}*`
            // `title.ilike.*${query}*, category.ilike.*${query}*`
        );
        if (data) {
            setQueryFilteredData(data);
        }
        if (error) {
            console.error(error);
        }
    };

    const getSingleProduct = async (id: number) => {
        let { data, error } = await supabase
            .from("products")
            .select("*")
            .eq("id", id);

        if (data) {
            setSingleProduct(data[0]); //error fixed by adding [0]
        }
        if (error) {
            console.error(error);
        }
    };

    const getUserData = async () => {
        const {
            data: { user },
            error,
        } = await supabase.auth.getUser();
        if (user) {
            setUserData(user);
            // console.log("useSupabase.ts: user ->", user);
        }
        if (error) {
            console.error(error);
        }
    };

    return {
        products,
        getAllProducts,
        getQueryData,
        queryFilteredData,
        getSingleProduct,
        singleProduct,
        UserData,
        getUserData,
    };
};
