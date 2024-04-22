"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import AdminLayout from "./admin-layout";
import ClientLayout from "./client-layout";

const Layouts = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <>
            {pathname.includes("/admin") ? (
                <AdminLayout>{children} </AdminLayout>
            ) : (
                <ClientLayout>{children}</ClientLayout>
            )}
        </>
    );
};

export default Layouts;
