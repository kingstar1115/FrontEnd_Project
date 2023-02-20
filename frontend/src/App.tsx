import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import Home from 'pages/Home';
import Footer from 'components/Footer';
import ComingSoon from 'pages/ComingSoon';
import ContactUS from 'pages/ContactUS';
import 'App.scss';
import NavBar from 'components/NavBar';
import ScrollTopBtn from 'components/ScrollTobBtn';
import Swap from 'pages/Swap';
import { ToastContainer, toast } from 'react-toastify';
import Blog from 'pages/Blog/Blog';
import BlogDetail from 'pages/Blog/Detail';

function App() {
  const { t, i18n, ready } = useTranslation();
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar lngCh={changeLanguage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/detail" element={<BlogDetail />} />
        </Routes>
        <Footer />
        <ScrollTopBtn />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
