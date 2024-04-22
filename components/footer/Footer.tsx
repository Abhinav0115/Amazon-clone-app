"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

import amazonLogoWhite from "@/public/amazon-logo-white.png";

const Footer = () => {
    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    //bootom footer items
    const bottomFooterItems = [
        {
            title: "AbeBooks",
            links: ["Books, art", "& collectibles"],
            href: "https://www.abebooks.com/",
        },
        {
            title: "Amazon Web Services",
            links: ["Scalable Cloud", "Computing Services"],
            href: "https://aws.amazon.com/",
        },
        {
            title: "Audible",
            links: ["Download", "Audio Books"],
            href: "https://www.audible.com/",
        },
        {
            title: "IMDb",
            links: ["Movies, TV", "& Celebrities"],
            href: "https://www.imdb.com/",
        },
        {
            title: "Shopbop",
            links: ["Designer", "Fashion Brands"],
            href: "https://www.shopbop.com/",
        },
        {
            title: "Amazon Business",
            links: ["Everything for", "Your Business"],
            href: "https://www.amazon.com/business",
        },
        {
            title: "Prime Now",
            links: ["2-Hour Delivery", "on Everyday Items"],
            href: "https://primenow.amazon.com/",
        },
        {
            title: "Amazon Prime Music",
            links: [
                "100 million songs ad-free",
                "Over 15 million podcasts episodes",
            ],
            href: "https://music.amazon.com/",
        },
    ];

    // top footer items
    const footerLinks = [
        {
            title: "Get to Know Us",
            links: [
                { title: "About Us", href: "https://www.aboutamazon.in/" },
                { title: "Careers", href: "https://amazon.jobs/en/" },
                {
                    title: "Press Releases",
                    href: "https://press.aboutamazon.in/",
                },
                {
                    title: "Amazon science",
                    href: "https://www.amazon.science/",
                },
            ],
        },

        {
            title: "Connect with Us",
            links: [
                {
                    title: "Facebook",
                    href: "https://www.facebook.com/AmazonIN",
                },
                { title: "Twitter", href: "https://twitter.com/AmazonIN" },
                {
                    title: "Instagram",
                    href: "https://www.instagram.com/amazondotin/",
                },
            ],
        },

        {
            title: "Make Money with Us",
            links: [
                {
                    title: "Sell on Amazon",
                    href: "https://www.amazon.in/b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C",
                },
                {
                    title: "Sell under Amazon Accelerator",
                    href: "https://www.amazon.in/b/?node=16192220031&ref_=map_1_b2b_GW_FT",
                },
                {
                    title: "Protect and Build Your Brand",
                    href: "https://brandservices.amazon.in/",
                },
                {
                    title: "Amazon Global Selling",
                    href: "https://sell.amazon.in/grow-your-business/amazon-global-selling",
                },
                {
                    title: "Become an Affiliate",
                    href: "https://affiliate-program.amazon.in/",
                },
                {
                    title: "Fulfillment by Amazon",
                    href: "https://sell.amazon.in/shipping-and-fulfillment/fulfillment-by-amazon",
                },
                {
                    title: "Advertise Your Products",
                    href: "https://advertising.amazon.com/",
                },
                {
                    title: "Amazon Pay on Merchants",
                    href: "https://www.amazonpay.in/merchant",
                },
                // {
                //     title: "Sell on Amazon Business",
                //     href: "https://www.amazon.com/",
                // },
            ],
        },

        {
            title: "Let Us Help You",
            links: [
                {
                    title: "COVID-19 and Amazon",
                    href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid",
                },
                {
                    title: "Your Account",
                    href: "",
                },
                {
                    title: "Returns centre",
                    href: "",
                },
                {
                    title: "100% Purchase Protection",
                    href: "https://www.amazon.in/gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc",
                },
                {
                    title: "Amazon App Download",
                    href: "https://www.amazon.in/gp/browse.html?node=6967393031&ref_=footer_mobapp",
                },
                {
                    title: "Help",
                    href: "https://www.amazon.in/gp/help/customer/display.html",
                },
            ],
        },
        // {
        //     title: "Payment Methods",
        //     links: [
        //         "Amazon Payment Methods",
        //         "Amazon Platinum Mastercard",
        //         "Amazon Money Store",
        //         "Gift Cards",
        //         "Amazon Currency Convertor",
        //     ],
        // },
        // {
        //     title: "Support",
        //     links: [
        //         {
        //             title: "Track Pacakges or View Orders",
        //             href: "https://www.amazon.in/gp/help/customer/display.html",
        //         },
        //         {
        //             title: "Delivery Rates & Policies",
        //             href: "https://www.amazon.in/gp/help/customer/display.html",
        //         },
        //         {
        //             title: "Amazon Prime",
        //             href: "https://www.amazon.in/gp/help/customer/display.html",
        //         },
        //         {
        //             title: "Returns & Replacements",
        //             href: "https://www.amazon.in/gp/help/customer/display.html",
        //         },
        //         {
        //             title: "Recycling",
        //             href: "https://www.amazon.in/gp/help/customer/display.html",
        //         },
        //     ],
        // },
    ];
    return (
        <footer className="flex flex-col min-h-[12vh] h-full text-white">
            <button
                className="hover:bg-[#445262] bg-[#37475a] py-4 text-center text-xs"
                onClick={scrollToTop}
            >
                Back to top
            </button>
            <div className="bg-[#232f3e]  flex flex-col py-10 gap-10 ">
                <div className=" grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10 mx-auto">
                    {footerLinks.map((section) => {
                        return (
                            <div
                                key={section.title}
                                className="flex flex-col gap-2"
                            >
                                <span className="text-base">
                                    {section.title}
                                </span>
                                <ul
                                    key={section.title}
                                    className="text-base flex flex-col gap-1 font-light"
                                >
                                    {section.links.map((link) => (
                                        <li
                                            key={link.title}
                                            className="cursor-pointer link-hover pl-1 text-sm "
                                        >
                                            <Link
                                                href={link.href}
                                                target="_blank"
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <hr className="border-gray-500" />
                <div className="flex flex-col items-center justify-center">
                    <div className=" text-center">
                        <Link
                            href="/"
                            className="text-2xl font-semibold text-gray-900 dark:text-white"
                        >
                            <Image
                                src={amazonLogoWhite}
                                alt="amazon logo"
                                height={100}
                                width={100}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-black  flex flex-col py-10 gap-10  px-20">
                {/* <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1"> */}
                <div className=" grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-2 mx-auto">
                    {bottomFooterItems.map((section) => {
                        return (
                            <Link href={section.href} key={section.title}>
                                <div className="flex flex-col gap-2 my-5  cursor-pointer link-hover">
                                    <span className="text-base">
                                        {section.title}
                                    </span>
                                    <ul
                                        key={section.title}
                                        className="text-base flex flex-col gap-1 font-light"
                                    >
                                        {section.links.map((link) => (
                                            <li
                                                key={link}
                                                className=" pl-1 text-sm "
                                            >
                                                {link}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
