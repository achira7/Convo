//import React from 'react'

import GenderSelect from "./GenderSelect";

const SignUp = () => {
  return (
    <div className="flex flex-col items-start justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-300">
        <h1 className="text-3xl font-semibold text-center text-emerald-400">
          Sign Up
          <span className="text-emerald-600"> Convo</span>
        </h1>

        <form action="#">
          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password..."
              className="w-full input input-bordered h-10"
            />
          </div>

          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password..."
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderSelect />

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an Account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-600">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
