"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";
import {
    HiOutlineArrowCircleRight,
    HiOutlineArrowCircleLeft,
} from "react-icons/hi";

const CarouselSlide = ({ SlideImage }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Carousel
            transition={{
                duration: 1.5,
                timingFunction: "ease-in-out",
                type: "slide",
            }}
            className="rounded-sm overflow-hidden w-full h-full relative "
            autoplay={isHovering ? false : true}
            autoplayDelay={isHovering ? 3000 : 6000}
            // onMouseOver={() => setIsHovering(true)}
            // onMouseLeave={() => setIsHovering(false)}
            loop={true}
            // slideRef={slideRef}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute flex bottom-1  md:top-[50%] left-2/4 z-50 -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i
                                    ? "w-8 bg-amazon-secondary"
                                    : "w-4 bg-gray-400/50"
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
                    className="!absolute hidden md:block top-1/3 left-4 -translate-y-2/4 text-5xl text-white hover:bg-gray-800 hover:bg-opacity-30"
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
                    className="!absolute hidden md:block top-1/3 !right-4 -translate-y-2/4 text-white text-5xl hover:bg-gray-800 hover:bg-opacity-30"
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
                    height={580}
                    style={{
                        maskImage:
                            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                    }}
                />
            ))}
        </Carousel>
    );
};

export default CarouselSlide;
