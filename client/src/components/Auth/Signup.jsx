import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import RadioInput from "../Fields/RadioInput";
import TextInput from "../Fields/Input";
import CheckboxInput from "../Fields/CheckBox";
import Dropdown from "../Fields/Dropdown";
import Autosuggest from "../Fields/AutoTextField";
import {
  hearAbout,
  Cities,
  genderOptions,
} from "../../utils/constants/FormConstants";
import { RegisterUser } from "../../Actions/handlers/auth";

const Signup = () => {
  const navigate = useNavigate();
  const suggestions = ["Maharashtra", "Gujarat", "Karnataka"];
  const [hearAboutUs, setHearAboutUs] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "male",
    password: "",
    city: "Mumbai",
    state: "",
  });
  const handleHearAboutUs = (selectedOptions) => {
    setHearAboutUs(selectedOptions);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenderChange = (value) => {
    setFormData({
      ...formData,
      gender: value,
    });
  };

  const handleSelectedCity = (value) => {
    setFormData({
      ...formData,
      city: value,
    });
  };

  const handleSuggestionSelected = (suggestion) => {
    setFormData({
      ...formData,
      state: suggestion,
    });
  };

  const handleSubmit =async () => {
    await RegisterUser(formData)
    navigate("/login")
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
      <div className="relative bg-cover bg-no-repeat">
        <div className="background-image absolute inset-0" />
        <div className="absolute top-1/2 w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold my-3 text-white">
            {" "}
            Welcome to Our Store
          </h1>
          <p className="my-2 pt-4 text-white font-semibold">
            What we offers in our store:{" "}
          </p>
        </div>
      </div>
      <div className="relative flex flex-col py-3 px-4 lg:px-10 lg:py-10 text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
        <div className="shadow-xl rounded-lg w-full px-3 ">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Sign Up
          </h4>
          <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Nice to meet you! Enter your details to register.
          </p>
          <form className=" lg:px-4 mt-8 mb-2 w-full">
            <div className=" w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <TextInput
                label="Your Name"
                type="text"
                autoComplete="off"
                name="name"
                onChange={handleInputChange}
                placeholder="eg:- John Doe"
                required
              />
              <TextInput
                label="Your Email"
                type="text"
                name="email"
                autoComplete="off"
                onChange={handleInputChange}
                placeholder="eg: text@example.com"
                required
              />
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-6 lg:gap-y-2">
              <TextInput
                label="Your Password"
                type="password"
                name="password"
                autoComplete="off"
                onChange={handleInputChange}
                placeholder="**************"
                required
              />
              <TextInput
                label="Your Phone Number"
                name="phone"
                type="tel"
                autoComplete="off"
                placeholder="eg:- 9999999999"
                onChange={handleInputChange}
                maxLength={10}
                required
              />
            </div>
            <RadioInput
              label="Select Gender"
              options={genderOptions}
              name="gender"
              onChange={handleGenderChange}
              value={formData.gender}
              required
            />
            <CheckboxInput
              label="How did you hear about this?"
              options={hearAbout}
              selectedOptions={hearAboutUs}
              onChange={handleHearAboutUs}
            />
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-6 lg:gap-y-2">
              <Dropdown
                label="City"
                options={Cities}
                value={formData.city}
                onChange={handleSelectedCity}
                className="border-gray-400"
              />
              <Autosuggest
                suggestions={suggestions}
                onSuggestionSelected={handleSuggestionSelected}
              />
            </div>
            <button
              type="button"
              className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={handleSubmit}
            >
              sign up
            </button>
            <p className="block text-blue-800 font-semibold mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
              Already have an account?{" "}
              <span
                className="hover:cursor-pointer hover:underline"
                onClick={() => navigate("/login")}
              >
                Sign In
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
