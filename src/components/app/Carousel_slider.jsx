"use client";

import React,{useState,useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const PropertyImages = [
  {
    image_url: "/images/app/featuredboats/boat1.png",
  },
  {
    image_url: "/images/app/featuredboats/boat2.png",
  },
  {
    image_url: "/images/app/featuredboats/boat3.png",
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
    <div className="md:px-20 px-5 py-5">
      <div className="flex justify-center my-10">
        <h1 className="text-[#1E3888] text-center text-3xl md:text-4xl poppins font-bold">Building Dreams on Water: Traditional Houseboats Redefined</h1>
      </div>
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
       className="rounded-[40px]"
      >
        {PropertyImages?.map((item) => (
          <div>
            <Image
              width={200}
              height={200}
              src={item.image_url}
              className="w-fit max-w-full h-[350px] md:h-[500px] m-auto rounded-[40px]"
            />
          </div>
        ))}
      </Carousel>
      <div className="flex flex-col justify-center relative bottom-[95px] md:bottom-[85px] z-10">
        <h3 className="text-center text-white poppins font-bold mb-5 text-lg sm:text-xl md:text-2xl">Embark on our Jounrey with Our Traditional Creations</h3>
        <button className="bg-[#1E3888] flex m-auto text-white rounded-[30px] px-10 py-2 md:py-3 poppins border-4 border-white font-bold">EXPLORE</button>
      </div>
    </div>
  );
};

export default Carousel_slider;
