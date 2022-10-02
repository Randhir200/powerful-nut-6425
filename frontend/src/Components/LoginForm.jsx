import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  Box,
  Button,
  Input,
  Center,
} from "@chakra-ui/react";
import { GoogleOauth, Login } from "../Redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const HandleSubmit = () => {
    dispatch(Login(state))

  };
 
  const HandleGoogle = () => {
    dispatch(GoogleOauth);
  };
  const notify = (res) => toast(res);
const isLoading=useSelector((store)=>store.isLoading)
const isAuth=useSelector((store)=>store.isAuth)
const isError=useSelector((store)=>store.isError)
useEffect(()=>{
isAuth&&notify("Successfully Login ")
isError&&notify("Whoops! Something is wrong! ")
},[isError,isLoading])
console.log("iserror",isError)
  return (
    <Box w="100%" className="background" mt="1rem">
       <ToastContainer position="top-center"/>
      <Box w="80%">
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
          <Box m={5} color="gray">
            or
          </Box>
        </Center>
        <Center>
          {" "}
          <Input
            w="80%"
            placeholder="Enter your email"
            isRequired
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </Center>

        <Center>
          {" "}
          <Input
            w="80%"
            placeholder="Password"
            type="password"
            mt="10px"
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
        </Center>
        <Center mt="10px">
          {" "}
          <Button
            bg="green.300"
            borderRadius="5px"
            w="60%"
            onClick={HandleSubmit}
            isLoading={isLoading}
            loadingText='Submitting'
            disabled={state.password<7}
          >
            Log in
          </Button>
        </Center>

        <Center
          w="100%"
          className="button"
          color="gray.400"
          fontSize="sm"
          mt="0.6rem"
        >
          <u>Login with SSO</u>
        </Center>
        <Center className="button" color="gray.400" fontSize="sm" mt="0.8rem">
          <u fontSize="xs">Reset Password</u>
        </Center>
      </Box>
    </Box>
  );
};

export default LoginForm;
