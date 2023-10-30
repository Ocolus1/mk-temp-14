import React from "react";
import fireIcon from "../assets/fire.svg";
import lightBulbIcon from "../assets/lightbulb.svg";
import checkedBoxIcon from "../assets/checkedbox.svg";

const featuresData = [
  {
    imageUrl: fireIcon,
    title: "A unified platform",
    description: "We provide the most comprehensive approach to every user",
  },
  {
    imageUrl: lightBulbIcon,
    title: "Top-tier support",
    description: "We are there for you with quick & reliable responses from us",
  },
  {
    imageUrl: checkedBoxIcon,
    title: "Time efficiency.",
    description: "Automated quick responses for everyone",
  },
];

function FeatureSection() {
  return (
    <section className="feature-section max-w-5xl px-7 lg:px-10 py-20 mx-auto">
      <div className="flex flex-col gap-y-5 items-center justify-center max-w-md mx-auto">
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold">
          Grow beyond expectation in 4 steps
        </h3>
        <p className="font-medium">
          Get to know our awesome features that are absolutely suit for
          everyone.Explore the features and know the best
        </p>
      </div>
      <div className="w-full pt-10 lg:w-full relative isolate flex flex-col md:flex-row items-start gap-x-5 justify-center gap-y-3.5">
        {featuresData.map(({ imageUrl, title, description }) => (
          <div
            key={title}
            className="feature-card rounded-lg border group p-5 grid h-[200px] grid-rows-[1fr_120px] items-start justify-start gap-y-2 w-full"
          >
            <div>
              <img className="w-8 h-8" src={imageUrl} alt="" />
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-lg  font-semibold">{title}</h3>
              <p className=" text-slate-700/70">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
