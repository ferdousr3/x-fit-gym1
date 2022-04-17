import React from "react";

const AppointItem = ({ icon, text }) => {
  return (
    <div className="flex items-center mb-5">
      <span className="w-5 text-white ">{icon}</span>
      <p className="ml-3 text-white text-sm font-light">{text}</p>
    </div>
  );
};

export default AppointItem ;
