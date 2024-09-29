import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import BLogsLayout from '../pages/blogs/blogs.layout'
import FooterApp from '../components/FooterApp'
import HeaderApp from '../components/Header'
import PackagesPage from '../pages/packages/packages'
import PackagesDetailsPage from '../pages/packages/packages-details'
import HomePage from '../pages/Home/home'
import NotFoundPage from '../pages/not-found/NotFound'
<<<<<<< HEAD
import FaqPage from '../pages/faq/faqPage'
=======
import Users from '../components/dashboard/Users/Users'
>>>>>>> 7a2497b8f0d1f0a18a138d45dae57611c5301b13

export default function AppLayout() {
    const [scrollPage, setScrollPage] = useState(false);
  useEffect(() => {


    const handleScroll = () => {
      setScrollPage(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
        <HeaderApp scrollPage={scrollPage} />

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs/*" element={<BLogsLayout />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/packages/:id" element={<PackagesDetailsPage />} />
            {/* <Route path="/users" element={<Users></Users>} /> */}

            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <FooterApp />

    </div>
  )
}
