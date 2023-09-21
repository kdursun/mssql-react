import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome,FaUserAlt,FaUsers,FaMapMarker } from 'react-icons/fa';

const menuData = [
    {
      label: 'AnaSayfa',
      path: '/',
      icon:<FaHome/>
    },
    {
      label: 'Üyeler',
      path: '/uyeler',
      icon:<FaUsers/>
    },
    {
      label: 'Yeni Üye',
      path: '/yeniUye',
      icon:<FaUserAlt/>
    },
    {
        label: 'İletişim',
        path: '/iletisim',
        icon:<FaMapMarker/>
      },
  ];

export default function SideBar() {
    


  return (
    <div className="sidebar">
    {menuData.map((item,index)=>(
        <NavLink key={index}  to={item.path} activeclassname="active">{item.icon} {item.label}</NavLink>
    ))
}
  </div>
  )
}
