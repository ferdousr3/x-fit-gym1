import React from "react";

const WhyXfitItems = ({ icon, text, iconColor, bg, textColor }) => {
  return (
    <div>
      <div
        className={`flex items-center shadow-7xl  ${bg} max-w-[250px] py-6 pl-5 pr-4 my-2 rounded-md`}
      >
        <span className={`text-4xl ${iconColor}`}>{icon}</span>

        <h1
          className={`ml-5 text-xl tex-second font-bold leading-6 ${textColor}`}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default WhyXfitItems;
