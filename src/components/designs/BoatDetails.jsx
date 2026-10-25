import React from "react";
import Image from "next/image";

const BoatDetails = ({ boat }) => {
  return (
    <div className="md:px-16 px-5 md:py-20 py-16">
      {boat && (
        <div className="bg-white w-[100%] rounded-[15px] py-5 md:px-10 px-5">
          <Image
            src={boat.image}
            width="500"
            height="350"
            className="w-[90%] h-[350px] flex m-auto rounded-[15px]"
            alt="boat"
          />
          <div className="my-5">
            <div className="flex justify-center my-5">
              <h1 className="mt-3 md:mt-0 text-[#1E3888] sm:text-center poppins text-xl font-semibold">
                {boat.title}
              </h1>
            </div>
            <div className="">
              <div className="my-7">
                <h3 className="poppins font-semibold text-lg">{boat.tag}</h3>
                <p className="poppins mt-5">{boat.desc}</p>
              </div>
              <div className="my-7">
                <h3 className="poppins font-semibold text-lg">Dimensions:</h3>
                <ul>
                  <li>Length: {boat.dimensions?.length} meters</li>
                  <li>Width: {boat.dimensions?.width} meters</li>
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
                <h3 className="poppins font-semibold text-lg">
                  Engineering Excellence:
                </h3>
                <p className="poppins mt-5">{boat.engex}</p>
              </div>
              <div className="my-10 grid grid-cols-4 gap-5">
                {boat.gallery?.map((img, i) => (
                  <Image
                    key={`${img}-${i}`}
                    src={img}
                    className="mb-3 w-[100%] h-[200px]"
                    width="150"
                    height="200"
                    alt={boat.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoatDetails;
