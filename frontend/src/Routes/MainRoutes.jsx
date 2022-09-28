import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Demo from '../Pages/Demo'
import Homepage from '../Pages/Homepage'
import Price from '../Pages/Price'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/price" element={<Price/>}/>

        
    </Routes>
  )
}

export default MainRoutes