import {  PaperAirplaneIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../components/Shared/Loading/Loading";
import auth from "../../firebase.init";

const Order = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [user , loading ] = useAuthState(auth);
  const handleNameBlur = (event) => {
    setEmail(event.target.value);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handleAddressBlur = (event) => {
    setPassword(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setAddress(event.target.value);
  };

  const confirmOrder = (event) => {
    event.preventDefault();
    toast("Thank for your Order");
  };

  const { serviceSlug } = useParams(); 



  return (
    <div className="py-16 bg-six">
      <div className="container mx-auto text-second ">
        {/* left side */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
          <div className="col-span-4">
            <h1 className="text-3xl font-bold text-second">
              Service Details {serviceSlug}
            </h1>
            {/* <p className="text-sm  pt-4 font-light racking-wide ">
              Join my newsletter for offer and latest update , new services
            </p> */}
          </div>
          {/* right side */}
          <div className="col-span-4">
            <h1 className="text-2xl font-bold text-second text-center">
              Shipment Form
            </h1>
            <p className="text-sm pt-2 text-four text-center">
              {user.displayName}
            </p>
            <form className="mt-4 space-y-4" onSubmit={confirmOrder}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">
                    name
                  </label>
                  <input
                    onBlur={handleNameBlur}
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-four text-four rounded-t-md focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    onBlur={handleEmailBlur}
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    value={user.email ? user.email : 'You input email address section'}
                    readOnly
                    
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-four text-four  focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    onBlur={handlePhoneBlur}
                    id="phone"
                    name="phone"
                    type="number"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-four text-four  focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="sr-only">
                    Address
                  </label>
                  <textarea
                    onBlur={handleAddressBlur}
                    id="address"
                    name="Address"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-four text-four  focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm rounded-b-md"
                    placeholder="Your full address"
                  />
                </div>
              </div>

              {/* loading spinner */}
              <span className={loading ? "my-1 w-48 mx-2" : "hidden"}>
                {loading && <Loading />}
              </span>

              <div>
                <button
                  onClick={confirmOrder}
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-main hover:bg-mains focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mains "
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <PaperAirplaneIcon
                      className="h-5 w-5 text-white "
                      aria-hidden="true"
                    />
                  </span>
                  Order
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
