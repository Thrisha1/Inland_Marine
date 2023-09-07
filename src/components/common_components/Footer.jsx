// "use client";

import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import Logo2 from "../../../public/images/logo2.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="bg-[#1E3888] px-20 pt-10 pb-5">
        <div className="flex justify-evenly items-center">
          <h4 className="hidden md:block text-white poppins font-semibold">
            More info
          </h4>
          <h4 className="hidden md:block text-white poppins font-semibold">
            Link 1
          </h4>
          <h4 className="hidden md:block text-white poppins font-semibold">
            Link 2
          </h4>
          <Image src={Logo2} height="250" width="300" />
          <h4 className="hidden md:block text-white poppins font-semibold">
            More info
          </h4>
          <h4 className="hidden md:block text-white poppins font-semibold">
            Link 1
          </h4>
          <h4 className="hidden md:block text-white poppins font-semibold">
            Link 2
          </h4>
          <div className="grid grid-cols-3 md:hidden">
            <h4 className="hidden md:block text-white poppins font-semibold">
              More info
            </h4>
            <h4 className="hidden md:block text-white poppins font-semibold">
              Link 1
            </h4>
            <h4 className="hidden md:block text-white poppins font-semibold">
              Link 2
            </h4>
            <h4 className="hidden md:block text-white poppins font-semibold">
              More info
            </h4>
            <h4 className="hidden md:block text-white poppins font-semibold">
              Link 1
            </h4>
            <h4 className="hidden md:block text-white poppins font-semibold">
              Link 2
            </h4>
          </div>
        </div>
        <h3 className="font-bold poppins text-center text-white text-2xl">
          INLAND MARINE
        </h3>
        <p className="text-center text-white mt-10">
          © Copyright 2023 Inland Marine - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer
