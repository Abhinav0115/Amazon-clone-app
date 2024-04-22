import React from "react";
import CarouselSlide from "./carouselSlide";

const HomeCarousels = () => {
    const HeroCarouselImage = [
        {
            src: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/BAU/Hero/D91435399_WLA-BAU-Unrec-Hero_DesktopTallHero_1500x600-bau._CB582195367_.jpg",
        },
        // {
        //     src: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/revised/final/Makeup-PC_3000_1500._CB560068220_.jpg",
        // },
        {
            src: "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/apr24atf/unrec/nobank/WA_ETH_2x._CB560621530_.jpg",
        },
        {
            src: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/ATFGW/GW_Storage-box_3000x1200_PC._CB561623684_.jpg",
        },
        {
            src: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/Mar18/QC/PC_GW_Hero_3000x1200_01._CB579486410_.jpg",
        },
        {
            src: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/3000X1200_New_Launch_March_hero1._CB580055456_.jpg",
        },
        {
            src: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/revised/final/Skincare-PC_3000_1200._CB560068220_.jpg",
        },
        {
            src: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
        },
    ];

    return (
        <>
            <div className="w-full">
                <CarouselSlide SlideImage={HeroCarouselImage} />
            </div>
        </>
    );
};

export default HomeCarousels;
