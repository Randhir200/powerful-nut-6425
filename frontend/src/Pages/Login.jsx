import React from 'react'
import Header from '../Components/Header'
import LoginForm from '../Components/LoginForm'
import {Flex, Box, Button, Heading, Img, Input, Text,Center,Spacer } from "@chakra-ui/react";
import SideCard from '../Components/SideCard';
import BottonTrail from '../Components/BottonTrail';
import AdGirl from '../Components/AdGirl';
import '../styles/login.css'
function Login() {
  return (
  <Box w='100%'>
<Box mt='10%'><Header/></Box>
<Center w="100%" mt="5%"><Box w='80%' className="LoginSection"  padding="20px"> 
<LoginForm/>
<SideCard/>
</Box></Center>
<Center w='100%' mt='6%'><BottonTrail/></Center>
<Box w='96%'className="adGirl" mt='3%'><AdGirl/></Box>
  </Box>
  )
}

export default Login
