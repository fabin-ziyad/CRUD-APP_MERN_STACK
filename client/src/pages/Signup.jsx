import React, { useEffect } from "react";
import Signup from "../components/Auth/Signup";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/auth/fetchToken";

const SignupPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if (token != null) {
      navigate("/dashboard");
    }
  });
  return (
    <div>
      <Signup />
    </div>
  );
};

export default SignupPage;
