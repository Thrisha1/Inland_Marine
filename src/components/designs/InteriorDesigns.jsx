import React from 'react'
import interior1 from '../../../public/images/designs/interior/interior1.png'
import interior2 from '../../../public/images/designs/interior/interior2.png'
import interior3 from '../../../public/images/designs/interior/interior3.png'
import { Card } from './common_components'

const interiors = [
    {
        title: "LOUNGE DECK",
        tag: "Waterside Elegance",
        desc: "Immerse yourself in the lap of luxury on our lounge deck, where the beauty of the backwaters meets unmatched comfort. Unwind in style, whether you're enjoying a book in the shade or basking in the warm sun. The lounge deck is a testament to our commitment to providing you with a space that transcends the ordinary, where you can create memories that linger with each ripple on the water.",
        img: interior1
    },
    {
        title: "BEDROOM SUITE",
        tag: "Serene Retreat",
        desc: "Escape to a realm of tranquility in our elegantly appointed bedroom suites. The gentle lull of the water outside your window sets the stage for a peaceful slumber. Each suite is a harmonious blend of luxurious comfort and traditional aesthetics, offering you a haven to relax and rejuvenate. Whether you're gazing at the stars through the skylight or indulging in the plush bedding, every moment here is a step closer to serenity.",
        img: interior2
    },
    {
        title: "KITCHEN",
        tag: "Culinary Haven",
        desc: "Discover a culinary sanctuary where the art of cooking merges seamlessly with the beauty of the backwaters. Our thoughtfully designed kitchen on board ensures that every meal prepared is a testament to both tradition and innovation. With state-of-the-art equipment and a team of skilled chefs, culinary delights come to life, inviting you to savor the flavors of Kerala's bounty in every bite.",
        img: interior3
    }
]


const InteriorDesigns = () => {
  return (
    <div className='mt-20'>
        <h1 className='text-3xl !font-[900] poppins text-center text-[#1E3888]'>INTERIOR DESIGNS</h1>
        <div className='my-20'>
            <p className='text-[#0B0B0B] poppins px-20 text-center'>From the culinary haven of our kitchens, where the aroma of Kerala's flavors fills the air, to the serene retreats of our bedroom suites that cradle you in tranquility, every detail has been thoughtfully designed to transport you to a realm of unparalleled luxury. Our lounge decks are poised as waterside sanctuaries, where you can unwind amidst the gentle ripples and embrace the allure of the backwaters</p>
        </div>
        <div className='px-20'>
            <div className='grid grid-cols-1'>
                {interiors.map(interior => <Card data = {interior} />)}
            </div>
        </div>
    </div>
  )
}

export default InteriorDesigns