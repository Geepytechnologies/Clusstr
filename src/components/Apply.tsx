import React from "react";

type Props = {};

const Apply = (props: Props) => {
  return (
    <div className="bg-white flex flex-col md:flex-row gap-10 p-3">
      <div className=" flex items-center justify-center">
        <img
          src="/myimages/man.svg"
          alt=""
          className="w-[60%] md:w-[80%] lg:w-full "
        />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex flex-col items-center justify-start gap-4">
          <img
            src="/myimages/clusstr_text.svg"
            alt=""
            className="w-[60%] md:w-[80%] lg:w-full"
          />
          <div className=" w-[60%] md:w-[80%] lg:w-full">
            <button className="bg-secondary font-istok text-white font-[700] text-2xl w-[150px] lg:w-[200px] rounded-[10px] px-3 py-4">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
