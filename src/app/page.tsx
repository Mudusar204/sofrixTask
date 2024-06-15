import React from "react";
import Image from "next/image";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
const Home = () => {
  return (
    <div>
      <img
        className="w-full h-auto mb-[-5px]"
        src={"/faces.svg"}
        alt="home faces"
      />
      <section className="w-full h-auto bg-[#00ABE1] bg-opacity-1">
        <Card1 />
      </section>
      <section className="w-full h-auto bg-[#3994E9] bg-opacity-1">
        <Card2 />
      </section>
      <section className="w-full h-auto bg-[#31CE5D] bg-opacity-1">
        <Card3 />
      </section>
      <section className="w-full h-auto bg-[#FBBC12] bg-opacity-1">
        <Card4 />
      </section>
      <section className="w-full h-auto bg-[#9F73C2] bg-opacity-1">
        <Card5 />
      </section>
    </div>
  );
};

export default Home;
