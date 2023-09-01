import React from 'react'
import Image from 'next/image'
import image from '../../../public/images/app/featuredboats/boat1.png'

const FeaturedBoats = () => {
  return (
    <div className='mt-20'>
        <h1 className='text-3xl !font-[900] poppins text-center text-[#1E3888]'>FEATURED BOATS</h1>
        <div className='my-20'>
            <p className='text-[#0B0B0B] poppins px-20 text-center'>Each Kettuvallam is a masterpiece that echoes the artistry of Kerala's boat building legacy. Admire the intricate wooden work that adorns the exteriors, a tribute to the skilled hands that meticulously craft every detail. Step inside, and you'll find a world where tradition meets innovation, where hand-carved accents harmonize with contemporary amenities.</p>
        </div>
        <div className='px-20'>
            <div className='grid grid-cols-1'>
                <div className='mt-20 bg-white px-5 py-5 rounded-[20px]'>
                    <div className='flex'>
                        <Image src={image} alt="boat" width="350" height="350" />
                        <div className='px-20'>
                            <h1 className='text-[#1E3888] poppins text-xl font-semibold'>JCT HOUSEBOAT, ALLEPPEY</h1>
                            <p className='mt-10 font-semibold poppins '>Introducing the JCT Houseboat, Alleppey: Where Elegance Meets the Backwaters</p>
                            <p className='mt-5 poppins'>Step aboard the JCT Houseboat, a masterpiece meticulously crafted by Inland Marine, and allow yourself to be transported into a world of unparalleled luxury and tradition. Named after the gentle ripples of the waterways it graces, the JCT Houseboat is a true embodiment of our commitment to preserving Kerala's maritime heritage while offering an extraordinary modern experience.</p>
                            <button className='bg-[#1E3888] text-white text-center px-4 py-2 rounded-[20px]'>VIEW DETAILS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedBoats