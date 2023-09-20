import React, { useState } from "react";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import KisiScreen from './Components/KisiScreen';
import Footer from './Components/Footer';
import HomeScreen from './Components/HomeScreen';
import YeniUyeScreen from "./Components/YeniUyeScreen";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {ProSidebar, Menu,MenuItem,SidebarHeader,SidebarFooter,SidebarContent,} from "react-pro-sidebar";
//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";


function App() {

  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
const menuIconClick = () => {
  //condition checking to change state from true to false and vice versa
  menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
};


  return (
    <BrowserRouter>
     <ToastContainer position="top-right" limit={1} />
    <header>
    <nav>
        <ul>
          <li>
            <Link to="/">AnaSayfa</Link>
          </li>
          <li>
            <Link to="/uyeler">Uyeler</Link>
          </li>
          <li>
            <Link to="/yeniUye">Yeni Uye</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
    <Routes>
              <Route path="/" element={<HomeScreen />}></Route>
              <Route path="/uyeler" element={<KisiScreen />}></Route>
              <Route path="/yeniUye" element={<YeniUyeScreen />}></Route>
              </Routes>
    </main>
    <Footer/>
   </BrowserRouter>
    );
}

export default App;
