import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import { ReduxProvider } from "@/components/redux-provider";
import Layouts from "@/components/layout/layouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Amazon Clone App",
    description:
        "Amazon Clone App built with Next.js, Tailwind CSS, Supabase, Redux Toolkit, TypeScript, Stripe, and more.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>
                    <Layouts>{children}</Layouts>
                </ReduxProvider>
            </body>
        </html>
    );
}
