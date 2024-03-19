import React from "react";
import styles from "../styles/Home.module.css";

// INTERNAL IMPORT
import { SwapComponent } from "./index";
const HeroSection = () => {
  return (
    <section className=" bg-[#4ABDAC] text-gray-100">
      <div className=" container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className=" flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className=" text-5xl font-bold leadi sm:text-6xl">
            Token
            {""} <span className=" text-[#FC4A1A]">MarketPlace</span>
          </h1>
          <p className=" mt-6 mb-8 text-lg sm:mb-12">
            Swap, earn, and build on the leading decentralized crypto trading
            protocol.
            <br className=" hidden md:inline lg:hidden" />
            turpis pulviner, est scelestrine ligula sem
          </p>
          <div className=" flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className={` px-8 py-3 text-lg font-semibold bg-[#FCB733] ${styles.hoverScale} text-gray-900`}
            >
              Get Start
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className=" px-8 py-3 text-lg font-semibold border rounded border-gray-100"
            >
              SWAP ERC20
            </a>
          </div>
        </div>
        <div className=" flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <SwapComponent />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
