import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { RiArrowRightUpLine } from "react-icons/ri";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-1 h-[400px] md:h-[500px] items-center justify-center relative p-3 ">
      {/* <img
        src="/myimages/image2.jfif"
        alt=""
        className="md:hidden absolute top-0 left-0 w-full h-full object-cover rounded-b-[16px] md:rounded-b-none "
      /> */}
      {/* <div className="md:hidden absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] rounded-b-[16px] md:rounded-b-none "></div> */}
      <div className="absolute w-full h-full top-0 left-0 md:static rounded-b-[16px] md:rounded-b-none">
        <div className="relative h-full w-full flex items-center justify-center">
          <img
            src="/imagelayer.svg"
            alt=""
            className=" absolute left-0 top-0 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[45%] h-full"
          />
          <div className="text-white items-center text-center flex flex-col gap-4 p-2 w-[400px] md:w-[600px] lg:w-[900px]">
            <h1 className="font-[800] gradient-text font-nuni leading-10 sm:leading-[80px] lg:leading-[120px] xs:text-[1.5rem] xs:w-[300px] sm:w-[500px] md:w-full xsm:text-[2.6rem] md:text-[3rem] lg:text-[5.2rem]">
              Making your Journey Smoother
            </h1>
            <h2 className="xs:text-[0.8rem] w-[250px] sm:w-[400px] md:w-full lg:w-[90%] md:text-[1.2rem] font-[400]">
              Level Up with Clusstr: Your Gateway to Personalized Opportunities
              and Expert Career Guidance.
            </h2>
            {/* <div className="flex md:hidden items-center justify-center">
              <button className="bg-secondary p-[12px] text-[20px] rounded-[5px] text-white flex items-center gap-2">
                <span>Join Waitlist</span>
                <RiArrowRightUpLine />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
