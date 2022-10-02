import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SideBar } from '../Components/SideBar';
import Client from '../Pages/Client';
import Homepage from '../Pages/Homepage';
import Login from '../Pages/Login';
import Pricing from '../Pages/Pricing';
import Project from '../Pages/Project';
import Signup from '../Pages/Signup';
import SignUpPages from '../Pages/SignUpPages';
import { SliderNav } from './SliderNav';
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route element={<SliderNav />}>
        <Route path='/clients' element={<Client />} />
        <Route path='/projects' element={<Project />} />
      </Route>
      <Route path='/pricing' element={<Pricing />} />
      <Route path="/register" element={<Signup/>}/>
<Route path='/Signup' element={<SignUpPages/>}/>
<Route path="/Login" element={<Login/>}/>
    </Routes>
  );
};

export default MainRoutes;
