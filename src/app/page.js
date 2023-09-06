import Carousel from "@/components/app/Carousel"
import FeaturedBoats from "@/components/app/FeaturedBoats"
import Interior from "../components/app/Interior"
// import PropertySlider from "@/components/app/Carousel"

export default function Home() {
  return (
    <div>
      {/* <PropertySlider /> */}
      <FeaturedBoats />
      <Interior />
    </div>
  )
}
