import axios from "axios";
import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Joi from "joi";
import { SERVER } from "../utils/constants";

type Props = {};

const Countmein = (props: Props) => {
  const [userDetails, setUserDetails] = useState({ email: "", phone: "" });
  const [errors, setErrors] = useState<any>({});
  const schema = Joi.object({
    phone: Joi.string()
      .pattern(/^\+234\d{10}$/)
      .max(14)
      .required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "org"] },
      })
      .required(),
  });
  const handleChange = (e: any) => {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const joinWaitlist = async (e: any) => {
    e.preventDefault();
    const { error } = schema.validate(userDetails, { abortEarly: false });
    if (error) {
      const newErrors: any = {};
      error.details.forEach((detail) => {
        newErrors[detail.path[0]] = detail.message;
      });
      setErrors(newErrors);
    } else {
      try {
        const res = await axios.post(`${SERVER}/api/waitlist`, {
          email: userDetails.email,
          phone: userDetails.phone,
        });
        // console.log(res.data);
        toast.success("Your request has been received!", {
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
      } catch (error) {
        toast.error("Something went wrong", { hideProgressBar: true });
      }
    }
  };
  return (
    <div className="font-nuni flex items-center justify-center p-3 py-10">
      <ToastContainer />
      <div className="text-white flex flex-col items-center">
        <h1 className="gradient-text font-[800] xs:text-[2rem] sm:text-[3rem] md:text-[5rem]">
          Count me in!
        </h1>
        <h2 className="xs:text-[0.85rem] xs:leading-6 sm:text-[1.2rem] md:text-[1.5rem] text-center md:text-left leading-[41px]">
          Fill in the form below and be the first to get notified via email.
        </h2>
        <form
          onSubmit={joinWaitlist}
          className="w-full flex flex-col gap-[16px] mt-[45px]"
        >
          <input
            type="email"
            value={userDetails.email}
            name="email"
            onChange={handleChange}
            className="border-secondary border outline-0 rounded-[5px] w-full p-[10px] text-white bg-transparent text-[1.2rem] md:text-[1.8rem]"
            placeholder="Enter email address"
          />
          {errors?.email && (
            <div className="text-red-500"> Please input a valid email</div>
          )}
          <input
            value={userDetails.phone}
            name="phone"
            onChange={handleChange}
            className="border-secondary border outline-0 rounded-[5px] w-full p-[10px] text-white bg-transparent text-[1.2rem] md:text-[1.8rem]"
            placeholder="+2348051112288"
          />
          {errors?.phone && (
            <div className="text-red-500">
              Please input a valid phone number
            </div>
          )}

          <button
            type="submit"
            className="bg-secondary rounded-[5px] w-full p-[10px] text-white text-[1.2rem] md:text-[1.8rem]"
          >
            Join waitlist
          </button>
        </form>
      </div>
    </div>
  );
};

export default Countmein;
