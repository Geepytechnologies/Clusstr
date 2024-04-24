import React from "react";

type Props = {};

const skillData = [
  {
    title: "Personalized Opportunities",
    subtitle:
      "Personalized opportunities matched to your goals and qualifications, delivered straight to your dashboard.",
  },
  {
    title: "Application Management",
    subtitle:
      "Simplify and streamline your application process, from tracking statuses to document submission, all in one place.",
  },
  {
    title: "Expert Guidance and Support",
    subtitle:
      "Access tailored career advice from industry experts to navigate your professional journey effectively.",
  },
  {
    title: "Vibrant Community",
    subtitle:
      "Join a vibrant community to expand your network, share insights, and collaborate with peers and experts",
  },
];

const Skills = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 lg:gap-6 p-4 font-nuni bg-white">
      {/* <div className="md:-translate-y-[83px] flex justify-center md:justify-start">
        <img src="/imgarc.svg" alt="" className="w-[40%] md:w-full h-full" />
      </div> */}
      {/* <div className="triangle-up"></div> */}
      <div className="relative md:min-w-[250px] md:-translate-y-[83px]  lg:min-w-[350px] h-[400px] md:h-[600px] rounded-t-[20px] md:rounded-t-full bg-[#55DB9C]">
        {/* <img
          src="/worker.png"
          alt=""
          className="absolute top-0 left-0 h-full w-full object-cover"
        /> */}
        <div className="bg-[url('/worker.png')] xsm:bg-[center_top_-8rem] md:bg-top  bg-cover absolute top-0 left-0 h-full w-full"></div>
        <div className="right-angle-triangle border-b-[200px] md:border-b-[300px] xs:border-r-[250px] sm:border-r-[300px] md:border-r-[250px] lg:border-r-[350px] border-b-[#6C98FF] border-r-transparent absolute left-0 bottom-0"></div>
      </div>
      <div className="md:pt-16 p-4 w-full flex flex-col">
        <div className="w-full flex justify-center md:justify-start">
          <h1 className="font-[700] text-[1.5rem] md:text-[2.5rem] text-center md:text-left text-[#214559] leading-[31px] md:leading-[68px] w-[300px] md:w-[80%] lg:w-[580px]">
            Hone Your Skills While We Manage Your Opportunities
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-start gap-5 mt-6">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="w-full md:max-w-[80%] lg:max-w-[90%] p-2 flex flex-col gap-2"
            >
              <h2 className="font-[700] xs:text-[0.85rem] sm:-[1.2rem] md:text-2xl">
                {skill.title}
              </h2>
              <h3 className="xs:text-[0.75rem] sm:[1rem] md:text-[1.2rem]">
                {skill.subtitle}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
