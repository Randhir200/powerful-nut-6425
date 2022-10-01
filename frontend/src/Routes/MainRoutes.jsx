
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../Components/Footer';
import DemoHome from '../Pages/DemoHome';
import Homepage from '../Pages/Homepage';
import Pricing from '../Pages/Pricing';
const MainRoutes = () => {
  return (
    
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/demo" element={<DemoHome/>}/>
  </Routes>
   <Footer />
    </>
  );
};

export default MainRoutes;
