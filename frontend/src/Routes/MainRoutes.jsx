import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Client from '../Components/Client'
import Mainpage from '../Components/Mainpage'
import Project from '../Components/Project'
import Demo from '../Pages/Demo'
import Homepage from '../Pages/Homepage'
import Price from '../Pages/Price'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/price" element={<Price/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/client" element={<Client/>}/>
        <Route path="/mainpage" element={<Mainpage/>}/>

        
    </Routes>
  )
}

export default MainRoutes