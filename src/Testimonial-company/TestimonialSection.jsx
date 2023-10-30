import React from "react";
import google from "../../src/assets/google.svg";
import rrr from "../../src/assets/RRR.svg";
import slack from "../../src/assets/slack.svg";
import zoom from "../../src/assets/zoom.svg";
import adobe from "../../src/assets/adobe.svg";

function TestimonialCompany() {
  return (
    <section className="testimonial-company flex flex-col gap-y-5 lg:gap-y-10 items-center justify-center p-5 lg:py-10">
      <div className="flex flex-col gap-y-5 items-center justify-center max-w-lg mx-auto">
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold">
          B2B digital marketing agency with multiple awards
        </h3>
        <p className="font-medium">
          Get to know our awesome features that are absolutely suit for
          everyone.Explore the features and know the best
        </p>
      </div>
      <div className="company-logo flex flex-wrap max-w-xs mx-auto items-center lg:w-full lg:max-w-4xl justify-evenly lg:justify-between gap-10">
        <img
          className="w-[20%] lg:w-[7%] aspect-[16/9] object-contain"
          src={google}
          alt=""
        />
        <img
          className="w-[20%] lg:w-[7%] aspect-[16/9] object-contain"
          src={rrr}
          alt=""
        />
        <img
          className="w-[20%] lg:w-[7%] aspect-[16/9] object-contain"
          src={slack}
          alt=""
        />
        <img
          className="w-[20%] lg:w-[7%] aspect-[16/9] object-contain"
          src={zoom}
          alt=""
        />
        <img
          className="w-[20%] lg:w-[7%] aspect-[16/9] object-contain"
          src={adobe}
          alt=""
        />
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-[#FFD036] w-fit hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 text-black font-semibold text-xs lg:text-base rounded-full px-7 py-2.5">
          Hire an expert
        </button>
      </div>
    </section>
  );
}

export default TestimonialCompany;
