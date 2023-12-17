import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import TextInput from "../Fields/Input";
import { LoginUser } from "../../Actions/handlers/auth";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleLogin = async () => {
    const logged = await LoginUser(formData);
    if (logged) {
      
      navigate("/dashboard");
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className=" hidden lg:block relative bg-cover bg-no-repeat">
          <div className="background-image-login absolute inset-0" />
          <div className="absolute top-1/2 w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl font-bold my-3 text-gray-400">
              {" "}
              Hey Buddy!
            </h1>
            <p className="my-2 pt-4 text-3xl text-white font-semibold">
              Welcome Back
            </p>
          </div>
        </div>
        <div className="relative flex flex-col py-3 px-4 lg:px-16 justify-center lg:py-10 text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
          <div className="shadow-lg px-3 rounded-lg py-2">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Sign In
            </h4>
            <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Welcome Back Buddy! Enter your details to Login.
            </p>
            <form className=" lg:px-4 mt-8 mb-2 w-full">
              <TextInput
                label="Your Email"
                type="email"
                name="email"
                autoComplete="off"
                onChange={handleInputChange}
                placeholder="example@mail.com"
                required
              />
              <TextInput
                label="Your Password"
                type="password"
                name="password"
                onChange={handleInputChange}
                autoComplete="off"
                placeholder="*********"
                required
              />

              <button
                type="button"
                className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={handleLogin}
              >
                sign In
              </button>
              <div className="flex justify-between">
                <p className="block text-blue-800 font-semibold mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                  No Account?{" "}
                  <span
                    className="hover:cursor-pointer hover:underline"
                    onClick={() => navigate("/register")}
                  >
                    Sign Up
                  </span>
                </p>
                <p className="block text-blue-800 hover:cursor-pointer hover:underline font-semibold mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                  Forgot Password?{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
