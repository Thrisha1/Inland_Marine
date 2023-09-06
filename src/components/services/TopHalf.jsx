import React from 'react'
import { Headline } from '../common_components'
import { Subline } from '../common_components'
import boat1 from '../../../public/images/app/featuredboats/boat1.png'
import Image from 'next/image'

const Card = () => {
    return(
        <div className='bg-white shadow-lg px-5 py-5 rounded-[15px]'>
            <Image src={boat1} width="250" heigh="250" className='w-[100%]' />
            <div className='mt-10'>
                <h2 className='text-center text-[#1E3888] poppins font-bold text-lg'>Houseboat Crafting</h2>
                <p className='text-[#1E3888] poppins text-center mt-12'>Witness your vision come to life as we meticulously construct entire houseboats that marry tradition with innovation. From the graceful hull to the intricate woodwork, every detail speaks of craftsmanship and dedication.</p>
                <div className='px-5 w-[100%]'>
                    <button className='w-[100%] bg-[#1E3888] text-center poppins font-bold text-white px-5 py-4 rounded-[25px] my-10'>GO TO DESIGNS</button>
                </div>
            </div>
        </div>
    )
}

const TopHalf = () => {
  return (
    <div className='mt-20'>
        <Headline name="SERVICES" />
        <div className='my-20'>
            <h3 className='font-bold poppins text-center'>Crafting Dreams Afloat</h3>
            <Subline para="At inland we specialize in turning your waterborne dreams into reality through two distinct offerings:" />
        </div>
        <div className='my-20'>
            <div className='grid md:grid-cols-2 grid-cols-1 md:px-40 px-5 gap-10'>
                <Card />
                <Card />
            </div>
        </div>
    </div>
  )
}

export default TopHalf