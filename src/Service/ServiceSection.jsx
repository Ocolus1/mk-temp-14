import React from "react";
import service from "../assets/service.png";

const processData = [
  {
    title: "A unified platform",
    description: "We are there for you with quick & reliable responses from us",
  },
  {
    title: "Top-tier support",
    description: "We are there for you with quick & reliable responses from us",
  },
  {
    title: "Time efficiency.",
    description: "We are there for you with quick & reliable responses from us",
  },
];

function ServiceSection() {
  return (
    <section className="service__section max-w-5xl mx-auto gap-y-10 gap-x-10 flex flex-col lg:flex-row items-start py-10 px-10">
      <div className="flex items-center justify-center flex-col gap-y-5 max-w-xl mx-auto w-full lg:w-1/2">
        {processData.map(({ title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-y-1 max-w-sm hover:bg-slate-300/20 p-2 px-3.5 rounded-lg cursor-pointer"
          >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-slate-700/70">{description}</p>
          </div>
        ))}
      </div>

      <div className="hero-section-video w-full lg:w-1/2 flex flex-col items-center justify-center gap-y-5">
        <div className="image-container flex items-center justify-center">
          <img className="rounded-xl" src={service} alt="" />
        </div>
        <p className="max-w-lg mx-auto text-center lg:text-left">
          Get to know our awesome features that are absolutely suit for
          everyone.Explore the features and know the best
        </p>
        <button className="border border-black px-5 py-2 w-fit rounded-full">
          Breif your project
        </button>
      </div>
    </section>
  );
}

export default ServiceSection;
