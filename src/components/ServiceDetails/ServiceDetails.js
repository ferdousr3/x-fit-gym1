import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
const {serviceSlug} = useParams() 



  return (
    <div className="pt-20">
      <div className="container mx-auto">service details {serviceSlug} </div>
    </div>
  );
};

export default ServiceDetails;
