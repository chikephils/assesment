import React from "react";

const About = () => {
  return (
    <div className="w-[800px] h-[250px] flex flex-col items-center justify-center">
      <div className="w-full h-[173px]">
        <h1 className="text-[20px] font-openSans font-[400] text-[#f1f1f1f1] text-center">
          About
        </h1>
        <div className=" h-[158px]">
          <h1 className="text-[60px] font-manrope font-[400] leading-[80px] text-[#f1f1f1f1] text-center">
            We love to make great things, things that matter.
          </h1>
        </div>
      </div>

      <div className="max-w-[740px] h-[60px] p-2 mt-[20px]">
        <h1 className="text-[16px] font-openSans font-[400] text-[#f1f1f1f1] text-center">
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </h1>
      </div>
    </div>
  );
};

export default About;
