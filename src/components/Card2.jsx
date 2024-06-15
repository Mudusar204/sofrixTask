import React from "react";

const Card2 = () => {
  return (
    <div className="card2 px-[30px] py-[70px] max-md:px-[20px] max-md:py-[35px]">
      <div className="bg-white flex justify-between items-center max-md:flex-col-reverse  rounded-[25px] h-[600px] max-md:h-[386px] w-full px-[70px] max-lg:px-[40px]">
        <div className="flex-1">
          <p className="text-[#127398] text-[30px] max-md:text-[20px] leading-[40px] max-md:leading-[20px] font-[500] ml-[50px] mr-[50px] max-md:ml-0 max-md:mr-0 max-md:mt-8 max-md:text-center">
            <b className="text-[33px] max-md:text-[23px]">
              Connect your brokerage accounts
            </b>
            and get access to trading ideas, aggregated stats and discussions in
            your tech investing community right away.
          </p>
        </div>
        <div className="flex-1 relative  h-[480px]  max-md:w-[233px] max-md:h-[175px] ">
          <img
            src="/section1-card3.svg"
            className="absolute  left-[30px] max-md:left-0 max-md:top-4 transform transition-transform duration-300 hover:scale-125"
            alt=""
          />
          <img
            src="/section1-card2.svg"
            className="absolute top-[60px] left-[-10px] max-md:top-8 transform transition-transform duration-300 hover:scale-125"
            alt=""
          />
          <img
            src="/section1-card1.svg"
            className="absolute top-[160px] max-md:top-[70px] max-md:left-[-10px] transform transition-transform duration-300 hover:scale-125"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card2;
