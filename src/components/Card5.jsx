import React from "react";

const Card5 = () => {
  return (
    <div className="card5 px-[30px] py-[70px] ">
      <div className="bg-white flex justify-between items-center         max-md:flex-col  rounded-[25px] h-[600px] max-md:h-[421px] w-full px-[80px] max-lg:px-[40px]">
        <div className="md:card-left flex-1 h-[630px] w-[405px] max-md:w-[245px] max-md:h-[233px]  flex items-center">
          <div className="relative  h-[455px] w-[648px] max-md:w-full max-md:h-full mt-[30px] max-md:mt-[70px] ">
            <p className="md:hidden  text-[14px] whitespace-nowrap  text-center mb-4">
              Investor Reports
            </p>
            <img
              src="/section4-card3.svg"
              className="max-md:h-[140px] max-md:w-[110px] absolute  left-[261px] max-md:left-[100px] max-md:top-10 transform transition-all duration-300 hover:scale-110 hover:left-[300px] max-md:hover:left-[120px] hover:bottom-[30px]"
              alt=""
            />
            <img
              src="/section4-card2.svg"
              className="max-md:h-[140px] max-md:w-[110px] absolute left-[138px] max-md:left-[50px] max-md:top-12 top-[20px] transform transition-all duration-300 hover:scale-110 hover:left-[230px] max-md:hover:left-[70px] max-md:hover:top-[20px] hover:top-[-40px]"
              alt=""
            />
            <img
              src="/section4-card1.svg"
              className="max-md:h-[160px] max-md:w-[120px] absolute left-[-20px] max-md:left-0 transform transition-all duration-300 hover:scale-110 hover:left-[30px] max-md:hover:left-[10px] hover:bottom-[30px]"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-[#127398] text-[30px] leading-[40px] font-[500] pl-[130px] mr-[50px]  max-md:mr-0          max-md:text-[20px]   max-md:pl-0     max-md:leading-[20px]   max-md:mt-12 max-md:text-center ">
            <b className="text-[33px] max-md:text-[23px]">
              Receive personalized investor reports{" "}
            </b>
            and understand how your trading activities contribute to your
            overall wealth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card5;
