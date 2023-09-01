import React from 'react'
import boat1 from '../../../public/images/designs/featuredboats/boat1.png'
import boat2 from '../../../public/images/designs/featuredboats/boat1.png'
import boat3 from '../../../public/images/designs/featuredboats/boat3.png'
import { Card } from './common_components'


const boats = [
    {
        title: "JCT HOUSEBOAT, ALLEPPEY",
        stars: 3,
        type: "DELUXE",
        tag: "Introducing the JCT Houseboat, Alleppey: Where Elegance Meets the Backwaters",
        desc: "Step aboard the JCT Houseboat, a masterpiece meticulously crafted by Inland Marine, and allow yourself to be transported into a world of unparalleled luxury and tradition. Named after the gentle ripples of the waterways it graces, the JCT Houseboat is a true embodiment of our commitment to preserving Kerala's maritime heritage while offering an extraordinary modern experience.",
        img: boat1
    },
    {
        title: "SPICE COAST CRUISES - ALLEPPEY",
        stars: 4,
        type: "LUXURY",
        tag: "Embark on a an Exquisite Journey with Spice Cruises - Alleppey",
        desc: "Crafted with unwavering dedication by Inland Marine, this extraordinary vessel is an ode to the harmonious blend of tradition and luxury. As you step aboard the Spice Coast Cruises, you'll be enveloped by an atmosphere of timeless beauty. The intricate woodwork adorning the exterior pays homage to Kerala's rich maritime heritage, while the modern amenities and bespoke interiors offer an indulgent experience.",
        img: boat2
    },
    {
        title: "MARARI HOUSEBOAT, MARARIKULAM",
        stars: 4,
        type: "PREMIUM",
        tag: "Marari Houseboat, Mararikulam: Where Tranquility Meets Luxury",
        desc: "Nestled in the heart of Mararikulam, this vessel beckons you to discover the perfect fusion of serene landscapes and opulent living. Step onto the Marari Houseboat and feel the gentle embrace of the waterways. The exterior boasts intricate designs inspired by Kerala's rich heritage, a testament to the artistry that runs in the region's veins. Inside, a world of sophistication unfolds.",
        img: boat3
    }
]


const FeaturedBoats = () => {
  return (
    <div className='mt-20'>
        <h1 className='text-3xl !font-[900] poppins text-center text-[#1E3888]'>FEATURED BOATS</h1>
        <div className='my-20'>
            <p className='text-[#0B0B0B] poppins md:px-20 px-5 text-center'>Each Kettuvallam is a masterpiece that echoes the artistry of Kerala's boat building legacy. Admire the intricate wooden work that adorns the exteriors, a tribute to the skilled hands that meticulously craft every detail. Step inside, and you'll find a world where tradition meets innovation, where hand-carved accents harmonize with contemporary amenities.</p>
        </div>
        <div className='md:px-20 px-5'>
            <div className='grid grid-cols-1'>
                {boats.map(boat => <Card data = {boat} />)}
            </div>
        </div>
    </div>
  )
}

export default FeaturedBoats