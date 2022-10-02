import React, { useEffect } from 'react'
import { Box, Button, Heading, Img, Input, Text,Center,Spacer ,Flex} from "@chakra-ui/react";
import LoginForm from '../Components/LoginForm';
import SignupForm from '../Components/SignupForm';
import '../Styles/login.css'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { All_FAILED } from '../Redux/auth/ActionType';
function Signup() {
const navigate=useNavigate()
  const isAuth=useSelector((store)=>store.AuthReducer.isAuth)
  const isError=useSelector((store)=>store.AuthReducer.isError)
  const isLoading=useSelector((store)=>store.AuthReducer.isLoading)
const dispatch=useDispatch()
  useEffect(()=>{
    isAuth&&notify("Successfully Register ")
    isError&&Nav()
    },[isError,isLoading])
const Nav=()=>{
  notify("User Exist! Please Login. ")
  setTimeout(()=>{
    navigate("/Login")
  },2000)
  dispatch({type:All_FAILED})
}
  const notify = (res) => toast(res);
  return (
<Box w="100%" mt='4rem'>
<ToastContainer position="top-center"/>
    <Center  >
<Box className="SignupSection" padding="1rem"   h='100%' >
<Center>
<Box fontWeight="bold" fontSize="xl">Welcome to Everhour</Box>
</Center>
<Center>Add your to make collaborating easy</Center>

<Center mt='-1px'><SignupForm/></Center>
</Box></Center>
</Box>
  )
}

export default Signup
