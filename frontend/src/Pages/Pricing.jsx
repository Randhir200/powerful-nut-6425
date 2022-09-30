import { Box, Stack, Switch, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Pricing = () => {
  const [toggle,setToggle] = useState(false)
  console.log(toggle)
  return (
    <Box h="auto" mt="140px">
      {/* Upper section */}
      <Box border={"1px solid red"} h="auto" w="80%" m="auto">
        <Text fontSize="40px">Simple pricing</Text>
        <Text fontSize="20px" color={"gray"} fontWeight="300" mt="20px">Start with no commitment. Try everything. Subscribe when you love it.</Text>
        <Stack direction='row' justifyContent="center" mt="20px">
         {toggle? <Text color="#57BB71">Monthly</Text>: <Text>Monthly</Text>} <Switch colorScheme='teal' size='lg' onChange={()=>setToggle(!toggle)} /> {!toggle?<Text color="#57BB71">Yearly</Text>:<Text>Yearly</Text>}
        </Stack>
      </Box>
    </Box>
  )
}

export default Pricing