import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero-text", {
      opacity: "100%",
      translateY: -150,
      duration: 2,
    });
  });

  return (
    <div className="relative select-none border bg-black border-black w-full h-screen items-center flex justify-center text-3xl">
      <div
        id="hero-text"
        className="text-center opacity-0 pt-[200px] text-9xl font-extrabold custom-shadow scale-150"
      >
        <h1 className="tracking-widest text-white">NEVAR</h1>
        <h1 className="tracking-tight -mt-5 text-purple-800">SYSTEMS</h1>
      </div>
    </div>
  );
};

export default Hero;
