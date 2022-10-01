import {
    Routes,
    Route,
   
  } from "react-router-dom";

  import React from 'react'
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import SignUpPages from "../Pages/SignUpPages";
  
  function AllRoutes() {
    return (
      <Routes>
 <Route path="/googleAuth" element="http://localhost:8080/user/auth/google"></Route>
<Route path="/register" element={<Signup/>}/>
<Route path='/' element={<SignUpPages/>}/>
<Route path="/Login" element={<Login/>}/>

      </Routes>
    )
  }
  
  export default AllRoutes
  