import React from "react";

const statisticsData = [
  { value: "2.5k +", label: "Jobs done successfully" },
  { value: "2.2k +", label: "Happy clients" },
  { value: "98%", label: "Daily active engagements" },
  { value: "72 +", label: "Trusted companies" },
];

function StatsSection() {
  return (
    <section className="analytics pt-14 pb-20 px-5 lg:px-10 xl:px-2 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
      {statisticsData.map(({ value, label }, index) => (
        <div key={index} className="flex flex-col gap-y-5">
          <h3 className="text-2xl lg:text-4xl font-bold text-center text-slate-900">
            {value}
          </h3>
          <p className="text-center text-sm lg:text-base text-[#242424]">
            {label}
          </p>
        </div>
      ))}
    </section>
  );
}

export default StatsSection;


