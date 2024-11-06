//import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-300">
        <h1 className="text-3xl font-semibold text-center text-emerald-500 drop-shadow-xl">
          Login
          <span className="text-emerald-600 drop-shadow-xl"> Convo</span>
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-emerald-900">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username..."
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text text-emerald-900">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password..."
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm text-emerald-600 hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an Account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 btn-success text-white" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
