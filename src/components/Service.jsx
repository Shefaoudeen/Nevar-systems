import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Service = () => {
  useGSAP(() => {
    gsap.to("#about", {
      opacity: "75%",
      duration: 4,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
      id="about"
      className="text-gray-400 flex-col flex relative select-none gap-10 w-full h-screen items-center justify-center text-3xl opacity-50"
    >
      <div className="absolute  text-8xl items-center text-center font-extrabold">
        <div>S</div>
        <div>E</div>
        <div>R</div>
        <div>V</div>
        <div>I</div>
        <div>C</div>
        <div>E</div>
      </div>
      <div className="flex items-center gap-10 justify-around w-full">
        <div className="min-w-[500px] min-h-[300px] rounded-2xl bg-gray-400"></div>
        <div className="min-w-[500px] min-h-[300px] rounded-2xl bg-gray-400"></div>
      </div>
      <div className="flex items-center gap-10 justify-around w-full">
        <div className="min-w-[500px] min-h-[300px] rounded-2xl bg-gray-400"></div>
        <div className="min-w-[500px] min-h-[300px] rounded-2xl bg-gray-400"></div>
      </div>
    </div>
  );
};

export default Service;
