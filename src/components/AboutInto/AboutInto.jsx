import React from "react";
import { getImageUrl } from "../../utils";

const AboutInto = () => {
  return (
    <div className="h-[600px] mt-[50px]  mx-[0px]">
        <div className="grid grid-cols-3 gap-[5px] justify-items-center">
            
        <div className="flex flex-col gap-8">
        <img
          src={getImageUrl("Assets/Rectangle1.png")}
          alt="Image1"
          className="w-[280px] h-[275px] rounded-tl-[24px]"
        />
        <img src={getImageUrl("Assets/Rectangle 1273.png")} alt="Image2" className="w-[280px] h-[275px]" />
      </div>

      <div className="flex items-center justify-center">
        <img
         src={getImageUrl("Assets/Rectangle 1271.png")}
          alt="Image3"
          className="w-[400px] h-[580px] rounded-tl-[24px]"
        />
      </div>

      <div className="flex flex-col gap-8">
        <img
        src={getImageUrl("Assets/Rectangle 1272.png")}
          alt="Image4"
          className="w-[280px] h-[275px] rounded-tl-[24px]"
        />
        <img src={getImageUrl("Assets/Rectangle 1274.png")} alt="Image5" className="w-[280px] h-[275px]" />
      </div>
        </div>
     
    </div>
  );
};

export default AboutInto;
