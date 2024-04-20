import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Jobs from "../components/Jobs";
import Apply from "../components/Apply";
import Countmein from "../components/Countmein";
import Footer from "../components/Footer";

type Props = {};

const Landingpage = (props: Props) => {
  return (
    <div className="bg-[#214559]">
      <div className=" md:pb-[180px] bg-white md:bg-[#214559]">
        <Header />
        <Hero />
      </div>
      <Skills />
      <Jobs />
      <Apply />
      <Countmein />
      <Footer />
    </div>
  );
};

export default Landingpage;
