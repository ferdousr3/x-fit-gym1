import React from "react";
import "../../index";
import Button from "../Button/Button";
import roll from "../../images/hero/roll.png";
import dumbel from "../../images/hero/dumbel.png";
import body from "../../images/hero/body.png";

import { CheckIcon } from "@heroicons/react/solid";

const HeroSection = () => {
  return (
    <section className="bg-six">
      <div className=" pt-36 pb-5 container mx-auto ">
        <div className="grid grid-cols-1 md:grid-col-6 lg:grid-cols-6  ">
          <div className="left col-span-1  md:col-span-1 lg:col-span-3 flex justify-center ">
            <div className="div">
              <h1 className="text-lg text-main pb-5 font-medium ">
                Wellcome to x-fit
              </h1>
              <h2 className=" pr-0 text-3xl md:text-4xl lg:text-4xl  xl:text-5xl  leading-[35px] md:leading-[50px] xl:leading-[50px] font-bold text-second">
                Become More Healthy and Stay Sporty
              </h2>
              <p className="text-four font-light text-base pt-5 xl:pr-28">
                A health club is a place that houses exercise equipment for the
                purpose of physical exercise. I provide some gym services for
                very low price,I have some excellent packages.
              </p>
              <div className="btn">
                <Button text="Get started" route="contact" />
              </div>
              <p className="flex items-center pt-6 text-md">
                <CheckIcon className="w-5 h-6  mr-2 text-mains font-bold  " />
                <span className="text-four">30-day money-back guarantee</span>
              </p>
            </div>
          </div>
          <div className="  w-full flex justify-center  col-span-1 xl:flex xl:justify-center md:col-span-1  lg:col-span-3 pt-8 sm:pt-4 lg:pt-0 xl:pt-0 ">
            <div className="pt-8 md:pt-0 ">
              <div className=" text-5xl flex justify-center md:text-[10rem] xl:flex xl:justify-end ">
                <div className="relative ">
                  <div className=" w-72 h-72 md:min-w-[450px] md:min-h-[450px]  xl:min-w-[450px]  xl:min-h-[450px] border-t-[40px] md:border-t-[55px]  xl:border-t-[55px] border-b-[5px] md:border-b-[10px]  xl:border-b-[10px] border-l-[15px] md:border-l-[25px]  xl:border-l-[25px] border-r-[15px] md:border-r-[25px] xl:border-r-[25px] border-main rounded-full bg-mains">
                    <div className="flex justify-center items-center  w-full">
                      <h1 className="text-white mt-16 font-semibold">
                        <span className=" md:text-2xl">
                          <sup className="font-light text-[2rem] xl:text-[3rem]">
                            $
                          </sup>
                          <span className="md:text-[4rem]">0</span>
                          <sup className=" font-light text-[2rem] xl:text-[3rem]">
                            .99
                          </sup>
                        </span>
                        <span className=" text-xl md:text-xl font-normal">
                          /month
                        </span>
                      </h1>
                    </div>
                  </div>
                  <img
                    className=" absolute w-16 h-16 md:w-24 md:h-24 rounded bg-white shadow-4xl top-[10%] right-0"
                    src={roll}
                    alt=""
                  />
                  <img
                    className=" z-50 absolute w-16 h-16 md:w-24 md:h-24 rounded bg-white shadow-4xl top-[70%] left-[-10px] md:left-[-30px] "
                    src={dumbel}
                    alt=""
                  />
                  <img
                    className="  absolute w-[500px] h-[400px] md:w-[600px] md:h-[550px] rounded top-[-60px]  md:top-[-80px] "
                    src={body}
                    alt=""
                  />
                </div>
              </div>
              <div className=" pt-20 w-full grid grid-cols-2 lg:grid-cols-3 items-center gap-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
