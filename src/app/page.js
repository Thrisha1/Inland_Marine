import React from "react"
import Carousel from "@/components/app/Carousel_slider"
import FeaturedBoats from "@/components/app/FeaturedBoats"
import Interior from "../components/app/Interior"

export default function Home() {
  return (
    <div>
      <Carousel />
      <FeaturedBoats />
      <Interior />
    </div>
  )
}
