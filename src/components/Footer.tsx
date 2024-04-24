import React from "react";
import { BiArrowToRight } from "react-icons/bi";
import {
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#2B2D32] p-[30px] min-h-[400px] text-white flex flex-col">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-4">
        <div className="flex flex-col gap-10 basis-[50%] ">
          <img
            src="/logo2.png"
            alt=""
            className="w-[35%] sm:w-[40%] md:w-[35%]  object-cover"
          />
          <div className="flex flex-col gap-4">
            <p className=" ">Updates from our team</p>
            <div className="flex h-[50px]">
              <input
                className="bg-[#404547] w-[250px] h-full outline-none rounded-l-[6px] pl-[12px]"
                placeholder="Enter your email"
              />
              <div className="bg-white text-black cursor-pointer flex items-center justify-center min-w-[50px] h-full rounded-r-[6px]">
                <FaAngleRight />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  justify-center text-white tracking-[0.5px] gap-2 xs:text-[0.85rem] text-[1rem] ">
          <p className="">Home</p>
          <p className="">About Us</p>
          <p className="">Contact Us</p>
          <p className="">Pricing</p>
          <p className="">Collaboration</p>
        </div>
      </div>
      {/* section2 */}
      <div className="flex flex-col mt-auto">
        <hr className="text-white h-2" />
        <div className="flex xs:flex-col xs:items-start sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <p className="flex items-center gap-1">
              <FaRegCopyright className="" />
              <span>{year} </span>
            </p>
            <span>Clusstr</span>
          </div>
          {/* socials */}
          <div className="flex items-center gap-2">
            {/* fb */}
            <Link
              to=""
              className="h-[26px] w-[26px] flex items-center justify-center rounded-full text-black bg-[#ffffff73]"
            >
              <FaFacebookF />
            </Link>
            {/* twitter */}
            <Link
              to=""
              className="h-[26px] w-[26px] flex items-center justify-center rounded-full text-black bg-[#ffffff73]"
            >
              <FaTwitter />{" "}
            </Link>
            {/* linkedin */}
            <Link
              to=""
              className="h-[26px] w-[26px] flex items-center justify-center rounded-full text-black bg-[#ffffff73]"
            >
              <FaLinkedinIn />
            </Link>
            {/* instagram */}
            <Link
              to=""
              className="h-[26px] w-[26px] flex items-center justify-center rounded-full text-black bg-[#ffffff73]"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
