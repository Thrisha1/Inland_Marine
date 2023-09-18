"use client";

import React from 'react'
import Image from 'next/image'
import Logo2 from '../../public/images/logo2.png'
import Link from 'next/link'

export const Footer = () => {
    return(
        <div className=''>
            <div className='bg-[#1E3888] px-20 pt-10 pb-5'>
                <div className='flex justify-evenly items-center'>
                    {/* <Link href="/" className='hidden md:block text-white poppins font-semibold'>More info</Link> */}
                    <Link href="/" className='hidden md:block text-white poppins font-semibold'>HOME</Link>
                    <Link href="/designs" className='hidden md:block text-white poppins font-semibold'>DESIGNS</Link>
                    <Image src={Logo2} height="250" width="300" />
                    {/* <Link href="/" className='hidden md:block text-white poppins font-semibold'>More info</Link> */}
                    <Link href="/services" className='hidden md:block text-white poppins font-semibold'>SERVICES</Link>
                    <Link href="/contact" className='hidden md:block text-white poppins font-semibold'>CONTACT US</Link>
                    <div className="hidden">
                        <Link href="/" className='hidden md:block text-white poppins font-semibold'>More info</Link>
                        <Link href="/" className='hidden md:block text-white poppins font-semibold'>Link 1</Link>
                        <Link href="/" className='hidden md:block text-white poppins font-semibold'>Link 2</Link>
                        <Link href="/" className='hidden md:block text-white poppins font-semibold'>More info</Link>
                        <Link href="/" className='hidden md:block text-white poppins font-semibold'>Link 1</Link>
                        <Link href="/" className='hidden md:block text-white poppins font-semibold'>Link 2</Link>
                    </div>
                </div>
                <h3 className='font-bold poppins text-center text-white text-2xl'>INLAND MARINE</h3>
                <p className='text-center text-white mt-10'>© Copyright 2023 Inland Marine - All Rights Reserved</p>
            </div>
        </div>
    )
}