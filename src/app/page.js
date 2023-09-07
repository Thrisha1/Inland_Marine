import React from "react"
import Carousel from "@/components/app/Carousel_slider"
import FeaturedBoats from "@/components/app/FeaturedBoats"
import Interior from "../components/app/Interior"
// import PropertySlider from "@/components/app/Carousel"
// import img from '../../public/images/app/featuredboats/boat1.png'

export default function Home() {
  // const imgs = [img, img, img]
  return (
    <div>
      {/* <PropertySlider PropertyImages={imgs} /> */}
      <FeaturedBoats />
      <Interior />
    </div>
  )
}
