import React from 'react';

const Services = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-col-1 md:grid-flow-col xl:grid grid-rows-3 xl:grid-flow-col gap-4 xl:grid-rows-1">
          <div className="col-span-2 w-full h-36 bg-lime-700 ">g</div>
          <div className="col-span-2 w-full h-36 bg-lime-700 ">e</div>
          <div className="col-span-2 w-full h-36 bg-lime-700 ">f</div>
          <div className="col-span-2 w-full h-36 bg-lime-700  ">i</div>
          <div className="col-span-2 row-span-2  w-full h-80 bg-red-800 ">
            j
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;