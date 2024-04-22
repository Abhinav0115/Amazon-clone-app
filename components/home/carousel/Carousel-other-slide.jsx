"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";
import {
    HiOutlineArrowCircleRight,
    HiOutlineArrowCircleLeft,
} from "react-icons/hi";

const CarouselOtherSlide = ({ SlideImage }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Carousel
            transition={{
                duration: 1.5,
                timingFunction: "ease-in-out",
                type: "slide",
            }}
            className="rounded-sm overflow-hidden w-full h-full relative"
            autoplay={isHovering ? false : true}
            autoplayDelay={isHovering ? 3000 : 6000}
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            loop={true}
            // slideRef={slideRef}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i
                                    ? "w-8 bg-amazon-secondary"
                                    : "w-4 bg-white/50"
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
            prevArrow={({ handlePrev }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4 text-5xl text-gray-300 hover:bg-gray-800 hover:bg-opacity-30"
                >
                    <HiOutlineArrowCircleLeft />
                </IconButton>
            )}
            nextArrow={({ handleNext }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-4 -translate-y-2/4 text-5xl text-gray-300 hover:bg-gray-800 hover:bg-opacity-30"
                >
                    <HiOutlineArrowCircleRight />
                </IconButton>
            )}
        >
            {SlideImage.map((image, i) => (
                <Image
                    key={i}
                    src={image?.src}
                    alt={"banner"}
                    className="h-full w-full object-fill"
                    width={1920}
                    height={1080}
                    // style={{
                    //     maskSize: "99%",
                    //     maskImage:
                    //         "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                    //     // "radial-gradient(circle, black 92%, rgba(0, 0, 0, 0.5) 90%)",
                    // }}
                />
            ))}
        </Carousel>
    );
};

export default CarouselOtherSlide;
