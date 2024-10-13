import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DashoardPage from "../pages/admin/Dashoard";
import NavbarAdmin from "../components/dashboard/Header/NavbarAdmin";
import SidenavAdmin from "../components/dashboard/Header/SidenavAdmin";
import UsersPage from "../pages/admin/Users/Users";
import { Footer } from "flowbite-react";
import BlogsDashboard from "../pages/admin/blogs/blogs";
import PackegeAdd from "../pages/admin/packege/packege-add";
import PackageDashboard from "../pages/admin/packege/packege";
import BlogsAdd from "../pages/admin/blogs/blogs-add";
import FaqsPages from "../pages/admin/Faq/Allfaqs";
import Answer from "../pages/admin/Faq/Answer";
import BookingDashboard from "../pages/admin/booking/booking";

export default function DashoardLayout() {
  const [asideToggle, setAsideToggle] = useState(false);

  return (
    <div>  
      <NavbarAdmin
        setAsideToggle={setAsideToggle}
        className="h-16 bg-red-400"
        onClick={() => setAsideToggle((e) => !e)}
      />
      <main className="flex bg-[#e8edf2]">
        <SidenavAdmin asideToggle={asideToggle} setAsideToggle={setAsideToggle} />
        <div className={`flex  w-full p-4`}>
          <Routes>
            <Route path="/" element={<DashoardPage />} />
            <Route path="/packages" element={<PackageDashboard />} />
            <Route path="/new-package" element={<PackegeAdd />} />
            <Route path="/Answer" element={<Answer></Answer>} />
            <Route path="/blogs" element={<BlogsDashboard />} />
            <Route path="/blogs/new-blog" element={<BlogsAdd />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/faqs" element={<FaqsPages/>} />
            <Route path="/bookings" element={<BookingDashboard/>} />
            <Route path="/*" element={<DashoardPage />} />
          </Routes>
        </div>
      </main>
      <Footer container>
      <div className="w-full text-center">
        <Footer.Copyright href="https://webbing-agency.com/" by="Webbing Agency" year={2022} />
      </div>
    </Footer>
    </div>
  );
}
