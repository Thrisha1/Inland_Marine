"use client";

import React from "react";
import { UisStar } from "@iconscout/react-unicons-solid";
import Image from "next/image";
import boat1 from "../../../public/images/app/featuredboats/boat1.png";
import boat2 from "../../../public/images/app/featuredboats/boat2.png";
import boat3 from "../../../public/images/app/featuredboats/boat3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { Headline } from "./common_components";
import { client } from "../../../sanity/lib/client";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";

const Card = ({ boat }) => {
  const starArray = new Array(boat.stars).fill(null);
  return (
    <Link href={`/designs/${boat._id}`} className="mx-auto rounded-[15px] shadow-md md:mb-0 mb-10">
      <Image
        src={boat.imgUrl}
        height="200"
        width="350"
        className="h-[200px] w-[350px] rounded-[15px]"
        alt=""
      />
    </Link>
  );
};

const FeaturedBoats = () => {
  const { boats, setBoats } = useStateContext();

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
            bookings,
            'imgUrl': img.asset->url
        }`;

    client
      .fetch(query)
      .then((data) => {
        setBoats(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div  id="featuredboats">
      <Headline text={"FEATURED BOATS"} />
      <div className="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-5 mt-10 justify-center items-center">
        {boats.map((boat) => (
          <Card boat={boat} />
        ))}
      </div>
      <div className="mt-16">
        <Link href="/designs" className="text-lg text-center text-[#170312CC] font-semibold flex justify-center">
          VIEW ALL{" "}
          <FontAwesomeIcon className="w-[10px] ml-2" icon={faRightLong} />
        </Link>
        <p className="poppins text-[#0b0b0b] text-center mt-10 md:px-20 px-10">
          Each Kettuvallam is a masterpiece that echoes the artistry of Kerala's
          boat building legacy. Admire the intricate wooden work that adorns the
          exteriors, a tribute to the skilled hands that meticulously craft
          every detail. Step inside, and you'll find a world where tradition
          meets innovation, where hand-carved accents harmonize with
          contemporary amenities.
        </p>
      </div>
    </div>
  );
};

export default FeaturedBoats;
