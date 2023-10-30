import React from "react";
import benefitImage from "../../src/assets/benefit-image.png";
import lighting from "../../src/assets/lightning.svg";
import plus from "../../src/assets/plus.svg";

const BenefitPostData = [
  {
    img: lighting,
    title: "Site map & user flow",
    description:
      "Business strategy is an online course that enables anyone to think & act strategically",
    bgColor: "bg-[#FFF2CC]",
  },
  {
    img: plus,
    title: "Wire framing/Low fidelity",
    description:
      "You'll learn an effective framework that some of the world's best companies use",
    bgColor: "bg-[#DDF2E6]",
  },
];

const BenefitPost = ({ title, description, img, bgColor }) => (
  <div className="flex items-center justify-center gap-x-5">
    <div className={`${bgColor} px-3.5 py-2  rounded-full`}>
      <img className="h-8 w-8" src={img} alt="" />
    </div>
    <div className="flex flex-col gap-y-2">
      <h3 className="text-black text-base md:text-lg lg:text-xl font-bold">
        {title}
      </h3>
      <p className="text-zinc-700/70 font-medium text-sm lg:text-base">
        {description}
      </p>
    </div>
  </div>
);

const BenefitSection = () => (
  <section className="benefit__section pt-12 pb-4 px-0 lg:px-14 lg:py-16">
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-x-10">
      <div className="benefit-left-part w-full p-8 px-10 lg:p-0 lg:w-1/2 mx-auto">
        <img className="rounded-xl mx-auto ld:mx-0" src={benefitImage} alt="" />
      </div>
      <div className="benefit-right-part w-full px-10 py-2 lg:p-0 lg:w-1/2 max-w-2xl mx-auto">
        <div className="benefit-headline flex flex-col gap-y-2">
          <h2 className="text-2xl md:text-3xl font-bold leading-[1.15] text-black">
            Our clients have experienced a proven growth rate of 2400%.
          </h2>
        </div>
        <div className="benefit-post py-10 flex flex-col gap-y-7">
          {BenefitPostData.map((post, index) => (
            <BenefitPost
              key={index}
              title={post.title}
              description={post.description}
              img={post.img}
              bgColor={post.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BenefitSection;
