import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [customError, setCustomError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  

  const navigate = useNavigate();

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
  if (user) {
    navigate("/login");
  }
  // error handle
  let errorMessages;
  if (customError || error ) {
    errorMessages = (
      <p className="text-sm text-red-900">{customError?.message}</p>
    );
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setCustomError("Two password dont match");
      return;
    }
    if (password.length < 6) {
      setCustomError("password must be 6 characters");
      return;
    }
    createUserWithEmailAndPassword(email, password);
    toast("Thank You for Registration");
  };

    
 

  return (
    <>
      <div className="min-h-full flex items-center justify-center pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-sm w-full space-y-4">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-second">
              Register your account
            </h2>
            <p className="mt-2 text-center text-sm text-four">
              Or
              <Link
                to="/"
                className="font-medium text-main hover:text-mains pl-2 "
              >
                visit our services
              </Link>
            </p>
          </div>
          {/* input from */}
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
              <div className="mt-4">
                <p
                  className={customError ? "mt-2 text-xs text-mains" : "hidden"}
                >
                  {customError}
                </p>
              </div>
            </div>

            {/* loading spinner */}
            <span className={loading ? "my-1 w-48 mx-2" : "hidden"}>
              {loading && <Loading />}
            </span>
            {errorMessages}
            <div>
              <button
                onClick={handleCreateUser}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-main hover:bg-mains focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mains "
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-white "
                    aria-hidden="true"
                  />
                </span>
                Sign up
              </button>
            </div>
          </form>
          <div className="flex items-center">
            <div className="flex items-center">
              <p className="my-0 text-sm text-four pl-1">
                already have account!
                <Link
                  to="/login"
                  className="ml-1 font-medium text-main hover:text-mains "
                >
                  login
                </Link>
              </p>
            </div>
          </div>
          <ToastContainer />
          {/* google signup */}
          <SocialLogin />
        </div>
      </div>
    </>
  );
};

export default Register;
