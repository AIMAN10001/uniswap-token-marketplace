import React from "react";

//internal import
import { Footer, HeroSection, Header, Card } from "../components/index";

const home = () => {
  return (
    <div className="bg-[#4abdacee]">
      <Header />
      <HeroSection />
      <Card />
      <Footer />
    </div>
  );
};

export default home;
