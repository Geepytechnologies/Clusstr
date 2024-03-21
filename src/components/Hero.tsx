import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-1 h-full items-center justify-center relative">
      <div className="text-white text-center w-[700px] flex flex-col gap-4 p-2">
        <h1 className="font-[700] text-[3rem] md:text-[5rem]">
          Making your Journey Smoother
        </h1>
        <h2 className="text-[1rem] font-[400]">
          We are an AI-powered platform that connects users with tailored job
          opportunities and scholarships based on their unique profiles.
        </h2>
        <div className=" flex justify-center">
          <button className="flex items-center gap-2 bg-[#3CB371] text-white rounded-[24px] py-3 px-6">
            Get Started <FiArrowUpRight />
          </button>
        </div>
      </div>
      <img
        src="/card.png"
        alt=""
        className="hidden lg:flex absolute bottom-4 right-0 w-[180px] h-auto"
      />
    </div>
  );
};

export default Hero;
