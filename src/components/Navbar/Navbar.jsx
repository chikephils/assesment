import React from "react";

const Navbar = () => {
  return (
    <div className=" h-[40px] flex justify-between items-center">
      <div className="flex items-center gap-2.5">
        <div className="flex flex-col gap-0.5">
          <div className="bg-[#65e4a3] h-[12px] w-[18px] rounded-r-full"></div>
          <div className="bg-[#65e4a3] h-[16px] w-[24px] rounded-r-full "></div>
        </div>
        <span className="text-[#ffffff] font-[700] text-[42px] font-manrope">
          Boldo
        </span>
      </div>

      <div className="flex items-center space-x-8">
        <a
          href="#product"
          className=" text-[16px] text-[#ffffff] font-openSans font-[600]"
        >
          Product
        </a>
        <a
          href="#services"
          className=" text-[16px] text-[#ffffff] font-openSans font-[600]"
        >
          Services
        </a>
        <a
          href="#about"
          className=" text-[16px] text-[#ffffff] font-openSans font-[600]"
        >
          About
        </a>

        <button className=" w-[108px] h-[40px] px-4 py-1 bg-white text-black font-openSans text-[16px] font-[700] rounded-full">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
