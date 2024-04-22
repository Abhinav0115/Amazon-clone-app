import React from "react";
import CarouselOtherSlide from "./Carousel-other-slide";

import prime1 from "@/public/prime/Prime1.png";
import prime2 from "@/public/prime/prime2.jpg";
import prime3 from "@/public/prime/prime3.jpeg";
import prime4 from "@/public/prime/farzi.jpg";

const PrimeVideos = () => {
    const PrimeCarouselImage = [
        { src: prime1 },
        { src: prime2 },
        { src: prime3 },
        { src: prime4 },
    ];

    return (
        <>
            <div className="w-full h-[35vh] sm:h-[50vh] md:h-[60vh]">
                <CarouselOtherSlide SlideImage={PrimeCarouselImage} />
            </div>
        </>
    );
};

export default PrimeVideos;
