import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { slug, name, price, img, description } = service;

  const navigate = useNavigate();
  const handleToServiceDetails = (slug) => {
    const dName = service.name;
    console.log(dName);
    navigate(`/order/${slug}`);
  };
  // const handleToOrder = (slug) => {
  //   const path = "/order";
  //   navigate(path);
  // };

  return (
    <div className="lg:col-span-2 w-auto pb-4 shadow-4xl hover:shadow-5xl bg-white m-2 rounded ">
      <img className="w-full h-48" src={img} alt="" />
      <div className="px-4 pt-4">
        <h1 className="text-second text-2xl font-extrabold">{name}</h1>
        <h6 className="text-lg font-medium">
          Price: <span className="text-mains">${price}</span>
        </h6>
        <p className="text-sm text-four">{description.slice(0, 80)}</p>
        <button
          onClick={() => handleToServiceDetails(slug)}
          className="py-2 px-4 mt-3 bg-main hover:bg-mains text-white rounded-full"
        >
          start now
        </button>
        {/* <button
          onClick={handleToOrder}
          className="py-2 px-4 mt-3 bg-main hover:bg-mains text-white rounded-full"
        >
          start now
        </button> */}
      </div>
    </div>
  );
};

export default Service;
