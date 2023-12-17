import React, { useEffect } from 'react'
import DashHome from '../components/pages/Dashboard/Home'
import { getToken } from '../utils/auth/fetchToken'
import { useNavigate } from 'react-router-dom'
const DashboardPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken()
    if (token == null) {
      navigate("/login")
    }
  })
  return (
    <div className='w-full'><DashHome/></div>
  )
}

export default DashboardPage