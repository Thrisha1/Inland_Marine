import React from "react"
import FeaturedBoats from "@/components/app/FeaturedBoats"
import Interior from "../components/app/Interior"
import CarouselSlider from "../components/app/Carousel_slider"

export default function Home() {
  return (
    <div>
      <CarouselSlider />
      <FeaturedBoats />
      <Interior />
    </div>
  )
}
