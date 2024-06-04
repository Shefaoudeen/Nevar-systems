import React from "react";
import { SparklesCore } from "./ui/sparkles";

const Product = () => {
  return (
    // <div className="border border-black w-full h-screen items-center flex justify-center text-3xl -mt-10">
      // <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        About Us
      </h1>
      
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <p className="text-neutral-500 max-w-xl mx-auto my-2 text-2xl text-center relative z-10 -mt-10 ">
        Nevar Systems develops cutting-edge drone solutions for complex environments. We collect geospatial data, generate insights, and empower professionals in humanitarian aid, surveying, and engineering to make faster decisions.
        </p>
        
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      
      </div>
    </div>
    
    // </div>
  );
};

export default Product;
