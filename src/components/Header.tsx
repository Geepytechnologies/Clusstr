import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiArrowRightUpLine } from "react-icons/ri";

type Props = {};

const Header = (props: Props) => {
  const sidebar = useRef<HTMLDivElement>(null);

  const open = () => {
    if (sidebar.current) {
      sidebar.current.style.width = "100%";
    }
  };
  const close = () => {
    if (sidebar.current) {
      sidebar.current.style.width = "0px";
    }
  };
  return (
    <div className="font-nuni bg-[#214559] z-[200] flex items-center justify-between p-6 gap-3 ">
      {/* <p className="text-white text-[1.8rem] text-center md:text-left w-full font-[800]">
        clusstr
      </p> */}
      <img
        src="/logo2.png"
        alt=""
        className="w-[35%] sm:w-[20%] object-cover"
      />

      <div className="">
        <a
          href="#countmein"
          className="bg-secondary md:min-w-[180px] p-[12px] md:text-[20px] rounded-[8px] text-white flex items-center justify-center gap-2"
        >
          <span>Join Waitlist</span>
          <RiArrowRightUpLine />
        </a>
      </div>
    </div>
  );
};

export default Header;
