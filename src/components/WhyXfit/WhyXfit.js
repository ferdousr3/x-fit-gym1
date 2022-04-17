import React from "react";
import SectionSideTitle from "../Title/SectionSideTitle";
import WhyXfitItems from "./WhyXfitItems";
import { FaBook,  FaRegClock, FaUsers } from "react-icons/fa";
import { BsChatSquareText } from "react-icons/bs";

const WhyXfit = () => {
  return (
    <div className="py-16 bg-six">
      <div className="container mx-auto">
        <div className="grid grid-cols-1  lg:grid-cols-8 gap-8">
          <div className="col-span-4">
            <SectionSideTitle
              title="Why x-fit better"
              subTitle="X-fit Provide Proper Services that you want"
              description="X-fit services is better than other gym and extra facility that you want, every client is my priority first. so you will get your services that you exactly want please check my all services "
            />
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-1 lg:grid-cols-4">
              <div className="col-span-2">
                <WhyXfitItems
                  icon={<FaUsers />}
                  iconColor="text-main"
                  text="Global Customer"
                  textColor="text-second"
                  bg="white"
                />
              </div>
              <div className="col-span-2">
                <WhyXfitItems
                  icon={<FaBook />}
                  iconColor="text-white"
                  text="Free Manual Book"
                  textColor="text-white"
                  bg="bg-main"
                />
              </div>

              <div className="col-span-2">
                <WhyXfitItems
                  icon={<FaRegClock />}
                  iconColor="text-white"
                  text="Do It Whenever you Want"
                  textColor="text-white"
                  bg="bg-main"
                />
              </div>
              <div className="col-span-2">
                <WhyXfitItems
                  icon={<BsChatSquareText />}
                  iconColor="text-main"
                  text="Free Health Consultation"
                  textColor="text-second"
                  bg="white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyXfit;
