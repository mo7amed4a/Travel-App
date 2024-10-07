import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import ForgotPasswordPage from "../pages/auth/ForgotPassword";
import SginUpPage from "../pages/auth/signup";
import ResetPasswordPage from "../pages/auth/reset-password";
import OtpPage from "../pages/auth/otpPage";

export default function AuthLayout() {

 
  return (
    <div>
      <main className="flex bg-[#e8edf2] relative">
        <div className="absolute top-4 start-4">
          <Link to="/" className="text-secondary font-bold md:text-lg hover:underline">Home</Link>
        </div>
        <div className={`flex  w-full`}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SginUpPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/*" element={<LoginPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
