import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetUserData, UpdateUser } from "../../../Actions/handlers/user";
import TextInput from "../../Fields/Input";
import Dropdown from "../../Fields/Dropdown";
import { Cities, genderOptions } from "../../../utils/constants/FormConstants";
import Autosuggest from "../../Fields/AutoTextField";
import RadioInput from "../../Fields/RadioInput";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const suggestions = ["Maharashtra", "Gujarat", "Karnataka"];
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email:  "",
    phone: "",
    city: "",
    state: "",
    gender: "male",
  });
  useEffect(() => {
    const fetchUser = async () => {
      const userResponse = await GetUserData(id);
      if (userResponse && Object.keys(userResponse).length > 0) {
        setUser(userResponse);
        setFormData({
          name: userResponse.name || "",
          email: userResponse.email || "",
          phone: userResponse.phone || "",
          city: userResponse.city || "Mumbai",
          state: userResponse.state || "",
          gender: userResponse.gender || "male",
        });
      }
    };

    fetchUser();
  }, [id]);


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
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = await UpdateUser(user._id, formData);
    if (updatedUser) {
      navigate("/")
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="">
        <h1 className="text-3xl font-bold mb-4">Edit Profile</h1>
        <form onSubmit={handleProfileUpdate} className="max-w-md mx-auto border rounded-lg px-6 py-6 shadow-2xl">
          <div className="mb-4">
            <TextInput
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextInput
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextInput
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <Dropdown
              label="City"
              options={Cities}
              value={formData.city}
              onChange={handleSelectedCity}
              className="border-gray-400"
            />
            <RadioInput
              label="Select Gender"
              options={genderOptions}
              name="gender"
              onChange={handleGenderChange}
              value={formData.gender}
              required
            />
            <Autosuggest
              name="state"
              suggestions={suggestions}
              onSuggestionSelected={handleSuggestionSelected}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
