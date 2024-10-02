import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/app.layout";
import DashoardLayout from "./layout/dashoard.layout";
import NotFoundPage from "./pages/not-found/NotFound";
import AuthLayout from "./layout/auth.layout";
import UserContextProvider from "./components/Context/Usercontext";

export default function App() {

  return(
    <>
    <UserContextProvider>
    <BrowserRouter> 
        <Routes>
          <Route path="/*" element={<AppLayout />} />
          <Route path="/auth/*" element={<AuthLayout />} />
          <Route path="/admin/*" element={<DashoardLayout />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
 
    </>
  );
}
