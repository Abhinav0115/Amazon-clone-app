"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-4xl font-bold">Not Found</h2>
            <p className="text-lg">Could not find requested resource</p>
            <button
                onClick={() => router.push("/")}
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md"
            >
                Return Home
            </button>
        </div>
    );
};

export default NotFound;
