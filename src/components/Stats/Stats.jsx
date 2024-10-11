import React from "react";

const Stats = () => {
  return (
    <div className=" w-full h-[574px] bg-[#0a2640] flex flex-col justify-center items-center">
      <div className="h-[184px] w-[842px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-openSans text-[20px] font-[400] text-[#ffffff]">
            Our Numbers
          </h1>
          <h1 className="font-manrope text-[48px] text-center text-[#ffffff]">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>
      </div>
      <div className="w-[1000px] h-[124px]">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="font-manrope text-[96px] font-[400] text-[#4fe9a4]">
              120m
            </h1>
            <h1 className="font-openSans text-[24px] font-[400] text-[#f1f1f1] leading-3">
              Cool feature title
            </h1>
          </div>
          <div className="flex flex-col space-y-0">
            <h1 className="font-manrope text-[96px] font-[400] text-[#4fe9a4]">
              10.000
            </h1>
            <h1 className="fotext-[#f1f1f1]nt-openSans text-[24px] font-[400] text-[#f1f1f1] leading-3">
              Cool feature title
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="font-manrope text-[96px] font-[400] text-[#4fe9a4]">
              240
            </h1>
            <h1 className="font-openSans text-[24px] font-[400] text-[#f1f1f1]  leading-3">
              Cool feature title
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
