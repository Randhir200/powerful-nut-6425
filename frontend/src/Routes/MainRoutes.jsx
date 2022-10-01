import React from 'react';
import { Routes, Route } from 'react-router-dom';



import Dashbord from '../Pages/Dashbord';


import Homepage from '../Pages/Homepage';
import Pricing from '../Pages/Pricing';
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      
      
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/dashboard" element={<Dashbord/>}/>
      
     
  </Routes>
  
  );
};

export default MainRoutes;
