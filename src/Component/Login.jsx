import React from "react";
import { Link } from "react-router";
import LoginOptions from "./LoginOptions";

const Login = () => {
  return (
    <div>
    <div className=" bg-base-200 min-h-screen pt-[30vh]">
      <div className="hero-content flex-col flex m-auto justify-center items-center lg:flex-row-reverse max-w-[800px]">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                a id nisi.
            </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <div className="flex justify-between mt-1 mr-4">
                    <a className="link link-hover">Forgot password?</a>
                    <Link to="/authentaction/register" className="link link-hover text-green-600!">Create new account</Link>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
            </div>
      </div>
      <div>
        <p className="text-center my-10">or</p>
        <LoginOptions></LoginOptions>
      </div>
    </div>

    </div>
  );
};

export default Login;