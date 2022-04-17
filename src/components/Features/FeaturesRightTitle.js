import React from "react";
import features from "../../images/features/featurse.png";
import { useNavigate } from "react-router-dom";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const FeaturesRightTitle = ({ title, subTitle, price, buttonText, route }) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 pt-16 pb-12 bg-white lg:px-12 xl:px-32  gap-8 shadow-3xl">
        <div className="col-span-1 xl:col-span-2  flex justify-center items-center ">
          <img src={features} alt="" />
        </div>
        <div className="col-span-1 xl:col-span-2 pl-5 sm:pl-16  ">
          <h1 className="text-main font-bold text-2xl md:text-4xl lg:text-4xl xl:text-5xl">
            {title}
          </h1>
          <p className="text-third font-normal text-lg lg:text-base xl:text-xl py-2.5">
            {subTitle}
          </p>
          <div className="pt-4">
            <h6 className="text-second"> As low as</h6>
            <p className="">
              <span className="text-second text-5xl font-extrabold ">
                {price}
              </span>
              <span className="text-second text-2xl font-semibold">/mo</span>
            </p>
          </div>
          <div className="pt-6">
            <button
              className="flex justify-center items-center bg-main py-3.5 px-7 rounded-full uppercase text-sm hover:bg-second transition-all duration-500 text-white font-medium "
              onClick={() => navigate(`/${route}`)}
            >
              <p>{buttonText}</p>
              <ArrowNarrowRightIcon className="w-6 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesRightTitle;
