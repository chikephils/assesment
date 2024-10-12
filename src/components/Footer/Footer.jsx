import React from "react";

const Footer = () => {
  return (
    <div className="w-full my-[100px]">
      <div className="flex items-center justify-center">
        <div className="w-[1100px] h-[380px] bg-[#0a2640] rounded-[12px] flex items-center justify-center">
          <div className="w-[716px] h-[247px] flex flex-col justify-center items-center">
            <h1 className="font-manrope font-[400] text-[48px] text-[#ffffff] text-center">
              An enterprise template to ramp up your company website
            </h1>
            <div className="w-[604px] h-[60px] flex justify-between items-center mt-[35px]">
              <div className="w-[370px] h-[56px] rounded-full bg-white shadow-md text-[#000000] flex items-center pl-[30px]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full h-full bg-transparent outline-none text-[#000000] font-openSans font-[400] text-[20px]"
                />
              </div>
              <button className="w-[210px] h-[60px] bg-[#65e4a3] text-[#000000] rounded-full flex items-center justify-center">
                <h1 className="font-openSans font-[700] text-[20px] text-center">
                  Start now
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-[80px] flex mx-[60px]">
        <div className="flex justify-between gap-[150px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5 mb-[20px]">
              <div className="flex flex-col gap-0.5">
                <div className="bg-[#0a2640] h-[12px] w-[17px] rounded-r-full"></div>
                <div className="bg-[#0a2640] h-[16px] w-[24px] rounded-r-full"></div>
              </div>
              <span className="text-[#0a2640] font-[700] text-[42px] font-manrope">
                Boldo
              </span>
            </div>

            <div className="w-[300px] h-[84px] mt-[10px]">
              <p className="font-openSans text-[16px] font-[400] text-[#777777]">
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </p>
            </div>

            <div className="w-[250px] h-[28px] mt-[30px]">
              <p className="font-openSans font-[400] text-[16px] text-[#777777]">
                All rights reserved.
              </p>
            </div>
          </div>

          <div className="flex gap-[100px] mt-[20px]">
            <div className="flex flex-col">
              <h3 className="text-[#0a2640] font-bold text-[20px] mb-[40px]">
                Landings
              </h3>
              <ul className="space-y-2 text-[#777777] text-[20px]">
                <li>Home</li>
                <li>Products</li>
                <li>Services</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[#0a2640] font-bold text-[20px] mb-[40px]">
                Company
              </h3>
              <ul className="space-y-2 text-[#777777] text-[20px]">
                <li>Home</li>
                <li className="flex items-center">
                  Careers{" "}
                  <span className="ml-2 px-2 py-1 bg-[#65e4a3] font-semibold text-black text-[12px] rounded-full">
                    Hiring!
                  </span>
                </li>
                <li>Services</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[#0a2640] font-bold text-[20px] mb-[40px]">
                Resources
              </h3>
              <ul className="space-y-2 text-[#777777] text-[20px]">
                <li>Blog</li>
                <li>Products</li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
