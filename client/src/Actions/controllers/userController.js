import axios from "axios";
import { AuthHeader } from "../../utils/auth/authHeader";
const APP_URL = "http://localhost:4000";

const handleResponse = (res) => {
  // Response handler.
  const { data } = res;
  if (res.status < 200 || res.status >= 300) {
    const error = (data && data.message) || res.statusText;
    return Promise.reject(error);
  }
  return data;
};


export const getUsers = async (filter,search) => {
  const url = `${APP_URL}/user/getUsers`;
  let authorization = await AuthHeader();
  let headers = {
    "Content-Type": "application/json",
  };
  headers = { ...headers, ...authorization };
  const response = await axios.post(url, {filter,search}, { headers });
  return handleResponse(response);
};

export const createUser = async (data) => {
  const url = `${APP_URL}/user/create`;
  let authorization = await AuthHeader();
  let headers = {
    "Content-Type": "application/json",
  };
  headers = { ...headers, ...authorization };
  const response = await axios.post(url, data, { headers });
  return handleResponse(response);
};

export const updateUser = async (id, data) => {
  const url = `${APP_URL}/user/update/${id}`;
  let authorization = await AuthHeader();
  let headers = {
    "Content-Type": "application/json",
  };
  headers = { ...headers, ...authorization };
  const response = await axios.post(url, data, { headers });
  return handleResponse(response);
};

export const getUser = async (id) => {
  const url = `${APP_URL}/user/get/${id}`;
  let authorization = await AuthHeader();
  let headers = {
    "Content-Type": "application/json",
  };
  headers = { ...headers, ...authorization };
  const response = await axios.post(url, {}, { headers });
  return handleResponse(response);
};

export const deleteUser = async (id) => {
  const url = `${APP_URL}/user/delete/${id}`;
  let authorization = await AuthHeader();
  let headers = {
    "Content-Type": "application/json",
  };
  headers = { ...headers, ...authorization };
  const response = await axios.delete(url, { headers });
  return handleResponse(response);
};