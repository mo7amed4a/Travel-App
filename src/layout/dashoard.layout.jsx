import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DashoardPage from "../pages/admin/Dashoard";
import LoginPage from "../pages/admin/auth/login";
import ForgotPasswordPage from "../pages/admin/auth/ForgotPassword";
import NotFoundPage from "../pages/not-found/NotFound";
import DashboardPackege from "../pages/admin/DashboardPackege/DashboardPackege";
import NavbarAdmin from "../components/dashboard/Header/NavbarAdmin";
import SidenavAdmin from "../components/dashboard/Header/SidenavAdmin";
import Users from "../components/dashboard/Users/Users";

export default function DashoardLayout() {
  const [asideToggle, setAsideToggle] = useState(false);
  const location = useLocation();

  const authPAge = (location.pathname !== "/admin/login" && location.pathname !== "/admin/forgot-password" && location.pathname !== "/admin/signup")

  return (
    <div>
      {authPAge && (
          <NavbarAdmin
            setAsideToggle={setAsideToggle}
            className="h-16 bg-red-400"
            onClick={() => setAsideToggle((e) => !e)}
          />
        )}
      <main className="flex">
<<<<<<< HEAD
        {authPAge  && <SidenavAdmin asideToggle={asideToggle} setAsideToggle={setAsideToggle} />}
        <div className={`flex  w-full ${authPAge && "px-4"}`}>
          <Routes>
            <Route path="/" element={<DashoardPage />} />
            <Route path="/packages" element={<DashboardPackege />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/*" element={<DashoardPage />} />
            <Route path="/dashboardPackege" element={<DashboardPackege />} />
          </Routes>
        </div>
=======
        <SidenavAdmin asideToggle={asideToggle} setAsideToggle={setAsideToggle} />
        {/* <div className="px-4 flex"> */}
          <Routes>
            <Route path="/" element={<DashoardPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/dashboardPackege" element={<DashboardPackege />} />
            <Route path="/users" element={<Users />} />

          </Routes>
        {/* </div> */}
>>>>>>> 7a2497b8f0d1f0a18a138d45dae57611c5301b13
      </main>
      {authPAge && <div>footer</div>}
    </div>
  );
}
