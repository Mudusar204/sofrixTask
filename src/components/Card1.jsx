import React from "react";

const Card1 = () => {
  return (
    <div className="card1 px-[30px] py-[70px] max-md:px-[20px] max-md:py-[35px] flex flex-1 justify-between gap-[30px] max-lg:flex-col">
      <div className="border-white border-[25px] bg-white rounded-[50px] w-[33%]  h-auto max-lg:w-full max-lg:h-full">
        <div className="flex flex-col justify-center items-center  h-full w-full bg-[#00ABE1] border rounded-[25px] max-lg:p-10">
          <img src="/qr-scanner.svg" alt="" />
          <p className="font-500 text-[45px] max-sm:text-[35px] leading-[53px] text-white mt-5">
            Sign Up
          </p>
        </div>
      </div>

      <div className="bg-white flex justify-between items-center rounded-[25px] w-[66%] max-lg:w-full">
        <img
          src="/home-girls.svg"
          className="mt-[52px] ml-[-90px] max-lg:ml-2  max-md:hidden"
          alt=""
        />
        <p className="text-[#127398] text-[30px] leading-[40px] max-md:text-[25px] max-md:leading-[30px] font-[500] pl-[120px] pr-[50px] max-lg:pl-4 max-lg:pr-0 max-md:m-5">
          <b className="text-[33px] max-md:text-[28px]"> Sign up today</b> and
          manage your portfolio like a pro with personalized assistant and
          access to a trusted tech community of 1,200 members who connected
          $150M+ of total assets.
        </p>
      </div>
    </div>
  );
};

export default Card1;
