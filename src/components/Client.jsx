import React, { useEffect, useRef, useState } from "react";
import CountUp from 'react-countup';
import gsap from "gsap";
import { useGSAP, } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import clientLogo1 from '../assets/clientLogos/logo1.png'
import clientLogo2 from '../assets/clientLogos/logo2.png'
import clientLogo3 from '../assets/clientLogos/logo3.png'
import clientLogo4 from '../assets/clientLogos/logo4.png'
import clientLogo5 from '../assets/clientLogos/logo5.png'
import clientLogo6 from '../assets/clientLogos/logo6.png'
import clientLogo7 from '../assets/clientLogos/logo7.png'
import clientLogo8 from '../assets/clientLogos/logo8.png'
import clientLogo9 from '../assets/clientLogos/logo9.png'
import clientLogo10 from '../assets/clientLogos/logo10.png'
import clientLogo11 from '../assets/clientLogos/logo11.png'
import clientLogo12 from '../assets/clientLogos/logo12.png'
import clientLogo13 from '../assets/clientLogos/logo13.png'
import clientLogo14 from '../assets/clientLogos/logo14.png'
import clientLogo15 from '../assets/clientLogos/logo15.png'
import clientLogo16 from '../assets/clientLogos/logo16.jpeg'

import partnerLogo1 from '../assets/partners/logo1.png'
import partnerLogo2 from '../assets/partners/logo2.png'
import partnerLogo3 from '../assets/partners/logo3.png'
import partnerLogo4 from '../assets/partners/logo4.png'

const Client = () => {

  const ClientLogos = [
    {img: clientLogo1, index : 0},
    {img: clientLogo2, index : 1},
    {img: clientLogo3, index : 2},
    {img: clientLogo4, index : 3},
    {img: clientLogo5, index : 4},
    {img: clientLogo6, index : 5},
    {img: clientLogo7, index : 6},
    {img: clientLogo8, index : 7},
    {img: clientLogo9, index : 8},
    {img: clientLogo10, index : 9},
    {img: clientLogo11, index : 10},
    {img: clientLogo12, index : 11},
    {img: clientLogo13, index : 12},
    {img: clientLogo14, index : 13},
    {img: clientLogo15, index : 14},
    {img: clientLogo16, index : 15},
  ];

  const partnerLogos = [partnerLogo1,partnerLogo2,partnerLogo3,partnerLogo4];

  const wrapperRef = useRef();
  const [statsInView,setStatsInView] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    wrapperRef.current.addEventListener('mouseover',(e)=>{
      t1.pause();
      t2.pause();
    })
    wrapperRef.current.addEventListener('mouseout',(e)=>{
      t1.play();
      t2.play();
    })
  },[])
  const t1 = gsap.timeline();
  const t2 = gsap.timeline();
  useGSAP(()=>{
    t1.to(wrapperRef.current,{
      rotate : "360deg",
      duration : 25,
      repeat : -1,
      ease : "none"
    })
    t2.to('.img',{
      rotate : "-=360deg",
      duration : 25,
      repeat : -1,
      ease : "none"
    })
    gsap.from('#clients-title',{
      opacity : 0,
      duration : 1.5,
      scrollTrigger : {
        trigger : '#clients-title',
        start : "top bottom",
      }
    })
    gsap.to('.stats',{
      scrollTrigger : {
        trigger : '.stats',
        start : "top bottom",
        end : "bottom top",
        onToggle : ({isActive}) => setStatsInView(true),
      }
    })
    gsap.from('.partners',{
      y: 200,
      duration : 1.2,
      stagger : 0.2,
      scrollTrigger : {
        trigger : '.partners',
        start : "top bottom",
      }
    })
    gsap.from('#partners-title',{
      opacity : 0,
      duration : 1.5,
      scrollTrigger : {
        trigger : '#partners-title',
        start : "top bottom",
      }
    })
  },[])
  return (
    <div className="w-full flex h-screen bg-gradient-to-tr from-gray-700 via-gray-900  to-gray-700">
      {/* our clients */}
      <div className="hidden xl:flex relative items-center w-[45vw] h-full">
        
        {/* outer wrapper */}
      <div className= "hidden xl:flex justify-center items-center relative h-[45vw] w-[45vw] -translate-x-80">
          <h1 id="clients-title" className="absolute right-[15vw] text-[2vw] w-20 text-white font-bold">OUR CLIENTS</h1>
        <div ref={wrapperRef} className= "wrapper flex  items-center relative h-full w-full" style={{boxShadow: "inset 0 0 0 15vh #D3D3D3",borderRadius:"50%"}}> 
              {ClientLogos.map((item)=>{
                return (
                <div style={{transform: `rotate(calc(360deg/${ClientLogos.length} *${item.index}))`,transformOrigin: "22.5vw"}} key={item.index} className=" absolute z-10 top-[50%]  bottom-[50%] left-0 w-28 flex justify-center items-center">
                  <img style={{transform: `rotate(calc(360deg/-${ClientLogos.length} *${item.index}))`}} src={item.img} className={`img w-24 p-1`}></img>
                  </div>
                )
              })}
        </div>
      </div>
      </div>
      {/* stats and partners*/}
      <div className="flex h-full flex-col pr-6">
        {/* stats */}
        <div className="flex justify-between text-white text-6xl mt-24 stats">
              {/* <h1 className="">{statsInView && <CountUp start={0} end={55} duration={4}></CountUp>}+ Clients</h1> */}
              {/* <h1 className="">{statsInView &&<CountUp start={0} end={8000} duration={4}></CountUp>}+ sqkm</h1>
              <h1 className="">{statsInView &&<CountUp start={0} end={70} duration={4}></CountUp>}+ Projects</h1> */}
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-blue-300">{statsInView && <CountUp start={0} end={55} duration={4}></CountUp>}+</h1>
                <h1 className=""> Clients</h1>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-blue-300">{statsInView &&<CountUp start={0} end={8000} duration={4}></CountUp>}+</h1>
                <h1 className=""> sqkm</h1>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-blue-300">{statsInView &&<CountUp start={0} end={70} duration={4}></CountUp>}+</h1>
                <h1 className=""> Projects</h1>
              </div>
        </div>
         {/* partners    */}
         <div className="flex flex-col mt-24 items-center justify-center">
              <h1 id="partners-title" className="text-5xl font-sans text-white font-semibold">OUR PARTNERS</h1>
            {/* partners logo wrapper */}
              <div className="mt-12 grid grid-cols-4  bg-slate-300 gap-6 p-6 rounded-lg overflow-hidden">
               {
                  partnerLogos.map((logo,index)=>{
                    return (
                    <div key={index} className="partners">
                      <img className="w-40 px-2" src={logo}></img>
                    </div>)
                  })
               }
              </div>
         </div>
      </div>
    </div>
  );
};

export default Client;
