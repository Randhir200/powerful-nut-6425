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
  FormControl,
  FormLabel,
  Radio,
  NumberInput,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Signup } from "../Redux/action";
import { saveLocalData } from "../utils/localStorage";

function SignupForm() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    Job_title: "",
    Phone: 0,
    password: "",
  });
  const HandleSubmit = () => {
    dispatch(Signup(state)).then((res) => console.log(res));
  };

  const isLoading = useSelector((store) => store.isLoading);
  return (
    <FormControl
      className="InputForm"
      isRequired
      w="100%"
      padding="40px"
      paddingTop="10px"
      onSubmit={HandleSubmit}
    >
      <FormLabel mt="1rem">Full Name</FormLabel>
      <Input
        focusBorderColor="green.400"
        placeholder="e.g. M.S.Dhoni"
        isRequired
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      <FormLabel mt="1rem">Email Address</FormLabel>
      <Input
        focusBorderColor="green.400"
        placeholder="e.g. saurav@gmail.com"
        type={"email"}
        isRequired
        onChange={(e) => setState({ ...state, email: e.target.value })}
      />
      <FormLabel mt="1rem">Job Title</FormLabel>
      <Input
        focusBorderColor="green.400"
        placeholder="e.g. Co-Founder/CEO"
        isRequired
        onChange={(e) => setState({ ...state, Job_title: e.target.value })}
      />
      <FormLabel mt="1rem">Phone</FormLabel>
      <Input
        focusBorderColor="green.400"
        type="number"
        placeholder="9988776655"
        isRequired
        onChange={(e) => setState({ ...state, phone: e.target.value })}
      />
      <FormLabel mt="1rem">Password</FormLabel>
      <Input
        focusBorderColor="green.400"
        type="password"
        placeholder="Type your password..."
        isRequired
        onChange={(e) => setState({ ...state, password: e.target.value })}
      />
      <Radio mt="0.9rem" colorScheme="green" value="Sasuke" isRequired>
        I have read and agree to the <p className="Link">Terms</p> and{" "}
        <p className="Link">privacy policy</p>
      </Radio>
      <Button
        mt={4}
        colorScheme="green"
        w="100%"
        type="submit"
        isLoading={isLoading}
        loadingText="Submitting"
        onClick={HandleSubmit}
        disabled={state.password<7  }
      >
        Submit
      </Button>
    </FormControl>
  );
}

export default SignupForm;
