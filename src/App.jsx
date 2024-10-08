import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/app.layout";
import DashboardLayout from "./layout/dashboard.layout";
import NotFoundPage from "./pages/not-found/NotFound";
import AuthLayout from "./layout/auth.layout";
import UserContextProvider from "./components/Context/Usercontext";
import ProtectedRouteAdmin from "./Protectroute/Protectroute-admin";
import ProtectedRouteAuthNotRequired from "./Protectroute/Protectroute-auth";
import Test from "../src/Test/Test"
export default function App() {

  return(
    <>
    <UserContextProvider>
    <BrowserRouter> 
        <Routes>
        {/* <Route path="/" element={<Test></Test>} /> */}
          <Route path="/*" element={<AppLayout />} />
          <Route path="/auth/*" element={<ProtectedRouteAuthNotRequired><AuthLayout /></ProtectedRouteAuthNotRequired>} />
          <Route path="/admin/*" element={<DashboardLayout />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
 
    </>
  );
}
