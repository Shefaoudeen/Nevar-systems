import React, { useState } from "react";
import video1 from "../assets/ourServices/video1.mp4";
import video2 from "../assets/ourServices/video2.mp4";
import video3 from "../assets/ourServices/video3.mp4";
import video4 from "../assets/ourServices/video4.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const videos = [video1, video2, video3, video4];
const Service1 = () => {

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from('#services-text',{
      opacity : 0,
      duration : 2,
      scrollTrigger : {
        trigger : '#services-text',
        start : "center bottom",
      }
    })
    // gsap.from('.vid-left',{
    //   xPercent : -30,
    //   duration : 1,
    //   scrollTrigger : {
    //     trigger : '#services-text',
    //     start : "center bottom",
    //   }
    // })
    // gsap.from('.vid-right',{
    //   xPercent : 30,
    //   duration : 1,
    //   scrollTrigger : {
    //     trigger : '#services-text',
    //     start : "center bottom",
    //   }
    // })
  })

  const [hoveringVideo,setHoveringVideo] = useState(0);
  
  return (
    <>
      <div className="relative h-screen w-screen bg-white flex items-center justify-center select-none">
        {/* <div className="z-5 absolute min-h-40 w-screen bg-gradient-to-b from-black to-white top-0 "></div> */}
        <div className="relative grid grid-cols-2 grid-rows-2 h-[60vh] md:h-[75vh] w-[85vw] gap-x-40 gap-y-6 grid-container">
          <div className="absolute h-full flex justify-center items-center flex-shrink w-full">
            <h1
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
              className=" z-2 text-5xl font-extrabold text-slate-500"
              id="services-text"
            >
              SERVICES
            </h1>
          </div>
          <div className= {`rounded-lg overflow-hidden flex items-center justify-center object-contain p-12 vid hover:scale-110 duration-300 vid-left ${(hoveringVideo==1 || hoveringVideo==0)? "" : "blur-sm"}`}>
            <video onMouseOver={(e) => {e.target.play(); setHoveringVideo(1)}} onMouseLeave={(e) => {e.target.pause(); setHoveringVideo(0)}} muted  loop src={videos[0]}>
            </video>
          </div>
          <div className={`rounded-lg overflow-hidden flex items-center justify-center object-contain p-12 vid hover:scale-110 duration-300 vid-right ${(hoveringVideo==2 || hoveringVideo==0)? "" : "blur-sm"}`}>
            <video onMouseOver={(e) => {e.target.play(); setHoveringVideo(2)}} onMouseLeave={(e) => {e.target.pause(); setHoveringVideo(0)}} muted loop  src={videos[1]}>
            </video>
          </div>
          <div className={`rounded-lg overflow-hidden flex items-center justify-center object-contain p-10 vid hover:scale-110 duration-300 vid-left ${(hoveringVideo==3 || hoveringVideo==0)? "" : "blur-sm"}`}>
            <video onMouseOver={(e) => {e.target.play(); setHoveringVideo(3)}} onMouseLeave={(e) => {e.target.pause(); setHoveringVideo(0)}}  muted loop  src={videos[2]}>
            </video>
          </div>
          <div className={`rounded-lg overflow-hidden flex items-center justify-center object-contain p-10 vid hover:scale-110 duration-300 vid-right ${(hoveringVideo==4 || hoveringVideo==0)? "" : "blur-sm"}`}>
            <video onMouseOver={(e) => {e.target.play(); setHoveringVideo(4)}} onMouseLeave={(e) => {e.target.pause(); setHoveringVideo(0)}} muted loop  src={videos[3]}>
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service1;
