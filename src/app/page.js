import Navbar from "@/components/app/Navbar"
import Carousel from "@/components/app/Carousel"
import FeaturedBoats from "@/components/app/FeaturedBoats"
import Interior from "../components/app/Interior"
import Aboutus from "@/components/app/Aboutus"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <FeaturedBoats />
      <Interior />
      <Aboutus />
    </div>
  )
}
