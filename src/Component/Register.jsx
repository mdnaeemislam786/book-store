import { Link } from "react-router";
import LoginOptions from "./LoginOptions";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase-setup/Firebase-inet";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState('');
  const [succes, setSucces] = useState(false);


  const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
  // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;



  const handelRegistation = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    
    if(!emailRegex.test(email)){
      return setError('Only Gmail or Yahoo email addresses are allowed.');
    }
    // else if(!passwordRegex.test(password)){
    //   return setError('Password must be at least 6 characters long and include uppercase, lowercase, number, and special character.')
    // }

    setError('');
    setSucces(false)
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSucces(true)
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="bg-base-200 min-h-screen pt-[30vh]">
      <div className="hero-content flex-col flex m-auto justify-center items-center lg:flex-row-reverse max-w-[800px]">
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
            <form onSubmit={handelRegistation}>
              <fieldset className="fieldset">
                {/* <label className="label">Full Name</label>
                    <input type="text" className="input" placeholder="Enter your Fullname" required />
                    
                    <label className="label">Phone</label>
                    <input type="text" className="input" placeholder="Enter your Number" required /> */}

                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Enter your Email"
                />

                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Enter your Password"
                  required
                />

                <div className="flex justify-between mt-1 mr-4">
                  <a className="link link-hover">Forgot password?</a>
                  <Link
                    to="/authentaction/login"
                    className="link text-green-600! link-hover border-b"
                  >
                    Login
                  </Link>
                </div>
                {
                succes && <p className="text-green-500">Account create successfull</p>
                }
                {
                error && <p className="text-red-500">{error}</p>
                }
                <button className="btn btn-neutral mt-3">Login</button>
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
  );
};

export default Register;
