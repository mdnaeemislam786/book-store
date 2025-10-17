import React, { useRef, useState } from "react";
import { Link } from "react-router";
import LoginOptions from "./LoginOptions";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase-setup/Firebase-inet";


const Login = () => {
  const [error, setError] = useState('');
  const emailRef = useRef('');

  const handelLogin =(event)=>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(email, password);

    setError('');

    signInWithEmailAndPassword(auth, email, password)
    .then((result) =>{
      console.log(result);
    })
    .catch((error) =>{
      console.log(error);
      setError(error.message)
    })
  };

  const handelForgetPassword = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    console.log(email);
    sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Please chack your email")
    })
    .catch((error)=>{
      console.log(error.message);
    })

  }

  return (
    <div>
      <div className=" bg-base-200 min-h-screen pt-[30vh]">
        <div className="hero-content flex-col flex m-auto justify-center items-center lg:flex-row-reverse max-w-[800px]">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handelLogin}>
                <fieldset className="fieldset">

                  <label className="label">Email</label>
                  <input type="email" ref={emailRef} name="email" className="input" placeholder="Email" />

                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  <div className="flex justify-between mt-1 mr-4">
                    <a onClick={handelForgetPassword} className="link link-hover">Forgot password?</a>
                    <Link
                      to="/authentaction/register"
                      className="link link-hover text-green-600!"                    >
                      Create new account
                    </Link>

                  </div>
                  {
                    error && <p className="text-red-500 text-center">{error}</p>
                  }
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
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
