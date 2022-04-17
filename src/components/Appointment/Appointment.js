import { CheckIcon, PhoneIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon, MailIcon } from "@heroicons/react/solid";
import React from "react";
import Button from "../Button/Button";

import AppointItem from "./AppointItem";

const Appointment = () => {
  return (
    <div className="bg-six ">
      <div className="container mx-auto p-2 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 bg-white shadow-6xl p-2 lg:p-10 ">
          {/* appoint left side */}
          <div className="col-span-3 pb-5">
            {/* name email */}
            <div className="md:flex">
              <div className="m-4">
                <label
                  htmlFor="name"
                  className="block text-base font-bold text-second pl-1"
                >
                  Name
                </label>
                <div className="mt-1  rounded-md shadow-sm">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className=" bg-transparent focus:outline-none block w-full pl-7 py-2.5 pr-12 sm:text-sm border rounded-md"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="m-4">
                <label
                  htmlFor="email"
                  className="block text-base font-bold text-second pl-1 "
                >
                  Email
                </label>
                <div className="mt-1  rounded-md shadow-sm">
                  <input
                    type="email"
                    name="price"
                    id="price"
                    className="bg-transparent focus:outline-none block w-full pl-7 py-2.5 pr-12 sm:text-sm border rounded-md"
                    placeholder="expl@email.com"
                  />
                </div>
              </div>
            </div>
            {/* phone date */}
            <div className="md:flex">
              <div className="m-4">
                <label
                  htmlFor="T
                  telephone"
                  className="block text-base font-bold text-second pl-1 "
                >
                  Telephone
                </label>
                <div className="mt-1  rounded-md shadow-sm">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className=" bg-transparent focus:outline-none block w-full pl-7 py-2.5 pr-12 sm:text-sm border rounded-md"
                    placeholder="Your Number"
                  />
                </div>
              </div>
              <div className="m-4">
                <label
                  htmlFor="date"
                  className="block text-base font-bold text-second pl-1 "
                >
                  Date
                </label>
                <div className="mt-1  rounded-md shadow-sm">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="bg-transparent focus:outline-none block w-full pl-7 py-2.5 pr-12 sm:text-sm border rounded-md"
                    placeholder="Date"
                  />
                </div>
              </div>
            </div>
            {/* services */}
            <div className="m-4 ">
              <label
                htmlFor="date"
                className="block text-base font-bold text-second pl-1"
              >
                Service
              </label>
              <div className="mt-1  rounded-md shadow-sm">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="bg-transparent focus:outline-none block w-full pl-7 py-2.5 pr-12 sm:text-sm border rounded-md"
                  placeholder="Type Service Name"
                />
              </div>
            </div>
            {/* textarea */}
            <div className="m-4 ">
              <label
                htmlFor="date"
                className="block text-base font-bold text-second pl-1"
              >
                Your Message
              </label>
              <div className="mt-1  rounded-md shadow-sm">
                <textarea
                  type="text"
                  name="price"
                  id="price"
                  className="bg-transparent focus:outline-none block w-full pl-7 py-2.5 pr-12 sm:text-sm border rounded-md"
                  placeholder="Type your Message"
                />
              </div>
            </div>
            <div className="btn">
              <Button text="Make Appointment" />
            </div>
          </div>
          {/* appoint right side */}
          <div className="col-span-3 lg:mx-auto">
            <div className="max-w-[350px]  bg-main text-white p-10 rounded-md mt-8">
              <h1 className="text-2xl font-semibold">
                Fill the from for Make an Appointment
              </h1>
              <p className="text-sm pt-5">
                Fill this from for confirm your appointment You can take
                services by visiting gym or online
              </p>
              <div className="pt-6">
                <AppointItem icon={<CheckIcon />} text="Full online Support" />
                <AppointItem
                  icon={<CheckIcon />}
                  text="10/6 support an week "
                />
              </div>
              <div className="pt-8">
                <span className="mb-4">
                  <AppointItem
                    icon={<LocationMarkerIcon />}
                    text="Jl. Sunset Road No.815, Kuta"
                  />
                </span>
                <span className="py-2">
                  <AppointItem icon={<MailIcon />} text="support@xfit.com" />
                </span>

                <AppointItem icon={<PhoneIcon />} text="(+62)81 0000 345" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
