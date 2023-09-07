"use client";

import React,{useState,useEffect} from "react";
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

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === PropertyImages?.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [PropertyImages]);

  return (
    <div className="">
      <h1>Slider</h1>
      <Carousel
       selectedItem={activeIndex}
       autoPlay={false} // Disable the internal autoplay
       infiniteLoop={true}
       interval={3000}
       showIndicators={true}
       showThumbs={false}
       showStatus={false}
       swipeable={true}
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
