import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const PropertySlider = ({ PropertyImages }) => {
  return (
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
            src={item}
            className="w-full max-w-full max-h-full m-auto"
          />
        </div>
      ))}
    </Carousel>
  )
}

export default PropertySlider;