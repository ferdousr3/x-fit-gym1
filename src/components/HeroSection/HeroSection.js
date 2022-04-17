import React from "react";
import "../../index";
import Button from "../Button/Button";
import group from "../../images/hero/group.png";
import group1 from "../../images/hero/group1.png";
import group2 from "../../images/hero/group2.png";
import group3 from "../../images/hero/group3.png";
import group4 from "../../images/hero/group4.png";
import group5 from "../../images/hero/group5.png";
import { CheckIcon } from "@heroicons/react/solid";

const HeroSection = () => {
  return (
    <section className="main-bg">
      <div className="container mx-auto pt-24 pb-52 ">
        <div className="grid grid-cols-1 md:grid-col-6 lg:grid-cols-6 ">
          <div className="left col-span-1  md:col-span-1 lg:col-span-3 flex justify-center ">
            <div className="div">
              <h1 className=" pr-0 text-3xl md:text-4xl lg:text-5xl  xl:text-7xl xl:pr-32 md:leading-9 lg:leading-[60px] xl:leading-[90px] font-semibold text-main">
                High-speed Web Hosting
              </h1>
              <p className="text-third text-xl pt-5 ">
                The best price at the marketplace ever!
              </p>
              <div className="btn">
                <Button text="get started" route="contact" />
              </div>
              <p className="flex items-center pt-6 text-md">
                <CheckIcon className="w-5 h-6  mr-2 text-second font-bold  " />
                <span className="text-third" >30-day money-back guarantee</span>
              </p>
            </div>
          </div>
          <div className=" w-full flex justify-center  col-span-1 xl:flex xl:justify-end md:col-span-1  lg:col-span-3 pt-8 sm:pt-4 lg:pt-0 xl:pt-0 ">
            <div className="pt-8 md:pt-0 ">
              <div className=" text-5xl md:text-[10rem] xl:flex xl:justify-end ">
                <h1 className="text-second font-bold">
                  <span className=" md:text-9xl ">
                    <sup>
                      <span className="md:text-6xl xl:text-[6rem]">$</span>
                    </sup>
                    <span className="md:text-[10rem]">0</span>
                    <sup>
                      <span className="xl:text-[6rem]">.99</span>
                    </sup>
                  </span>
                  <span className=" text-2xl md:text-4xl font-normal">
                    /month
                  </span>
                </h1>
              </div>
              <div className=" pt-20 w-full grid grid-cols-2 lg:grid-cols-3 items-center gap-8">
                <img className="col-span-1" src={group} alt="" />
                <img className="col-span-1" src={group1} alt="" />
                <img className="col-span-1" src={group2} alt="" />
                <img className="col-span-1" src={group3} alt="" />
                <img className="col-span-1" src={group4} alt="" />
                <img className="col-span-1" src={group5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
