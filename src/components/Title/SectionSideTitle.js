import React from "react";

const SectionSideTitle = ({ title, subTitle, description }) => {
  return (
    <div>
      <h1 className="text-lg text-main pb-5 font-medium ">{title}</h1>
      <h2 className=" pr-0 text-3xl md:text-4xl lg:text-4xl  xl:text-5xl  leading-[35px] md:leading-[50px] xl:leading-[50px] font-bold text-second">
        {subTitle}
      </h2>
      <p className="text-four font-light text-base pt-5 xl:pr-10">
        {description}
      </p>
    </div>
  );
};

export default SectionSideTitle;
