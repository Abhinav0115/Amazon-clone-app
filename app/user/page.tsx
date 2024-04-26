"use client";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    return router.push("/user/signin");
};

export default Page;
