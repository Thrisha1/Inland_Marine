import React from 'react'
import { Headline ,Subline} from '../common_components/common_components.jsx'
import boat1 from '../../../public/images/app/featuredboats/boat1.png'
import boat2 from '../../../public/images/app/featuredboats/boat2.png'
import Image from 'next/image'

const Card = ({name, desc, img}) => {
    return(
        <div className='bg-white shadow-lg px-5 py-5 rounded-[15px]'>
            <Image src={img} width="250" heigh="250" className='w-[100%] h-[320px] rounded-[15px]' />
            <div className='mt-10'>
                <h2 className='text-center text-[#1E3888] poppins font-bold text-lg'>{name}</h2>
                <p className='text-[#1E3888] poppins text-center mt-12'>{desc}</p>
                <div className='px-5 w-[100%]'>
                    <button className='w-[100%] bg-[#1E3888] text-center poppins font-bold text-white px-5 py-4 rounded-[25px] my-10'>GO TO DESIGNS</button>
                </div>
            </div>
        </div>
    )
}

const TopHalf = () => {
    const Cards = [
        {
            name: "Houseboat Crafing",
            desc: "Witness your vision come to life as we meticulously construct entire houseboats that marry tradition with innovation. From the graceful hull to the intricate woodwork, every detail speaks of craftsmanship and dedication.",
            img: boat1
        },
        {
            name: "Interior Designs",
            desc: "Elevate your journey with our expertly curated interior designs that seamlessly blend elegance and comfort. From sunlit lounges to lavish suites, our designs reflect the essence of Kerala's heritage while embracing modern luxury.",
            img: boat2
        },
    ]
  return (
    <div className='mt-20'>
        <Headline name="SERVICES" />
        <div className='my-20'>
            <h3 className='font-bold poppins text-center'>Crafting Dreams Afloat</h3>
            <Subline para="At inland we specialize in turning your waterborne dreams into reality through two distinct offerings:" />
        </div>
        <div className='my-20'>
            <div className='grid lg:grid-cols-2 grid-cols-1 md:px-40 px-5 gap-10'>
                {Cards.map(card => <Card name={card.name} desc={card.desc} img={card.img} />)}
            </div>
        </div>
    </div>
  )
}

export default TopHalf