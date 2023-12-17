import axios from "axios";
const APP_URL = "https://crud-app-mern-stack-h5y517xzl-fabin-ziyad.vercel.app";

const handleResponse = (res) => {
  // Response handler.
  const { data } = res;
  if (res.status < 200 || res.status >= 300) {
    const error = (data && data.message) || res.statusText;
    return Promise.reject(error);
  }
  return data;
};

export const Register = async (data) => {
  const url = `${APP_URL}/auth/register`;
  let headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.post(url, data, { headers });

  return handleResponse(response);
};
export const Login = async (data) => {
  const url = `${APP_URL}/auth/login`;
  let headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.post(url, data, { headers });

  return handleResponse(response);
};
