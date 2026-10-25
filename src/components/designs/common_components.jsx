"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export const Card = ({ data }) => {
  const card = (
    <div className="mt-20 bg-white shadow-lg px-5 py-5 rounded-[20px]">
      <div className="lg:flex grid grid-cols-1 justify-center">
        <div className="flex w-full justify-center">
          <div className="flex flex-col">
            <Image
              src={data.image}
              className="md:min-w-[450px] h-[300px] min-w-[100%] rounded-[15px]"
              alt={data.title || "boat"}
              width="450"
              height="350"
            />
          </div>
        </div>
        <div className="md:px-10 px-5">
          {/* <h1 className="mt-3 md:mt-0 text-[#1E3888] sm:text-center poppins text-xl font-semibold">
            {data.title}
          </h1> */}
          <p className="mt-10 font-semibold poppins ">{data.tag}</p>
          <p className="mt-5 poppins">{data.desc.substring(0,350)}...</p>
          <button
            className="mt-16 bg-[#1E3888] text-white text-center px-4 py-2 rounded-[20px]"
          >
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );

  // Interior designs reuse this card but have no detail page of their own, so
  // only the entries that resolve to a route get wrapped in a link.
  const href = data.slug || data.id;
  return href ? <Link href={`/designs/${href}`}>{card}</Link> : card;
};
