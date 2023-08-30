"use client";

import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [navbar, setNavbar] = React.useState(false);

    return (
        <nav className="w-full bg-[#F9F9F9] shadow">
            <div className="justify-between px-4 md:items-center md:flex md:pl-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                      <div className='flex justify-center items-center'>
                        <Image src="/logo.png" width="150" height="150" />
                        <a href="javascript:void(0)">
                            <h2 className="text-2xl font-bold text-[#1E3888] poppins">INLAND <br /> MARINE</h2>
                        </a>
                      </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`flex-1 justify-self-center md:block pb-3 mt-8 md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center justify-evenly space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <li className="text-[#1E3888] cursor-pointer poppins font-bold hover:text-white hover:bg-[#1E3888] rounded-[5px] text-center px-3 py-1">
                            <a href="javascript:void(0)">Home</a>
                        </li>
                        <li className="text-[#1E3888] cursor-pointer poppins font-bold hover:text-white hover:bg-[#1E3888] rounded-[5px] text-center px-3 py-1">
                            <a href="javascript:void(0)">About</a>
                        </li>
                        <li className="text-[#1E3888] cursor-pointer poppins font-bold hover:text-white hover:bg-[#1E3888] rounded-[5px] text-center px-3 py-1">
                            <a href="javascript:void(0)">Design</a>
                        </li>
                        <li className="text-[#1E3888] cursor-pointer poppins font-bold hover:text-white hover:bg-[#1E3888] rounded-[5px] text-center px-3 py-1">
                            <a href="javascript:void(0)">Services</a>
                        </li>
                        <li className="text-[#1E3888] cursor-pointer poppins font-bold hover:text-white hover:bg-[#1E3888] rounded-[5px] text-center px-3 py-1">
                            <a href="javascript:void(0)">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar