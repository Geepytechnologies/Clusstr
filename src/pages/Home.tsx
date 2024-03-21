import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
