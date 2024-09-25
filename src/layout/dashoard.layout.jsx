import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DashoardPage from "../pages/admin/Dashoard";
import LoginPage from "../pages/admin/auth/login";
import ForgotPasswordPage from "../pages/admin/auth/ForgotPassword";
import NotFoundPage from "../pages/not-found/NotFound";
import NavbarAdmin from "../components/dashboard/Header/NavbarAdmin";
import { Accordion, ListGroup, Sidebar } from "flowbite-react";
import SidenavAdmin from "../components/dashboard/Header/SidenavAdmin";

export default function DashoardLayout() {
  const [asideToggle, setAsideToggle] = useState(false);
  const location = useLocation();
  return (
    <div>
      {location.pathname != "/admin/login" &&
        location.pathname != "/admin/forgot-password" &&
        location.pathname != "/admin/signup" && (
          <NavbarAdmin
            setAsideToggle={setAsideToggle}
            className="h-16 bg-red-400"
            onClick={() => setAsideToggle((e) => !e)}
          />
        )}
      <main className="flex">
       <SidenavAdmin asideToggle={asideToggle} setAsideToggle={setAsideToggle}/>
        <Routes>
          <Route path="/" element={<DashoardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {location.pathname != "/admin/login" &&
        location.pathname != "/admin/forgot-password" &&
        location.pathname != "/admin/signup" && <div>footer</div>}
    </div>
  );
}
