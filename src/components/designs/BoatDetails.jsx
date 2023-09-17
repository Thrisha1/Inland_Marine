"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
import boat1 from '../../../public/images/app/featuredboats/boat1.png'
import Image from 'next/image'
import { useStateContext } from '@/context/StateContext';

const BoatDetails = () => {
    const [boat, setBoat] = React.useState()
    const id = usePathname()
    const {boats} = useStateContext()
    React.useEffect(() => {
        const filteredBoat = boats.find(boat => boat._id == id)
        setBoat(filteredBoat)
    }, [])
  return (
    <div className='md:px-16 px-5 md:py-20 py-16'>
        {boat && <div className="bg-white w-[100%] rounded-[15px] py-5 md:px-10 px-5">
            <Image src={boat.imgUrl} width={"90%"} height={"100%"} className="w-[90%] h-[350px] flex m-auto rounded-[15px]"  alt="boat" />
            <div className="my-5">
                <div className="flex justify-center my-5">
                    <h1 className='mt-3 md:mt-0 text-[#1E3888] sm:text-center poppins text-xl font-semibold'>{boat.title}</h1>  
                </div>
                <div className="flex justify-center">
                    <div className={
                    boat.type == "DELUXE" ? 'text-center px-5 py-2 bg-[#00FFF9] rounded-[20px]' 
                    : boat.type == "LUXURY" ? "text-center px-5 py-2 bg-[#FFD600] rounded-[20px]" 
                    : boat.type == "PREMIUM" ? "text-center px-5 py-2 bg-[#20FF79] rounded-[20px]" 
                    : "text-center px-5 py-2 bg-white rounded-[20px]"}>
                        <p className='text-center text-black font-semibold poppins text-sm'>{boat.type}</p>
                    </div>
                </div>
                <div className="flex justify-center my-5">
                    <div className="px-3 py-2 bg-black rounded-[5px] flex">
                        {starArray && starArray.map((_, i) => <UisStar key={i} className="text-yellow-500 h-[20px]"/>)}
                    </div>
                </div>
                <div className="">
                    <div className="my-7">
                        <h3 className="poppins font-semibold text-lg">{boat.tag}</h3>
                        <p className="poppins mt-5">{boat.desc}</p>
                    </div>
                    <div className="my-7">
                        <h3 className="poppins font-semibold text-lg">Dimensions:</h3>
                        <ul>
                            <li>Length: {boat.dimensions.length} meters</li>
                            <li>Width: {boat.dimensions.width} meters</li>
                        </ul>
                    </div>
                    <div className="my-7">
                        <h3 className="poppins font-semibold text-lg">Designs:</h3>
                        <p className="poppins mt-5">{boat.designs}</p>
                    </div>
                    <div className="my-7">
                        <h3 className="poppins font-semibold text-lg">Architecture:</h3>
                        <p className="poppins mt-5">{boat.architecture}</p>
                    </div>
                    <div className="my-7">
                        <h3 className="poppins font-semibold text-lg">Engineering Excellence:</h3>
                        <p className="poppins mt-5">{boat.engex}</p>
                    </div>
                    <div className="my-10 grid grid-cols-4 gap-5">
                        {boat.imgs.map(img => <Image src={img} className="mb-3 w-[100%] h-[200px]" width="100%" height="150" />)}
                    </div>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default BoatDetails