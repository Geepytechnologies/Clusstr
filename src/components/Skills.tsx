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
    <div className="flex gap-4 lg:gap-6 font-nuni bg-white">
      <div className="-translate-y-[83px] hidden md:block">
        <img src="/imgarc.svg" alt="" className="md:w-[80%] h-auto" />
      </div>
      <div className="pt-16 p-4 w-full flex flex-col">
        <div className="w-full flex justify-center">
          <h1 className="font-[700] text-[1.5rem] md:text-[2.5rem] text-center md:text-left text-[#214559] leading-[31px] md:leading-[68px] w-[300px] md:w-[580px]">
            Hone Your Skills While We Manage Your Opportunities
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center md:justify-items-start gap-5 mt-6">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="xs:w-[280px] w-[350px] p-2 flex flex-col gap-2"
            >
              <h2 className="font-[700] xs:text-[0.85rem] md:text-2xl">
                {skill.title}
              </h2>
              <h3 className="xs:text-[0.75rem]">{skill.subtitle}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
