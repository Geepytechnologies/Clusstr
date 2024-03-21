import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className=" bg-primary relative">
      <div className="blurdiv absolute top-0 left-0 w-[400px] h-[400px]"></div>
      <div className="z-[200] min-h-screen flex flex-col ">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
