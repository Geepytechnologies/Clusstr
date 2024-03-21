import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="font-nuni flex items-center justify-between p-6 ">
      <p className="text-white text-[1.8rem] font-[800]">clustrr</p>
      <div className=" items-center gap-8 hidden md:flex text-white">
        <Link
          to="/"
          className="bg-[#393D3E] py-[10px] px-[14px] rounded-[15px]"
        >
          Discover
        </Link>
        <Link to="/" className="">
          Features
        </Link>
        <Link to="/" className="">
          Benefits
        </Link>
      </div>
      <div className="hidden md:flex"></div>
      <IoMenuOutline className="text-white flex md:hidden border border-white text-[25px] rounded-sm" />
    </div>
  );
};

export default Header;
