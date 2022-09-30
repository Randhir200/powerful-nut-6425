import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Demo from '../Pages/Demo'
import Homepage from '../Pages/Homepage'
import Pricing from '../Pages/Pricing'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/demo" element={<Demo/>}/>
    </Routes>
  )
}

export default MainRoutes