import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/app.layout";
import DashboardLayout from "./layout/dashboard.layout";
import NotFoundPage from "./pages/not-found/NotFound";
import AuthLayout from "./layout/auth.layout";
import ProtectedRouteAdmin from "./Protectroute/Protectroute-admin";
import ProtectedRouteAuthNotRequired from "./Protectroute/Protectroute-auth";
import { Toaster } from "react-hot-toast";

import { Flowbite } from "flowbite-react";
import DataContextProvider from "./Context/dataContext";
import UserContextProvider from "./Context/Usercontext";

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
      <Flowbite theme={{ theme: customTheme }}>
        <Toaster position="top-center" reverseOrder={false} />
        <UserContextProvider>
          <DataContextProvider>
            {/* {posts}  */}
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
          </DataContextProvider>
        </UserContextProvider>
      </Flowbite>
    </>
  );
}
