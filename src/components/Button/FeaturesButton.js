import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const FeaturesButton = ({ text, route }) => {
  const navigate = useNavigate();
  return (
    <div className="flex pt-0">
      <button
        className="flex justify-center items-center bg-main py-3.5 px-7 rounded-full uppercase text-sm hover:bg-second transition-all duration-500 text-white font-medium "
        onClick={() => navigate(`/${route}`)}
      >
        {" "}
        <p>{text}</p> <ArrowNarrowRightIcon className="w-6 h-5 ml-2" />{" "}
      </button>
    </div>
  );
};

export default FeaturesButton;
