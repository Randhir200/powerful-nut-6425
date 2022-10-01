import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Clients from '../Pages/Clients'
import Dashbord from '../Pages/Dashbord'
import Homepage from '../Pages/Homepage'
import Pricing from '../Pages/Pricing'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/dashboard" element={<Dashbord/>}/>
        <Route path="/clients" element={<Clients/>}/>
    </Routes>
  )
}

export default MainRoutes