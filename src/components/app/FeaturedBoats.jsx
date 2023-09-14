"use client";

import React from 'react'
import { UisStar } from '@iconscout/react-unicons-solid'
import Image from 'next/image'
import boat1 from '../../../public/images/app/featuredboats/boat1.png'
import boat2 from '../../../public/images/app/featuredboats/boat2.png'
import boat3 from '../../../public/images/app/featuredboats/boat3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { Headline } from './common_components'
import { client } from '../../../sanity/lib/client';
import { useStateContext } from '@/context/StateContext';


// const boats =[
//     {
//         img: boat1,
//         stars: 4,
//         title: "DELUXE HOUSEBOATS",
//         bookings: 30
//     },
//     {
//         img: boat2,
//         stars: 3,
//         title: "PREMIUM HOUSEBOATS",
//         bookings: 8
//     },
//     {
//         img: boat3,
//         stars: 3,
//         title: "DELUXE HOUSEBOATS",
//         bookings: 10
//     },
// ]

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
                </div>
            </div>
            <div className='pb-5'>
                <p className='text-center font-semibold text-lg text-[#1E3888] my-auto'>{boat.title}</p>
            </div>
        </div>
    )
}

const FeaturedBoats = () => {
    const { boats, setBoats } = useStateContext()

    React.useEffect(() => {
        const query = `*[_type == "featuredBoats"] {
            _id,
            title,
            stars,
            type,
            tag,
            desc,
            architecture,
            engex,
            dimensions,
            img,
            imgs,
            bookings
        }`

        client
            .fetch(query)
            .then(data => {
                setBoats(data)
                console.log(data)
            })
            .catch(error => console.error(error))
    }, [])

  return (
    <div>
        <Headline text={"FEATURED BOATS"} />
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
            {boats.map(boat => <Card boat={boat} />)}
        </div>
        <div className='mt-16'>
            <h3 className='text-lg text-center text-[#170312CC] font-semibold flex justify-center'>VIEW ALL <FontAwesomeIcon className='w-[10px] ml-2' icon={faRightLong} /></h3>
            <p className='poppins text-[#0b0b0b] text-center mt-10 md:px-20 px-10'>
            Each Kettuvallam is a masterpiece that echoes the artistry of Kerala's boat building legacy. Admire the intricate wooden work that adorns the exteriors, a tribute to the skilled hands that meticulously craft every detail. Step inside, and you'll find a world where tradition meets innovation, where hand-carved accents harmonize with contemporary amenities.
            </p>
        </div>
    </div>
  )
}

export default FeaturedBoats