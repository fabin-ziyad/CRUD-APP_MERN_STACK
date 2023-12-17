import React, { useEffect } from 'react'
import Login from '../components/Auth/Login'
import { useNavigate } from 'react-router-dom';
import { getToken } from '../utils/auth/fetchToken';

const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken()
    if (token != null) {
      navigate("/dashboard")
    }
  })
  return (
    <div><Login/></div>
  )
}

export default LoginPage