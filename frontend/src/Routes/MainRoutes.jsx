
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Client from '../Components/Client';
import Mainpage from '../Components/Mainpage';
import DemoHome from '../Pages/DemoHome';
import Homepage from '../Pages/Homepage';
import Pricing from '../Pages/Pricing';
import Projects from '../Pages/Projects';
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/client' element={<Client />} />
      <Route path='/mainpage' element={<Mainpage />} />
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/demo" element={<DemoHome/>}/>
      <Route path="/projects" element={<Projects/>}/>
  </Routes>
  
  );
};

export default MainRoutes;
