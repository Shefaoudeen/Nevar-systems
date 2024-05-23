import React from "react";

const Footer = () => {
  return (
    <div className="relative border border-black w-full h-screen items-center flex justify-center text-3xl">
      Footer
      <div className="absolute bottom-0 text-xl font-bold bg-slate-600 w-full text-center text-white py-1">
        {" "}
        Developed by{" "}
        <a href="https://ptu-designclub.netlify.app/" target="_blank">
          <span className="hover:text-slate-400 cursor-pointer">
            PTU Design Club
          </span>
        </a>{" "}
      </div>
    </div>
  );
};

export default Footer;
