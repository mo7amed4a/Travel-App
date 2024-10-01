import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/app.layout";
import DashoardLayout from "./layout/dashoard.layout";
import NotFoundPage from "./pages/not-found/NotFound";
import AuthLayout from "./layout/auth.layout";

export default function App() {

  return(
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/*" element={<AppLayout />} />
          <Route path="/auth/*" element={<AuthLayout />} />
          <Route path="/admin/*" element={<DashoardLayout />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      {/* <BlogsPage /> */}
      {/* <PackagesPage /> */}
      {/* <PackagesDetailsPage /> */}

      {/* <LoginPage />  */}
      {/* <ForgotPasswordPage />  */}
      {/* <NotFoundPage /> */}
    </>
  );
}
