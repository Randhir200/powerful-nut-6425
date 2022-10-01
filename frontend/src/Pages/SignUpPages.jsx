import React from 'react'
import {Flex, Box,SimpleGrid, Button, Heading, Img, Input, Text,Center,Spacer, useTimeout } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { All_FAILED } from '../Redux/ActionType';
function SignUpPages() {
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const [state, setState] = useState({
      email: "",
      password: "",
    });
    const HandleSubmit = () => {
      // dispatch(Login(state))
      window.location.href = "http://localhost:8080/user/auth/google";
      // .then((r)=>)
    };
    const HandleGoogle = () => {
    //   dispatch(GoogleOauth);
    };
    const HandleClick=()=>{
   
      setTimeout(() => {
        navigate("/register")
      }, 2000);
      
    }

const notify = () => toast("Let's Go!");
  
  return (
    <Box w="100%"mt='4rem'>
     
     <ToastContainer position="top-center"/>
        <Box  w="100%">
<Center ><Box padding={'20px'}  w="60%">
<Box>

<Center fontWeight="bold" color={"#333"}  className="Header_signup">Make your team more productive </Center>
<Center fontWeight="bold" color={"#333"} className="Header_signup" >with Everhour</Center>
<Center><Box  color={'gray.500'}>Join 3,500+ customers who use Everhour to track time and plan their future projects more effectively</Box></Center>

</Box>
<Box>
<Center>
<Box w="100%" className="background" mt="1rem">
  <Center> <Box className='Google_Button'>
   <a href="http://localhost:8080/user/auth/google">    <Center w="100%">
          {" "}
        <Button
            w="80%"
            padding="20px"
            p="20px"
            colorScheme="white"
            mt="10px"
            leftIcon={<FcGoogle />}
            border="1px solid black"
            onClick={HandleGoogle}
          >
            <Box
              style={{ margin: "0px auto 0px auto", color: "gray" }}
              className="google_btn"
            >
              {" "}
              Sign up with google
            </Box>
          </Button>
        </Center></a> 
        <Center w="100%">
          {" "}
          <Box m={3} color="gray">
            or
          </Box>
        </Center>
        <Center>
          {" "}
          <Input
            
            id='Try_Here1'
            placeholder="Enter your email"
            isRequired
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </Center>

        <Center mt="10px">
          {" "}
          <Button onClick={HandleClick}
            bg="green.300"
            borderRadius="5px"
          
            id='Try_Here'
          mt='1.6rem'
          isLoading={false}
          loadingText='Submitting'
          >
            Get started
          </Button>
        </Center>

      <Center mt='1.6rem' color={'gray.500'} fontSize='sm'>
      Free to try   •   No credit card required   •   1-minute signup
      </Center>
      </Box></Center>   
    </Box>

</Center>

</Box>

</Box></Center>

        </Box>
        <Box>


        <SimpleGrid columns={[1, 2, 3]} className='Card_Grid' spacing='40px' mt='8%'>
  <Box  className="card"  id='a'>
  “I am the owner of the company, and I use Everhour for timekeeping of myself and my subcontractors. All team members use the system - from web developers to tech support to project management to design.”

— Jennifer H. (Source: <span className='Link'>TrustRadius</span>) 
  </Box>
  <Box  className="card"  id='b'>
  “Everhour is being used by my department now, but it’s planned to be used across the whole company. We were having problems tracking the times of every project and Everhour ended up being the best solution to the issue. We’re tracking our tasks involved in every project, in every level (software development, meetings, project management, etc.)”

— Maria Lucia S. (Source: <span className='Link'>TrustRadius</span>) 
  </Box>
  <Box  className="card"  id='c'>
  “Everhour helps me manage/plan my weekly activities a lot more effectively, since I know how much time I have to work on things each day, and can quickly update estimated times to reallocate tasks as needed.”

— Dan S.  (Source: <span className='Link'>Capterra</span>)
  </Box>
  <Box className="card"  id='d'>“We are using Everhour as a core business software, because our business is to sell our time. When you use such software, what you care about the most is speed, flexibility, ability to integrate with all major project management software. And Everhour is exactly that kind of software”

— Ivan M.  (Source: <span className='Link'>G2Crowd</span>)</Box>
  <Box  className="card"  id='e'>“We are a 15 people team working remotely from different cities of Latin America and Europe, and time tracking for each client, project, and task has always been a major issue. We’ve been using Everhour for the past year or so, and it has become an essential tool for our team. It does not only give us the ability to track how much time we have dedicated to a project but also to estimate how much time a particular task will need in order to be completed next time and by who. Easily create and save reports with just a few clicks”

— Daniel Y. (Source: <span className='Link'>TrustRadius</span>)  </Box>
  <Box  className="card" id='f'>
  “The most important gain from using Everhour is that we can track our tasks in real-time without having to leave the browser. The Chrome add-on helps us initiate the time for a specific task. If we are already on Asana, a simple click does the job.”

— Dimitris R.(Source: <span className='Link'>Capterra</span>)  
  </Box>
  <Box  className="card"  id='g'>“Everhour’s integration with Asana is wonderful for a remote team. We track all activities in Asana, but before Everhour I often wondered how long it was taking to do a task, now I know exactly. I can see who is working right now and a summary each day”.

— Doug H. (Source: <span className='Link'>G2Crowd</span>) </Box>
  <Box  className="card" id='h'>
  “Everhour has already paid for itself for the year by helping me track time I was missing in client projects. It is easy to use, has friendly customer service people, and the reports make it easy to invoice clients and track projects.”

— Jennifer D. (Source: <span className='Link'>TrustRadius</span>)


  </Box>
</SimpleGrid>

         
        </Box>
      <Center>  <Button mt='2rem' colorScheme='green' variant='outline'>Read More</Button></Center>
    </Box>
  )
}

export default SignUpPages
