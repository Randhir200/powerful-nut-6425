import React from 'react'
import {Flex, Box, Button, Heading, Img, Input, Text,Center,Spacer } from "@chakra-ui/react";

function Header() {
  return (
  <Box>
     <Center> <Box className="header" fontWeight="bold">Log in to Everhour</Box></Center>
    <Center><Flex className="text">Using the former version of Everhour? Please {"  "} <Flex className='Link text'>login here</Flex></Flex></Center>
  </Box>
  )
}

export default Header
