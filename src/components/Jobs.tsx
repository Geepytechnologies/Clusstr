import React from "react";

type Props = {};

const Jobs = (props: Props) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 p-3 overflow-hidden">
        <img src="/joblists/job1.svg" alt="" />
        <img src="/joblists/job2.svg" alt="" />
        <img src="/joblists/job3.svg" alt="" />
      </div>
    </div>
  );
};

export default Jobs;
