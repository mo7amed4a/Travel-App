import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DashoardPage from "../pages/admin/Dashoard";
import LoginPage from "../pages/admin/auth/login";
import ForgotPasswordPage from "../pages/admin/auth/ForgotPassword";
import DashboardPackege from "../pages/admin/DashboardPackege/DashboardPackege";
import NavbarAdmin from "../components/dashboard/Header/NavbarAdmin";
import SidenavAdmin from "../components/dashboard/Header/SidenavAdmin";
import UsersPage from "../pages/admin/Users/Users";
import { Footer } from "flowbite-react";

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
        {authPAge  && <SidenavAdmin asideToggle={asideToggle} setAsideToggle={setAsideToggle} />}
        <div className={`flex  w-full ${authPAge && "px-4"}`}>
          <Routes>
            <Route path="/" element={<DashoardPage />} />
            <Route path="/packages" element={<DashboardPackege />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/*" element={<DashoardPage />} />
            <Route path="/dashboardPackege" element={<DashboardPackege />} />
          </Routes>
        </div>
      </main>
      {authPAge && <Footer container>
      <div className="w-full text-center">
        <Footer.Copyright href="https://webbing-agency.com/" by="Webbing Agency" year={2022} />
      </div>
    </Footer>}
    </div>
  );
}
