import React from "react";

const Card4 = () => {
  return (
    <div className="card4 px-[30px] py-[70px] ">
      <div className="bg-white flex justify-between  items-center max-md:flex-col-reverse  rounded-[25px] h-[600px] max-md:h-[486px] w-full px-[80px] max-lg:px-[40px]">
        <div className="flex-1">
          <p className="text-[#127398] text-[30px] max-md:text-[20px] leading-[40px] font-[500] px-[50px] max-md:px-0     max-md:leading-[20px]   max-md:mt-12 max-md:text-center ">
            <b className="text-[33px] max-md:text-[23px]">
              Automate monitoring{" "}
            </b>
            of your trading accounts 24/7. Control your risks and manage your
            portfolio like a PRO.
          </p>
        </div>
        <div className="md:card-right flex-1 h-[630px] w-[470px] max-md:w-[233px] max-md:h-[286px] max-md:mt-12 flex items-center justify-center">
          <div className="relative  h-[455px] w-[504px] flex flex-col  items-center max-md:h-full max-md:w-full">
            <p className="md:hidden  text-[14px] whitespace-nowrap  text-center mb-4">
              Introducing Guardian Angel 😇
            </p>
            <img
              src="/section3-card3.svg"
              className=" transform transition-transform duration-300 hover:scale-110"
              alt=""
            />
            <img
              src="/section3-card2.svg"
              className=" mt-[15px] max-md:mt-2 transform transition-transform duration-300 hover:scale-110"
              alt=""
            />
            <img
              src="/section3-card1.svg"
              className=" mt-[15px] max-md:mt-2 transform transition-transform duration-300 hover:scale-110"
              alt=""
            />
            <input
              type="text "
              className="w-[450px] max-md:w-full bg-white p-[7px] border border-gray-200 rounded-md mt-[25px] max-md:mt-3"
              placeholder="Notify me."
            />
            <button className="rounded-[50px] whitespace-nowrap px-16 max-md:px-8  py-[4px] max-md:py-[2px] max-md:text-[12px] text-white mt-[20px] max-md:mt-2 bg-[#bfeaf7]">
              Add Notification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
