import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Time from '../Components/Time'
import Demo from '../Pages/Demo'
import Homepage from '../Pages/Homepage'
import Price from '../Pages/Price'
import Asana from "../Pages/Integration/Asana"
import Clickup from "../Pages/Integration/Clickup"
import Allintegration from '../Pages/Allintegration'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/price" element={<Price/>}/>
        <Route path="/time" element={<Time/>}/>
        <Route path="/asana" element={<Asana/>}/>
        <Route path="/clickup" element={<Clickup/>}/>
        <Route path="/integration" element={<Allintegration/>}/>

        
        


        
    </Routes>
  )
}

export default MainRoutes