import React from "react";

const Appointment = () => {
  return (
    <div className="bg-six ">
      <div className="container mx-auto p-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 bg-white shadow-6xl p-10 ">
          <div className="col-span-3"></div>
          <div className="col-span-3">
            <div className="w-full bg-main text-white p-10 rounded-md">
              <h1 className="text-4xl">
                Fill the from and appoint for your services{" "}
              </h1>
              <p>you can take online and fhiycaly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
