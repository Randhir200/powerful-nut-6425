import React from 'react';
import { Flex, Spacer, Box, Text } from '@chakra-ui/react';
const ServiceHeader = () => {
  return (
    <>
      <Flex>
        <Box p='4'>
        <Text fontSize='lg'>Projects</Text>
        </Box>
        <Spacer />
        <Box p='4' bg='green.400'>
          Box 2
        </Box>
      </Flex>
    </>
  );
};

export default ServiceHeader;
