import { Box, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const Homepage = () => {
  return (
    <Box mt="120px">
         {/* Upper Section */}
         <Box w="100%" margin="auto" >
             <Heading>Powerful time tracking software with hassle-free <br/> integrations</Heading>
             <p style={{width:"60%",margin:"auto",marginTop:"40px", color:"grey",fontSize:"16px"}}>Accurate time tracker for budgeting, client invoicing and painless payroll.<br/>
           Works with the apps your team already use</p>
           <Input type="email" placeholder='Work email... ' w="40%" mt="40px" h="50px" border="1px solid grey"/>
         </Box>
    </Box>
  )
}

export default Homepage