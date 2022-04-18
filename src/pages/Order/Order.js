import { LockClosedIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Order = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const handleEmailBlur = (event) => {
  setEmail(event.target.value);
  console.log(email);
};
const handlePasswordBlur = (event) => {
  setPassword(event.target.value);
};
const handleConfirmPasswordBlur = (event) => {
  setConfirmPassword(event.target.value);
};

  const handleCreateUser = (event) => {
    event.preventDefault();
    toast("Thank You for Registration");
  };

  return (
    <div className="py-16 bg-six">
      <div className="container mx-auto text-second ">
        {/* left side */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
          <div className="col-span-4">
            <h1 className="text-3xl font-bold text-second">
              Join My Newsletter
            </h1>
            <p className="text-sm  pt-4 font-light racking-wide ">
              Join my newsletter for offer and latest update , new services
            </p>
          </div>
          {/* right side */}
          <div className="col-span-4">
            <form className="mt-8 space-y-4" onSubmit={handleCreateUser}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
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
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-four text-four rounded-t-md focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    onBlur={handlePasswordBlur}
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-four text-four  focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label htmlFor="confirmpassword" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    onBlur={handleConfirmPasswordBlur}
                    id="confirmpassword"
                    name="confirmpassword"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-four text-four rounded-b-md focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                  />
                </div>
                
              </div>

              {/* loading spinner */}
              {/* <span className={loading ? "my-1 w-48 mx-2" : "hidden"}>
                {loading && <Loading />}
              </span>
             */}
              <div>
                <button
                  onClick={handleCreateUser}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
