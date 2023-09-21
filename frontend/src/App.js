import React, { useState } from "react";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import KisiScreen from './Components/KisiScreen';
import Footer from './Components/Footer';
import HomeScreen from './Components/HomeScreen';
import YeniUyeScreen from "./Components/YeniUyeScreen";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "react-pro-sidebar/dist/css/styles.css";
import SideBar from "./Components/SideBar";
import Iletisim from "./Components/Iletisim";


function App() {
  return (
    <BrowserRouter>
     <ToastContainer position="top-right" limit={1} />
     <SideBar/>

    <main className="content">
    <Routes>
              <Route path="/" element={<HomeScreen />}></Route>
              <Route path="/uyeler" element={<KisiScreen />}></Route>
              <Route path="/yeniUye" element={<YeniUyeScreen />}></Route>
              <Route path="/iletisim" element={<Iletisim />}></Route>
              </Routes>
    </main>
    <Footer/>
   </BrowserRouter>
    );
}

export default App;
