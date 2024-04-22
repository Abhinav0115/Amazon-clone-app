"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    return !pathname.includes("auth") &&
        !pathname.includes("signin") &&
        !pathname.includes("login") &&
        !pathname.includes("signup") &&
        !pathname.includes("checkout") &&
        !pathname.includes("register") ? (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 min-h-screen">{children}</main>
            <Footer />
        </div>
    ) : (
        children
    );
};

export default ClientLayout;
