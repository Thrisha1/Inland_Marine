"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const PropertyImages = [
  {
    image_url: "/images/designs/featuredboats/boat1/boat11.png",
  },
  {
    image_url: "/images/designs/featuredboats/boat1/boat12.png",
  },
  {
    image_url: "/images/designs/featuredboats/boat1/boat13.png",
  },
];

const Carousel_slider = () => {
  return (
    <div className="">
      <h1>Slider</h1>
      <Carousel
        autoPlay={true} // Auto play the carousel
        interval={2000} // Animation duration in 1000 ms (1 second)
        showIndicators={true} // Show navigation indicators
        showThumbs={false} // Hide thumbnail images
        showStatus={false} // Hide status bar
        infiniteLoop={true} // Cycle navigation
        swipeable={true} // Enable swipe navigation
        dynamicHeight={false} // Adjust carousel height to content
      >
        {PropertyImages?.map((item) => (
          <div>
            <Image
              width={200}
              height={200}
              src={item.image_url}
              className="w-full max-w-full max-h-full m-auto"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousel_slider;
