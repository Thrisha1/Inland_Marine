import React from 'react'
import { UisStar } from '@iconscout/react-unicons-solid'
import Image from 'next/image'
import boat1 from '../../../public/images/app/featuredboats/boat1.png'
import boat2 from '../../../public/images/app/featuredboats/boat2.png'
import boat3 from '../../../public/images/app/featuredboats/boat3.png'

const boats =[
    {
        img: boat1,
        stars: 4,
        title: "DELUXE HOUSEBOATS",
        bookings: 30
    },
    {
        img: boat2,
        stars: 3,
        title: "PREMIUM HOUSEBOATS",
        bookings: 8
    },
    {
        img: boat3,
        stars: 3,
        title: "DELUXE HOUSEBOATS",
        bookings: 10
    },
]

const Card = ({boat}) => {
    const starArray = new Array(boat.stars).fill(null);
    return(
        <div className='mx-auto rounded-[15px] shadow-md md:mb-0 mb-10'>
            <Image src={boat.img} height="200" width="350" className='h-[200px] w-[350px] rounded-[15px]' alt="" />
            <div className='flex relative bottom-[35px] left-[10px]'>
                <div className='px-4 py-1 bg-white rounded-[15px]'>
                    <p className='text-center text-black font-semibold poppins text-sm'>Over {boat.bookings} bookings</p>
                </div>
                <div className='flex ml-2 items-center'>
                    {starArray.map((_, i) => <UisStar key={i} className="text-white h-[20px]"/>)}
                    {/* <UisStar className="text-white h-[20px]"/>
                    <UisStar className="text-white h-[20px]"/>
                    <UisStar className="text-white h-[20px]"/>
                    <UisStar className="text-white h-[20px]"/> */}
                </div>
            </div>
            <div className='pb-5'>
                <p className='text-center font-semibold text-lg text-[#1E3888] my-auto'>{boat.title}</p>
            </div>
        </div>
    )
}

const FeaturedBoats = () => {
  return (
    <div>
        <h1 className='text-3xl !font-[900] poppins text-center text-[#1E3888]'>FEATURED BOATS</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
            {boats.map(boat => <Card boat={boat} />)}
        </div>
    </div>
  )
}

export default FeaturedBoats