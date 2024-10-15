//import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-300">
        <h1 className="text-3xl font-semibold text-center text-emerald-400">
          Login
          <span className="text-emerald-600"> Convo</span>
        </h1>
        <form action="">
          <div className="">
            <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter Username..." className="w-full input input-bordered h-10" />
          </div>

          <div className="">
            <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password..." className="w-full input input-bordered h-10" />
          </div>
          
          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            {"Don't"} have an Account?
          </a>
          <div><button className="btn btn-block btn-sm mt-2">Login</button></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
