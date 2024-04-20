import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { RiArrowRightUpLine } from "react-icons/ri";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-1 h-[500px] items-center justify-center relative p-3 rounded-b-[35px] md:rounded-b-none">
      <img
        src="/myimages/image2.jfif"
        alt=""
        className="md:hidden absolute top-0 left-0 w-full h-full object-cover rounded-b-[35px] md:rounded-b-none "
      />
      <div className="md:hidden absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] rounded-b-[35px] md:rounded-b-none "></div>
      <div className="absolute w-full h-full top-0 left-0 md:static rounded-b-[35px] md:rounded-b-none">
        <div className="relative h-full w-full flex items-center justify-center">
          <img
            src="/imagelayer.svg"
            alt=""
            className="hidden md:block absolute left-0 top-0 lg:w-[40%] h-full"
          />
          <div className="text-white items-center text-center flex flex-col gap-4 p-2 md:w-[600px] lg:w-[900px]">
            <h1 className="font-[800] md:gradient-text font-nuni leading-10 sm:leading-[80px] lg:leading-[120px] xs:text-[2rem] xs:w-[300px] sm:w-[500px] md:w-full sm:text-[3rem] lg:text-[6rem]">
              Making your Journey Smoother
            </h1>
            <h2 className="text-[1.2rem] font-[400]">
              Level Up with Clusstr: Your Gateway to Personalized Opportunities
              and Expert Career Guidance.
            </h2>
            <div className="flex md:hidden items-center justify-center">
              <button className="bg-secondary p-[12px] text-[20px] rounded-[5px] text-white flex items-center gap-2">
                <span>Join Waitlist</span>
                <RiArrowRightUpLine />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
