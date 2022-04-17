import React from 'react';
import { FaMailBulk } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="py-16 bg-six">
      <div className="container mx-auto ">
        <div className="lg:mx-10 bg-main py-14 px-16 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
            <div className="col-span-4">
              <h1 className="text-3xl font-bold text-white">
                Join My Newsletter
              </h1>
              <p className="text-sm text-white pt-4 font-light racking-wide ">
                Join my newsletter for offer and latest update , new services
              </p>
            </div>
            <div className="col-span-4">
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 items-center">
                <div className="col-span-3">
                  <div className="flex items-center border-b">
                    <FaMailBulk className="text-white text-3xl" />
                    <input
                      type="email"
                      name="email"
                      id=""
                      className=" ml-2 text-white bg-transparent focus:outline-none block w-full pl-4 py-2.5  sm:text-sm border-0 rounded-md max-w-[250]"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <button className="py-2.5 px-8 rounded-full bg-white text-main hover:bg-mains hover:text-white lg:ml-5 mt-5 md:mt-0">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;