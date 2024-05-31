import React from "react";
import { Logo } from "../assets";
import NavLeft from "./NavLeft";
import { useState } from "react";

const Navbar = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const handleclick = () => {
    setNavOpen(!NavOpen);
  };

  return (
    <div className="fixed w-full border py-4 select-none bg-black z-[100] border-black items-center flex justify-center">
      <div className="bg-white rounded-full px-2">
        <img src={Logo} width={50} />
      </div>
      <div
        onClick={() => handleclick()}
        className="absolute right-4 cursor-pointer text-white flex flex-col gap-2"
      >
        <div className="min-w-[50px] bg-white min-h-[5px] rounded-xl"></div>
        <div className="min-w-[50px] bg-white min-h-[5px] rounded-xl"></div>
        <div className="min-w-[50px] bg-white min-h-[5px] rounded-xl"></div>
      </div>
      {NavOpen ? <NavLeft /> : null}
    </div>
  );
};

export default Navbar;
