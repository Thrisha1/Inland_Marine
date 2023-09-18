import React from "react";
import { Headline } from "./common_components";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div id="about" className="my-20 md:px-16 px-10">
      <div className="py-5">
        <Headline text={"ABOUT US"} />
        <div className="my-10">
          <p className="text-center poppins text-md text-black">
            At Inland Marine, our story is etched by the waters that have shaped
            our journey—a tale woven through the intricate art of maritime
            craftsmanship. Established with a reverence for tradition and an
            unwavering commitment to excellence, we stand as custodians of the
            rich legacy that graces Kerala's waterways. Steeped in the spirit of
            the backwaters, our journey began as a humble tribute to the age-old
            techniques of boat building. With every plank, every joint, and
            every contour, we embarked on a mission to revive the magnificence
            of Kettuvallams—traditional houseboats that carry within them the
            soul of our culture. Guided by the hands of seasoned artisans, our
            creations echo the whispers of ancient boatyards. Our commitment
            goes beyond the surface; it delves deep into the heart of every
            vessel we craft. Each Inland Marine Kettuvallam is a symphony, an
            embodiment of the timeless connection between craftsmanship and the
            gentle rhythms of water. As we breathe life into the timber and
            shape dreams upon the waves, we invite you to join us on a voyage
            through tradition and innovation. Welcome to Inland Marine, where
            the tides of tradition and the winds of innovation converge to
            create a fleet of vessels that encapsulate the heart of Kerala's
            waterborne narrative. Together, let us navigate the currents of
            authenticity and embark on a journey that resonates with the past,
            while sailing confidently into the future."
          </p>
        </div>
        <div className="my-10 flex justify-center">
          <Link  href="/contact" className="bg-[#1E3888] text-white px-7 py-3 poppins font-bold rounded-[25px]">
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
