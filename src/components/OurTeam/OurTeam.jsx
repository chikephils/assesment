import React from "react";
import { getImageUrl } from "../../utils";

const OurTeam = () => {
  return (
    <div className="w-[1000px]  h-[773px] mt-[100px] flex flex-col items-center mb-[40px]">
      <div className="w-[800px] h-[251px]">
        <h1 className="font-openSans text-[20px] font-[400] text-[#777777]">
          Our team
        </h1>
        <div className="w-[842px] h-[72px] mb-[20px]">
          <h1 className="text-[48px] font-manrope font-[400] text-[#000000]">
            The leadership team
          </h1>
        </div>
        <div className="w-[799px] h-[110px]">
          <h1 className="font-openSans text-[20px] font-[400] text-[#777777]">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.{" "}
          </h1>
        </div>
      </div>
      <div className="flex justify-between gap-[50px]">
        <div className="w-[300px] h-[470px] space-y-7">
          <img
            src={getImageUrl("Assets/image (2).png")}
            alt="Image1"
            className="w-[300px] h-[354px] rounded-tl-[24px]"
          />
          <div className=" h-[92px]  mt-[20px] space-y-2">
            <h1 className="font-manrope text-[28px] font-[400px] text-[#000000]">
              Micheal Scott
            </h1>
            <h1 className="font-openSans font-[400] text-[20px] text-[#777777]">
              General Manager
            </h1>
          </div>
        </div>
        <div className="w-[300px] h-[470px] space-y-7 ">
          <img
            src={getImageUrl("Assets/image (1).png")}
            alt="Image2"
            className="w-[300px] h-[354px] rounded-tl-[24px]"
          />
          <div className=" h-[92px]  mt-[20px] space-y-2">
            <h1 className="font-manrope text-[28px] font-[400px] text-[#000000]">
              Dwight Schrute
            </h1>
            <h1 className="font-openSans font-[400] text-[20px] text-[#777777]">
              General Manager
            </h1>
          </div>
        </div>
        <div className="w-[300px] h-[470px] space-y-7 ">
          <img
            src={getImageUrl("Assets/image.png")}
            alt="Image3"
            className="w-[300px] h-[354px] rounded-tl-[24px]"
          />
          <div className=" h-[92px]  mt-[20px] space-y-2">
            <h1 className="font-manrope text-[28px] font-[400px] text-[#000000]">
              Pam Beetsley
            </h1>
            <h1 className="font-openSans font-[400] text-[20px] text-[#777777]">
              General Manager
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
