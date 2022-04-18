import React from "react";
import useServices from "../../hooks/useServices";
import Button from "../Button/Button";
import Service from "../Service/Service";
import SectionSideTitle from "../Title/SectionSideTitle";

const Services = () => {
  const [services, setServices] = useServices({});

  return (
    <>
      <div className="container mx-auto  py-16">
        <div className="grid lg:grid-cols-7 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-4 ">
            <div className="grid lg:grid-cols-4 gap-4">
              {services.map((service) => (
                <Service key={service.id} service={service} />
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
              <Button text="Services" route="order" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
