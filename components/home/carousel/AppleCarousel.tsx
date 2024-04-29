import React from "react";
import CarouselOtherSlide from "./Carousel-other-slide";

import apple1 from "@/public/apple/apple_banner2.jpg";
import apple2 from "@/public/apple/apple_banner3.jpg";
import apple3 from "@/public/apple/apple_banner4.jpg";
import apple4 from "@/public/apple/apple_banner5.jpg";

const AppleCards = () => {
    const AppleCarouselImage = [
        { src: apple1 },
        { src: apple2 },
        { src: apple3 },
        { src: apple4 },
    ];

    return (
        <>
            <div className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh]">
                <CarouselOtherSlide SlideImage={AppleCarouselImage} />
            </div>
        </>
    );
};

export default AppleCards;
