import React from 'react';
import ServiceHeader from '../Components/ServiceHeader';
import { Heading, Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '../Components/Sidebar';

const Projects = () => {
  return (
    <>
      <Grid
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        mt='100px'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={2} bg='papayawhip'>
          <ServiceHeader />
          <Heading>Hello</Heading>
        </GridItem>
        <GridItem colSpan={4} bg='tomato' />
      </Grid>
    </>
  );
};

export default Projects;
