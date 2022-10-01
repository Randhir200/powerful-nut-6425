import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Client from '../Components/Client';
import Mainpage from '../Components/Mainpage';
import Project from '../Components/Project';
import Clients from '../Pages/Clients';
import Dashbord from '../Pages/Dashbord';
import DemoHome from '../Pages/DemoHome';
import Homepage from '../Pages/Homepage';
import Pricing from '../Pages/Pricing';
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
   
   
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/dashboard" element={<Dashbord/>}/>
      
      <Route path="/demo" element={<DemoHome/>}/>
  </Routes>
  
  );
};

export default MainRoutes;
