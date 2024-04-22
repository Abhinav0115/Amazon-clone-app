"use client";
import React, { useState } from "react";
import { Rating, Typography } from "@material-tailwind/react";

const ProductRating = ({ ratings }) => {
    ratings = JSON.parse(ratings);
    const rated = parseInt(ratings.rate);

    return (
        <div className="flex items-center justify-start font-bold text-blue-gray-500">
            <Typography
                color="blue-gray"
                className="text-sm font-bold mt-1 text-blue-gray-500"
            >
                {ratings.rate}
            </Typography>
            <Rating
                value={rated}
                readonly
                className="scale-75 flex items-center justify-start w-3"
                unratedColor="blue-gray"
                ratedColor="amber"
            />
            <Typography
                color="blue-gray"
                className="font-medium text-xs mt-1 ml-[5.2rem] text-blue-gray-500"
            >
                {ratings.count} ratings
            </Typography>
        </div>
    );
};

export default ProductRating;
