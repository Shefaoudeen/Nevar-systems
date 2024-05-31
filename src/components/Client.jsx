import React from "react";
import logo1 from '../assets/clientLogos/logo1.png'
import logo2 from '../assets/clientLogos/logo2.png'
import logo3 from '../assets/clientLogos/logo3.png'
import logo4 from '../assets/clientLogos/logo4.png'
import logo5 from '../assets/clientLogos/logo5.png'
import logo6 from '../assets/clientLogos/logo6.png'
import logo7 from '../assets/clientLogos/logo7.png'
import logo8 from '../assets/clientLogos/logo8.png'
import logo9 from '../assets/clientLogos/logo9.png'
import logo10 from '../assets/clientLogos/logo10.png'
import logo11 from '../assets/clientLogos/logo11.png'
import logo12 from '../assets/clientLogos/logo12.png'
import logo13 from '../assets/clientLogos/logo13.png'
import logo14 from '../assets/clientLogos/logo14.png'
import logo15 from '../assets/clientLogos/logo15.png'
import logo16 from '../assets/clientLogos/logo16.jpeg'

import gsap from "gsap";
import { useGSAP } from '@gsap/react';
const Client = () => {

  const logos = [
    {img: logo1, index : 0},
    {img: logo2, index : 1},
    {img: logo3, index : 2},
    {img: logo4, index : 3},
    {img: logo5, index : 4},
    {img: logo6, index : 5},
    {img: logo7, index : 6},
    {img: logo8, index : 7},
    {img: logo9, index : 8},
    {img: logo10, index : 9},
    {img: logo11, index : 10},
    {img: logo12, index : 11},
    {img: logo13, index : 12},
    {img: logo14, index : 13},
    {img: logo15, index : 14},
    {img: logo16, index : 15},
  ];

  useGSAP(()=>{
    gsap.to('.wrapper',{
      rotate : "360deg",
      duration : 25,
      repeat : -1,
      ease : "none"
    })
    gsap.to('.img',{
      rotate : "-=360deg",
      duration : 25,
      repeat : -1,
      ease : "none"
    })
  },[])

  return (
    <div className="w-full h-screen bg-gray-900">
      {/* our clients */}
      <div className="relative flex  align items-center w-6/12 h-full">
        
        {/* outer wrapper */}
          <h1 className="absolute z-50  left-[3%] text-3xl max-w-fit text-white">OUR CLIENTS</h1>
        <div className= "wrapper flex justify-center items-center relative h-[90vh] w-[90vh] rounded-full  -translate-x-80" style={{boxShadow: "inset 0 0 0 15vh #D3D3D3"}}> 
              {logos.map((item)=>{
                return (
                <div style={{transform: `rotate(calc(360deg/${logos.length} *${item.index}))`,transformOrigin: "45vh"}} key={item.index} className=" absolute z-10 top-[50%]  bottom-[50%] left-0 w-28 flex justify-center items-center">
                  <img style={{transform: `rotate(calc(360deg/-${logos.length} *${item.index}))`}} src={item.img} className={`img w-24 p-1`}></img>
                  </div>
                )
              })}
        </div>
      </div>
    </div>
  );
};

export default Client;
