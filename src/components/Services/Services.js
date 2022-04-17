import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import SectionSideTitle from "../Title/SectionSideTitle";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <div className="container mx-auto  py-16">
        <div className="grid lg:grid-cols-7 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-4 ">
            <div className="grid lg:grid-cols-4 gap-4 ">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="lg:col-span-2 w-auto pb-4 shadow-4xl hover:shadow-5xl bg-white m-2 rounded "
                >
                  <img className="w-full h-48" src={service.img} alt="" />
                  <div className="px-4 pt-4">
                    <h1 className="text-second text-2xl font-extrabold">
                      {service.name}
                    </h1>
                    <h6 className="text-lg font-medium">
                      Price: <span className="text-mains">${service.price}</span>
                    </h6>
                    <p className="text-sm text-four">
                      {service.description.slice(0, 80)}
                    </p>
                    <button className="py-2 px-4 mt-3 bg-main hover:bg-mains text-white rounded-full" > start now  </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-3 h-full ">
            <div className="items-center pt-20">
              <SectionSideTitle
                title="Services"
                subTitle="Guarantee Feel Free From Pain Again"
                description="I Provide this type services like Online Class , Consultation, Diet Program, Personal Trining, All Services Have a good rating and good reviews "
              />
              <Button text='Services' route='order' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
