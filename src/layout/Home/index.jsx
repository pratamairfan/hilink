import React from "react";
import Hero from "layout/Home/Hero";
import Camp from "layout/Home/Camp";
import Guide from "layout/Home/Guide";
import Features from "layout/Home/Features";
import GetApp from "./GetApp";

const Home = () => {
  return (
    <div className="pt-24">
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </div>
  );
};

export default Home;
