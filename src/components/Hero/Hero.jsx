import React from "react";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import AboutInto from "../AboutInto/AboutInto";

const Hero = () => {
  return (
    <div className="h-[1100px]">
      <div className="h-[550px] bg-[#0A2640] pt-[50px] pl-[90px] pr-[90px]">
        <Navbar />
        <div className="flex flex-col justify-center items-center pt-[60px]">
          <About />
          <AboutInto />
        </div>
      </div>
    </div>
  );
};

export default Hero;
