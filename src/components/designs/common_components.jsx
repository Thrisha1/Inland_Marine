"use client";
import Image from "next/image"
import { UisStar } from '@iconscout/react-unicons-solid'
import React from 'react'
import Link from 'next/link'

const Popup = ({data, starArray}) => {
    return(
        // I NEED TO CODE THE CROSS BUTTON TOO
        <div className="absolute top-0 left-0 z-3 bg-black bg-opacity-50 py-10 px-20 w-[100%] h-[5000px]">
            <div className="bg-white w-[100%] rounded-[15px] py-5 px-10">
                <Image src={data.img} width={"90%"} height={"100%"} className="w-[90%] h-[350px] flex m-auto rounded-[15px]"  alt="boat" />
                <div className="my-5">
                    <div className="flex justify-center my-5">
                        <h1 className='mt-3 md:mt-0 text-[#1E3888] sm:text-center poppins text-xl font-semibold'>{data.title}</h1>  
                    </div>
                    <div className="flex justify-center">
                        <div className={
                        data.type == "DELUXE" ? 'text-center px-5 py-2 bg-[#00FFF9] rounded-[20px]' 
                        : data.type == "LUXURY" ? "text-center px-5 py-2 bg-[#FFD600] rounded-[20px]" 
                        : data.type == "PREMIUM" ? "text-center px-5 py-2 bg-[#20FF79] rounded-[20px]" 
                        : "text-center px-5 py-2 bg-white rounded-[20px]"}>
                            <p className='text-center text-black font-semibold poppins text-sm'>{data.type}</p>
                        </div>
                    </div>
                    <div className="flex justify-center my-5">
                        <div className="px-3 py-2 bg-black rounded-[5px] flex">
                            {starArray && starArray.map((_, i) => <UisStar key={i} className="text-yellow-500 h-[20px]"/>)}
                        </div>
                    </div>
                    <div className="">
                        <div className="my-7">
                            <h3 className="poppins font-semibold text-lg">{data.tag}</h3>
                            <p className="poppins mt-5">{data.desc}</p>
                        </div>
                        <div className="my-7">
                            <h3 className="poppins font-semibold text-lg">Dimensions:</h3>
                            <ul>
                                <li>Length: {data.dimensions.length} meters</li>
                                <li>Width: {data.dimensions.width} meters</li>
                            </ul>
                        </div>
                        <div className="my-7">
                            <h3 className="poppins font-semibold text-lg">Designs:</h3>
                            <p className="poppins mt-5">{data.designs}</p>
                        </div>
                        <div className="my-7">
                            <h3 className="poppins font-semibold text-lg">Architecture:</h3>
                            <p className="poppins mt-5">{data.architecture}</p>
                        </div>
                        <div className="my-7">
                            <h3 className="poppins font-semibold text-lg">Engineering Excellence:</h3>
                            <p className="poppins mt-5">{data.engex}</p>
                        </div>
                        <div className="my-10 grid grid-cols-4 gap-5">
                            {data.imgs.map(img => <Image src={img} className="mb-3 w-[100%] h-[200px]" width="100%" height="150" />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const Card = ({data}) => {
    const starArray = new Array(data.stars).fill(null) || null;
    return(
        <Link href="/designs/123">
            <div className='mt-20 bg-white shadow-lg px-5 py-5 rounded-[20px]'>
                <div className='md:flex grid grid-cols-1'>
                    <div className="">
                        <Image src={data.img} className="md:min-w-[450px] min-w-[100%] rounded-[15px]" alt="boat" width="450" height="350" />
                        {data.type && <div className='flex relative bottom-[45px] left-[20px]'>
                            <div className={
                            data.type == "DELUXE" ? 'px-5 py-2 bg-[#00FFF9] rounded-[20px]' 
                            : data.type == "LUXURY" ? "px-5 py-2 bg-[#FFD600] rounded-[20px]" 
                            : data.type == "PREMIUM" ? "px-5 py-2 bg-[#20FF79] rounded-[20px]" 
                            : "px-5 py-2 bg-white rounded-[20px]"}>
                                <p className='text-center text-black font-semibold poppins text-sm'>{data.type}</p>
                            </div>
                            <div className='flex ml-5 items-center'>
                                {starArray && starArray.map((_, i) => <UisStar key={i} className="text-white h-[20px]"/>)}
                            </div>
                        </div>}
                    </div>
                    <div className='md:px-10 px-5'>
                        <h1 className='mt-3 md:mt-0 text-[#1E3888] sm:text-center poppins text-xl font-semibold'>{data.title}</h1>
                        <p className='mt-10 font-semibold poppins '>{data.tag}</p>
                        <p className='mt-5 poppins'>{data.desc}</p>
                        <button onClick={() => setShowPop(true)} className='mt-16 bg-[#1E3888] text-white text-center px-4 py-2 rounded-[20px]'>VIEW DETAILS</button>
                    </div>
                </div>
            </div>
        </Link>
    )
}