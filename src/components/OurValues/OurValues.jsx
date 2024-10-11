import React from "react";
import { getImageUrl } from "../../utils";

const OurValues = () => {
  return (
    <div className="w-full h-[1000px] bg-[#0a2640] flex flex-col justify-center items-center">
      <div className="w-[800px] h-[121px] flex flex-col gap-[12px]">
        <h1 className="font-openSans text-[20px] font-[400] text-[#ffffff]">
          Our values
        </h1>
        <h1 className="font-manrope text-[48px] font-[400] text-[#ffffff]">
          Things in we believe
        </h1>
      </div>
      <div className="w-[799px] h-[110px] mb-[50px]">
        <h1 className="font-openSans text-[20px] font-[400] text-[#f1f1f1]">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.{" "}
        </h1>
      </div>

      <div className="w-[800px] h-[151px] mb-[50px]">
        <div className=" flex justify-between gap-[50px]">
          <img
            src={getImageUrl("Assets/Rectangle 1273.png")}
            alt="Image2"
            className="w-[150px] h-[151px] rounded-[24px]"
          />
          <div className="flex flex-col gap-[16px]">
            <h1 className="font-manrope text-[28px] font-[400] text-[#f1f1f1]">
              We are commited
            </h1>
            <h1 className="font-[400] text-[20px] font-openSans text-[#f1f1f1]">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[800px] h-[151px] mb-[50px]">
        <div className=" flex justify-between gap-[50px]">
          <img
            src={getImageUrl("Assets/Image (4).png")}
            alt="Image2"
            className="w-[150px] h-[151px] rounded-[24px]"
          />
          <div className="flex flex-col gap-[16px]">
            <h1 className="font-manrope text-[28px] font-[400] text-[#f1f1f1]">
              We are responsible.
            </h1>
            <h1 className="font-[400] text-[20px] font-openSans text-[#f1f1f1]">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[800px] h-[151px]">
        <div className=" flex justify-between gap-[50px]">
          <img
            src={getImageUrl("Assets/Image (5).png")}
            alt="Image2"
            className="w-[150px] h-[151px] rounded-[24px]"
          />
          <div className="flex flex-col gap-[16px]">
            <h1 className="font-manrope text-[28px] font-[400] text-[#f1f1f1]">
              We aim for progress.
            </h1>
            <h1 className="font-[400] text-[20px] font-openSans text-[#f1f1f1]">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
