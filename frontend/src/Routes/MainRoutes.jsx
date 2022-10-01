import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SideBar } from '../Components/SideBar';
import Client from '../Pages/Client';
import Dashbord from '../Pages/Dashbord';
import Homepage from '../Pages/Homepage';
import Pricing from '../Pages/Pricing';
import Project from '../Pages/Project';
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
      <Route path='/dashboard' element={<Dashbord />} />
    </Routes>
  );
};

export default MainRoutes;
