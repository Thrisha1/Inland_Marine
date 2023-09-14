import React from 'react'
import boat1 from '../../../public/images/app/featuredboats/boat1.png'
import boat2 from '../../../public/images/app/featuredboats/boat1.png'
import boat3 from '../../../public/images/app/featuredboats/boat3.png'
import boat11 from '../../../public/images/designs/featuredboats/boat1/boat11.png'
import boat12 from '../../../public/images/designs/featuredboats/boat1/boat12.png'
import boat13 from '../../../public/images/designs/featuredboats/boat1/boat13.png'
import { Card } from './common_components'
import { Headline ,Subline} from '../common_components/common_components.jsx'


const boats = [
    {
        title: "JCT HOUSEBOAT, ALLEPPEY",
        stars: 3,
        type: "DELUXE",
        tag: "Introducing the JCT Houseboat, Alleppey: Where Elegance Meets the Backwaters",
        desc: "Step aboard the JCT Houseboat, a masterpiece meticulously crafted by Inland Marine, and allow yourself to be transported into a world of unparalleled luxury and tradition. Named after the gentle ripples of the waterways it graces, the JCT Houseboat is a true embodiment of our commitment to preserving Kerala's maritime heritage while offering an extraordinary modern experience.",
        architecture: "The architecture seamlessly marries tradition with innovation. The spacious lounge deck boasts a unique blend of open-air relaxation and sheltered comfort. Inside, the interiors exude an air of sophistication, with polished wood finishes, large windows that frame panoramic views, and an ingenious layout that maximizes space and functionality.",
        engex: "Built with unwavering precision, the 'JCT Houseboat, Alleppey' features state-of-the-art engineering that ensures smooth navigation and unparalleled stability on the water. The hull's design optimizes hydrodynamics, guaranteeing an effortless and serene voyage.",
        designs: "The 'JCT Houseboat, Alleppey' is a visual symphony, characterized by its sleek lines and intricate wooden embellishments. From the ornate carvings that adorn the exterior to the harmonious color palette inspired by the surrounding nature, this houseboat is a true embodiment of artistry afloat.",
        dimensions: {
            length: 35,
            width: 8
        },
        img: boat1,
        imgs: [boat11, boat12, boat13, boat11, boat12, boat13, boat11, boat12]
    },
    {
        title: "SPICE COAST CRUISES - ALLEPPEY",
        stars: 4,
        type: "LUXURY",
        tag: "Embark on a an Exquisite Journey with Spice Cruises - Alleppey",
        desc: "Crafted with unwavering dedication by Inland Marine, this extraordinary vessel is an ode to the harmonious blend of tradition and luxury. As you step aboard the Spice Coast Cruises, you'll be enveloped by an atmosphere of timeless beauty. The intricate woodwork adorning the exterior pays homage to Kerala's rich maritime heritage, while the modern amenities and bespoke interiors offer an indulgent experience.",
        architecture: "The architecture seamlessly marries tradition with innovation. The spacious lounge deck boasts a unique blend of open-air relaxation and sheltered comfort. Inside, the interiors exude an air of sophistication, with polished wood finishes, large windows that frame panoramic views, and an ingenious layout that maximizes space and functionality.",
        engex: "Built with unwavering precision, the 'JCT Houseboat, Alleppey' features state-of-the-art engineering that ensures smooth navigation and unparalleled stability on the water. The hull's design optimizes hydrodynamics, guaranteeing an effortless and serene voyage.",
        designs: "The 'JCT Houseboat, Alleppey' is a visual symphony, characterized by its sleek lines and intricate wooden embellishments. From the ornate carvings that adorn the exterior to the harmonious color palette inspired by the surrounding nature, this houseboat is a true embodiment of artistry afloat.",
        dimensions: {
            length: 35,
            width: 8
        },
        img: boat2,
        imgs: [boat11, boat12, boat13, boat11, boat12, boat13, boat11, boat12]
    },
    {
        title: "MARARI HOUSEBOAT, MARARIKULAM",
        stars: 4,
        type: "PREMIUM",
        tag: "Marari Houseboat, Mararikulam: Where Tranquility Meets Luxury",
        desc: "Nestled in the heart of Mararikulam, this vessel beckons you to discover the perfect fusion of serene landscapes and opulent living. Step onto the Marari Houseboat and feel the gentle embrace of the waterways. The exterior boasts intricate designs inspired by Kerala's rich heritage, a testament to the artistry that runs in the region's veins. Inside, a world of sophistication unfolds.",
        architecture: "The architecture seamlessly marries tradition with innovation. The spacious lounge deck boasts a unique blend of open-air relaxation and sheltered comfort. Inside, the interiors exude an air of sophistication, with polished wood finishes, large windows that frame panoramic views, and an ingenious layout that maximizes space and functionality.",
        engex: "Built with unwavering precision, the 'JCT Houseboat, Alleppey' features state-of-the-art engineering that ensures smooth navigation and unparalleled stability on the water. The hull's design optimizes hydrodynamics, guaranteeing an effortless and serene voyage.",
        designs: "The 'JCT Houseboat, Alleppey' is a visual symphony, characterized by its sleek lines and intricate wooden embellishments. From the ornate carvings that adorn the exterior to the harmonious color palette inspired by the surrounding nature, this houseboat is a true embodiment of artistry afloat.",
        dimensions: {
            length: 35,
            width: 8
        },
        img: boat3,
        imgs: [boat11, boat12, boat13, boat11, boat12, boat13, boat11, boat12]
    }
]


const FeaturedBoats = () => {
  return (
    <div className='mt-20'>
        <Headline name="FEATURED BOATS" />
        <div className='my-20'>
            <Subline para="Each Kettuvallam is a masterpiece that echoes the artistry of Kerala's boat building legacy. Admire the intricate wooden work that adorns the exteriors, a tribute to the skilled hands that meticulously craft every detail. Step inside, and you'll find a world where tradition meets innovation, where hand-carved accents harmonize with contemporary amenities." />
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