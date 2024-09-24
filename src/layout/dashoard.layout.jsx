import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DashoardPage from '../pages/admin/Dashoard'
import LoginPage from '../pages/admin/auth/login'
import ForgotPasswordPage from '../pages/admin/auth/ForgotPassword'
import NotFoundPage from '../pages/not-found/NotFound'

export default function DashoardLayout() {
  const location = useLocation()
  return (
    <div>
      {location.pathname != "/admin/login" && location.pathname != "/admin/forgot-password" && location.pathname != "/admin/signup" && <div>navbar</div>}
        <Routes>
            <Route path="/" element={<DashoardPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        {(location.pathname != "/admin/login" && location.pathname != "/admin/forgot-password" && location.pathname != "/admin/signup") && <div>footer</div>}
    </div>
  )
}
