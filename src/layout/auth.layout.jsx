import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import ForgotPasswordPage from "../pages/auth/ForgotPassword";
import SginUpPage from "../pages/auth/sginup";

export default function AuthLayout() {

 
  return (
    <div>
      <main className="flex bg-[#e8edf2]">
        <div className={`flex  w-full`}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sginUp" element={<SginUpPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/*" element={<LoginPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
