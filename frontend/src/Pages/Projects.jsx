import React from 'react';
import ServiceHeader from '../Components/ServiceHeader';
import { Heading,Grid, GridItem } from '@chakra-ui/react';

const Projects = () => {
  return (
    <>
      <Grid
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
        >
  <GridItem rowSpan={2} colSpan={1} bg='tomato' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={4} bg='tomato' />
</Grid>
      <Heading mt='100px'>Hello</Heading>
      <ServiceHeader />
    </>
  );
};

export default Projects;
