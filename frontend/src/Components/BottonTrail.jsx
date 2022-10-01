import React, { useState } from "react";
import {
  Flex,
  Box,
  Button,
  Heading,
  Img,
  Input,
  Text,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const BottonTrail = () => {
  const navigate=useNavigate()
  const HandleClick=()=>{
    navigate("/register")
        }
        const [state,setState]=useState({
          email:""
        })

  return (
    <Box
      w="100%"
     

      className="background"
    >
      <Center>
        {" "}
        <Box className="header" fontWeight="bold" >
          New to Everhour?
        </Box>
      </Center>
      <Center mt="1rem">
        {" "}
        <Box color="gray.600" className="text">
          Try Everhour for free and see if it works for your business
        </Box>
      </Center>
      <Center mt="0.9rem">
        {" "}
        <Flex w='40%'>
          <Input type='email' placeholder="Work email..." onChange={(e)=>setState({...state,email:e.target.value})}/>
          
          <Button ml='0.7rem' color="white" bg="green.500" fontSize="sm" onClick={HandleClick} disabled={state.email<5}>
            Try it free
          </Button>
        </Flex>
      </Center>
      <Center mt="1rem">
      <a href="http://localhost:8080/user/auth/google">     <Box>
          <Button
            colorScheme="white"
            border="none"
            leftIcon={<FcGoogle size="2rem" />}
          >
            <Box color="gray"> Or Sign up with google account </Box>
          </Button>
        </Box></a>
      </Center>
    </Box>
  );
};

export default BottonTrail;
