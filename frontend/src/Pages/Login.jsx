import React from 'react'
import Header from '../Components/Header'
import LoginForm from '../Components/LoginForm'
import {Flex, Box, Button, Heading, Img, Input, Text,Center,Spacer } from "@chakra-ui/react";
import SideCard from '../Components/SideCard';
import BottonTrail from '../Components/BottonTrail';
import AdGirl from '../Components/AdGirl';
import '../Styles/login.css'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
function Login() {
  return (
    <>
    <Navbar/>
  <Box w='100%'>
<Box mt='10%'><Header/></Box>
<Center w="100%" mt="5%"><Box w='80%' className="LoginSection"  padding="20px"> 
<LoginForm/>
<SideCard/>
</Box></Center>
<Center w='100%' mt='6%'><BottonTrail/></Center>
<Box w='96%'className="adGirl" mt='3%'><AdGirl/></Box>
  </Box>
  <Footer/>
  </>
  )
}

export default Login
