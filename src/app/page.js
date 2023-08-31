import Navbar from "@/components/app/Navbar"
import Carousel from "@/components/app/Carousel"
import FeaturedBoats from "@/components/app/FeaturedBoats"
import Interior from "../components/app/Interior"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <FeaturedBoats />
      <Interior />
    </div>
  )
}
