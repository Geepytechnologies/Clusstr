import axios from "axios";
import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Joi from "joi";
import { SERVER } from "../utils/constants";
import { debounce, isEmpty } from "lodash";

type Props = {};

const Countmein = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<any>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const firstnameSchema = Joi.string().required();
  const lastnameSchema = Joi.string().required();
  const phoneSchema = Joi.string()
    .pattern(/^\+234\d{10}$/)
    .max(14)
    .required();
  const emailSchema = Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "org"] },
    })
    .required();

  const validateFirstname = (value: string) => {
    const { error } = firstnameSchema.validate(value);
    return error ? error.details[0].message : null;
  };
  const validateLastname = (value: string) => {
    const { error } = lastnameSchema.validate(value);
    return error ? error.details[0].message : null;
  };
  const validatePhone = (value: string) => {
    const { error } = phoneSchema.validate(value);
    return error ? error.details[0].message : null;
  };
  const validateEmail = (value: string) => {
    const { error } = emailSchema.validate(value);
    return error ? error.details[0].message : null;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (name === "firstname") {
      const error = validateFirstname(value);
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
    if (name === "lastname") {
      const error = validateLastname(value);
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
    if (name === "phone") {
      const error = validatePhone(value);
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
    if (name === "email") {
      const error = validateEmail(value);
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  };
  const handleBlur = (e: any) => {
    const { name, value } = e.target;

    if (name === "firstname") {
      const error = validateFirstname(value);
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
    if (name === "lastname") {
      const error = validateLastname(value);
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
    if (name === "phone") {
      const error = validatePhone(value);
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
    if (name === "email") {
      const error = validateEmail(value);
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  };
  const validateForm = () => {
    let result;
    const firstnameError = validateFirstname(userDetails.firstname);
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      ["firstname"]: firstnameError,
    }));
    const lastnameError = validateLastname(userDetails.lastname);
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      ["lastname"]: lastnameError,
    }));
    const emailError = validateEmail(userDetails.email);
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      ["email"]: emailError,
    }));
    const phoneError = validatePhone(userDetails.phone);
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      ["phone"]: phoneError,
    }));
    if (errors.firstname || errors.lastname || errors.email || errors.phone) {
      result = false;
    } else result = true;
    return result;
  };
  const joinWaitlist = async (e: any) => {
    e.preventDefault();
    const result = validateForm();

    setLoading(true);
    if (result) {
      try {
        const res = await axios.post(`${SERVER}/api/waitlist`, {
          firstname: userDetails.firstname,
          lastname: userDetails.lastname,
          email: userDetails.email,
          phone: userDetails.phone,
        });
        if (res.data) {
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
        }
      } catch (error: any) {
        if (error?.response.status === 400) {
          toast.error("User already on the waitlist", {
            hideProgressBar: true,
          });
        } else if (error?.response.status === 500) {
          toast.error("Something went wrong", { hideProgressBar: true });
        } else {
          toast.error("Something went wrong", { hideProgressBar: true });
        }
        throw new Error(error);
      } finally {
        setUserDetails({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
        });
        setLoading(false);
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
            type="text"
            value={userDetails.firstname}
            name="firstname"
            onChange={handleChange}
            onBlur={handleBlur}
            className="border-secondary border outline-0 rounded-[5px] w-full p-[10px] text-white bg-transparent text-[1.1rem] font-salsa"
            placeholder="Enter Firstname"
          />
          {errors?.firstname && (
            <div className="text-red-500"> Please enter firstname</div>
          )}
          <input
            type="text"
            value={userDetails.lastname}
            name="lastname"
            onChange={handleChange}
            onBlur={handleBlur}
            className="border-secondary border outline-0 rounded-[5px] w-full p-[10px] text-white bg-transparent text-[1.1rem] font-salsa"
            placeholder="Enter Lastname"
          />
          {errors?.lastname && (
            <div className="text-red-500"> Please enter lastname</div>
          )}
          <input
            type="email"
            value={userDetails.email}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            className="border-secondary border outline-0 rounded-[5px] w-full p-[10px] text-white bg-transparent text-[1.1rem] font-salsa"
            placeholder="Enter email address"
          />
          {errors?.email && (
            <div className="text-red-500"> Please input a valid email</div>
          )}
          <input
            value={userDetails.phone}
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            className="border-secondary border outline-0 rounded-[5px] w-full p-[10px] text-white bg-transparent text-[1.1rem] font-salsa"
            placeholder="+2348051112288"
          />
          {errors?.phone && (
            <div className="text-red-500">
              Please input a valid phone number
            </div>
          )}

          {!loading && (
            <button
              type="submit"
              className="bg-secondary rounded-[5px] w-full p-[10px] text-white text-[1.2rem] md:text-[1.8rem]"
            >
              Join waitlist
            </button>
          )}
          {loading && (
            <div className="flex items-center justify-center bg-secondary rounded-[5px] w-full p-[10px]">
              <div className="loader "></div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Countmein;
