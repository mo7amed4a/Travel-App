import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/app.layout";
import DashboardLayout from "./layout/dashboard.layout";
import NotFoundPage from "./pages/not-found/NotFound";
import AuthLayout from "./layout/auth.layout";
import UserContextProvider from "./components/Context/Usercontext";
import ProtectedRouteAdmin from "./Protectroute/Protectroute-admin";
import ProtectedRouteAuthNotRequired from "./Protectroute/Protectroute-auth";
<<<<<<< HEAD
import Test from "../src/Test/Test"
=======
import { Toaster } from "react-hot-toast";
import { Flowbite } from "flowbite-react";

>>>>>>> 34a2f4d630f5ff4ed5bab11ef0fa1d1d26ca5f82
export default function App() {
  const customTheme = {
    button: {
      color: {
        primary: "bg-primary hover:bg-primary text-white font-bold",
      },
    },
  };

  return (
    <>
<<<<<<< HEAD
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
 
=======
      <Flowbite theme={{ theme: customTheme }}>
        <Toaster position="top-center" reverseOrder={false} />
        <UserContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<AppLayout />} />
              <Route
                path="/auth/*"
                element={
                  <ProtectedRouteAuthNotRequired>
                    <AuthLayout />
                  </ProtectedRouteAuthNotRequired>
                }
              />
              <Route
                path="/admin/*"
                element={
                  <ProtectedRouteAdmin>
                    <DashboardLayout />
                  </ProtectedRouteAdmin>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </UserContextProvider>
      </Flowbite>
>>>>>>> 34a2f4d630f5ff4ed5bab11ef0fa1d1d26ca5f82
    </>
  );
}
