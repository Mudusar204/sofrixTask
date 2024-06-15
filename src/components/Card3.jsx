import React from "react";

const Card3 = () => {
  return (
    <div className="card3 px-[30px] py-[70px] ">
      <div className="bg-white flex justify-between items-center max-md:flex-col  rounded-[25px] h-[600px] max-md:h-[386px] w-full px-[70px] max-lg:px-[40px]">
        <div className="flex-1 relative  h-[500px]  max-md:w-[233px] max-md:h-[185px]">
          <img
            src="/section2-card3.svg"
            className="absolute max-md:left-2 max-md:top-4 transform transition-transform duration-300 hover:scale-125"
            alt=""
          />
          <img
            src="/section2-card2.svg"
            className="absolute top-[115px] left-[30px] max-md:left-4 max-md:top-[60px] transform transition-transform duration-300 hover:scale-125"
            alt=""
          />
          <img
            src="/section2-card1.svg"
            className="absolute top-[170px] left-[-10px] max-md:left-0 max-md:top-20 transform transition-transform duration-300 hover:scale-125"
            alt=""
          />
        </div>
        <div className="flex-1">
          <p className="text-[#127398] text-[30px] leading-[40px] font-[500] pl-[100px] max-md:pl-0 max-md:text-[20px]  max-md:leading-[20px]    max-md:mt-10 max-md:text-center">
            <b className="text-[33px] max-md:text-[23px]">
              Track your net worth{" "}
            </b>
            automatically and spend less time managing your personal finances.
            No need to update spreadsheets manually anymore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
