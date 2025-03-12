import axios from "axios";
import React, { useState } from "react";
import { BiArrowToRight } from "react-icons/bi";
import {
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { SERVER } from "../utils/constants";
import Joi from "joi";
import ReactGA from "react-ga4";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const emailSchema = Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "org"] },
    })
    .required();
  const handeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const subscribe = async (e: any) => {
    e.preventDefault();
    ReactGA.event({
      category: "Interactions",
      action: "Newsletter Subscription",
    });
    const { error } = emailSchema.validate(email);

    if (error) {
      toast.error("Email is Invalid", {
        hideProgressBar: true,
      });
    } else {
      setLoading(true);
      try {
        const res = await axios.post(`${SERVER}/api/subscribe`, {
          email: email,
        });
        if (res.data) {
          toast.success("Thank you For Subscribing!!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      } catch (error: any) {
        if (error?.response.status === 400) {
          toast.error("You are already a subscriber", {
            hideProgressBar: true,
          });
        } else if (error?.response.status === 500) {
          toast.error("Something went wrong", { hideProgressBar: true });
        } else {
          toast.error("Something went wrong", { hideProgressBar: true });
        }
        throw new Error(error);
      } finally {
        setEmail("");
        setLoading(false);
      }
    }
  };
  const firesocialevent = (social: string) => {
    ReactGA.event({
      category: "Social",
      action: social,
    });
  };
  return (
    <div className="bg-[#2B2D32] xs:p-3 sm:p-[30px] min-h-[400px] text-white flex flex-col">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-4">
        <div className="flex flex-col gap-10">
          <img
            src="/logo2.png"
            alt=""
            className="w-[35%] sm:w-[40%] md:w-[25%]  object-cover"
          />
          {/* <div className="flex  justify-center text-white font-[500] xs:gap-2  gap-4 xs:text-[0.85rem] text-[1.5rem] ">
            <p className="">Home</p>
            <p className="">About</p>
            <p className="">Contact</p>
            <p className="">Pricing</p>
            <p className="">Collaboration</p>
          </div> */}
          <div className="flex flex-col gap-4">
            <p className=" ">Updates from our team</p>
            <div className="flex h-[50px]">
              <input
                value={email}
                onChange={handeEmail}
                className="bg-[#404547] w-[250px] h-full outline-none rounded-l-[6px] pl-[12px]"
                placeholder="Enter your email"
              />
              {!loading ? (
                <div
                  onClick={subscribe}
                  className="bg-white text-black cursor-pointer flex items-center justify-center min-w-[50px] h-full rounded-r-[6px]"
                >
                  <FaAngleRight />{" "}
                </div>
              ) : (
                <div className="bg-white text-black cursor-pointer flex items-center justify-center min-w-[50px] h-full rounded-r-[6px]">
                  <FaAngleRight />{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* section2 */}
      <div className="flex flex-col mt-auto">
        <hr className="text-white h-2" />
        <div className="flex  xs:items-start sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <p className="flex items-center gap-1">
              <FaRegCopyright className="" />
              <span>{year} </span>
            </p>
            <span>Clusstr</span>
          </div>
          {/* socials */}
          <div className="flex items-center gap-2">
            {/* youtube */}
            <a
              onClick={() => firesocialevent("YouTube")}
              href="https://www.youtube.com/@Clusstr"
              target="_blank"
              className="h-[26px] w-[26px] flex items-center justify-center rounded-full text-black bg-[#ffffff73]"
            >
              <FaYoutube />{" "}
            </a>
            {/* twitter */}
            <a
              onClick={() => firesocialevent("Twitter")}
              href="https://x.com/clusstr?t=j677HFrQP1lLgNrR5YhZ0w&s=09"
              target="_blank"
              className="h-[26px] w-[26px] flex items-center justify-center rounded-full text-black bg-[#ffffff73]"
            >
              <FaTwitter />{" "}
            </a>
            {/* linkedin */}
            <Link
              onClick={() => firesocialevent("linkedin")}
              to="https://www.linkedin.com/in/clusstr-inc-52539a307"
              className="h-[26px] w-[26px] flex items-center justify-center rounded-full text-black bg-[#ffffff73]"
            >
              <FaLinkedinIn />
            </Link>
            {/* instagram */}
            <Link
              onClick={() => firesocialevent("Instagram")}
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
