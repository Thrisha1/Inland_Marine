import React from "react"
import Carousel from "@/components/app/Carousel_slider"
import FeaturedBoats from "@/components/app/FeaturedBoats"
import Interior from "../components/app/Interior"
import CarouselSlider from "../components/app/Carousel_slider"

export default function Home() {
  // const imgs = [img, img, img]
  return (
    <div>
      <CarouselSlider />
      <FeaturedBoats />
      <Interior />
    </div>
  )
}
