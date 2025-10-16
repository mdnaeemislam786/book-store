import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-[800px]">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form>
                <fieldset className="fieldset">

                    <label className="label">Full Name</label>
                    <input type="text" className="input" placeholder="Enter your Fullname" required />
                    
                    <label className="label">Phone</label>
                    <input type="text" className="input" placeholder="Enter your Number" required />

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Enter your Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Enter your Password" required/>

                    <div className="flex justify-between mt-1 mr-4">
                        <a className="link link-hover">Forgot password?</a>
                        <Link to="/authentaction/login" className="link text-green-600! link-hover ">Have an account</Link>
                    </div>
                    <button className="btn btn-neutral mt-3">Login</button>
                </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
