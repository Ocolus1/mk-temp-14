import React from "react";
import Navbar from "../Navbar";
import herosvg from "../assets/herosection-rightside.png";
import company1 from "../assets/company-1.svg";
import company2 from "../assets/company-2.svg";
import company3 from "../assets/company-3.svg";
import company4 from "../assets/company-4.svg";

function HeroSection() {
  return (
    <section className="hero__section">
      <Navbar />
      <div className="hero__container px-7 lg:px-10 max-w-6xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-24">
        <div className="hero-content lg:w-1/2 lg:px-5 flex flex-col gap-y-5">
          <h1 className="text-4xl md:text-5xl xl:text-[50px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold text-black">
            Grow your <span className="font-extrabold">Revenue</span> across multiple marketing channels
          </h1>
          <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left">
            Build skills with courses, certificates and get online knowledge from our world-class platform
          </p>
          <button className="bg-[#FFD036] w-fit hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 text-black font-semibold text-xs lg:text-base rounded-full px-5 py-3">
            Try free
          </button>
        </div>
        <div className="hero-image relative isolate md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0">
          <img
            className="h-auto rounded-3xl w-full lg:h-auto md:w-[400px] md:mx-auto lg:w-[800px] xl:w-[1024px] drop-shadow-xl relative"
            src={herosvg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
