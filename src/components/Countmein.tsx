import axios from "axios";
import React, { useState } from "react";

type Props = {};

const Countmein = (props: Props) => {
  const [userDetails, setUserDetails] = useState({ email: "", phone: "" });
  const handleChange = (e: any) => {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const joinWaitlist = async () => {
    try {
      const res = await axios.post("", {
        email: userDetails.email,
        phone: userDetails.phone,
      });
    } catch (error) {}
  };
  return (
    <div className="font-nuni flex items-center justify-center p-3 py-10">
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
          <input
            value={userDetails.phone}
            name="phone"
            onChange={handleChange}
            className="border-secondary border outline-0 rounded-[5px] w-full p-[10px] text-white bg-transparent text-[1.2rem] md:text-[1.8rem]"
            placeholder="Phone number"
          />
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
