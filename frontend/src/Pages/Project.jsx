import {
  Box,
  Button,
  Checkbox,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Input,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import { ChevronDownIcon } from '@chakra-ui/icons';

import ProjectModal from '../Components/ProjectModal';
import { getData } from '../Redux/projects/action';

const Project = () => {
  const product = useSelector((state) => state.data);
  console.log(product)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(`http://localhost:8080/projects/`));
  },[]);
  return (
    <>
      <Flex h='50px' w='95%' justify='space-between' m='auto' align='center'>
        <Text fontSize='22px' color='black'>Create Projects</Text>
        <ProjectModal data={'Create projects'} />
      </Flex>

      <Flex
        w='95%'
        m='auto'
        bg='#f9f9f9'
        mt='25px'
        h='50px'
        justify='space-between'
      >
        <Checkbox defaultChecked>Select all</Checkbox>
        <Flex w='33%' gap='10px'>
          <Menu bg='white'>
            <MenuButton
              px={4}
              py={2}
              transition='all 0.2s'
              borderRadius='md'
              borderWidth='1px'
              _hover={{ bg: 'gray.400' }}
              _expanded={{ bg: 'blue.400' }}
              _focus={{ boxShadow: 'outline' }}
            >
              <Text fontSize='12px' color='grey'>
                Group By
              </Text>
              File <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>New File</MenuItem>
              <MenuItem>New Window</MenuItem>
              <MenuDivider />
              <MenuItem>Open...</MenuItem>
              <MenuItem>Save File</MenuItem>
            </MenuList>
          </Menu>

          <Menu bg='white'>
            <MenuButton
              px={4}
              py={2}
              transition='all 0.2s'
              borderRadius='md'
              borderWidth='1px'
              _hover={{ bg: 'gray.400' }}
              _expanded={{ bg: 'blue.400' }}
              _focus={{ boxShadow: 'outline' }}
            >
              <Text fontSize='12px' color='grey'>
                FILTER
              </Text>
              File <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>New File</MenuItem>
              <MenuItem>New Window</MenuItem>
              <MenuDivider />
              <MenuItem>Open...</MenuItem>
              <MenuItem>Save File</MenuItem>
            </MenuList>
          </Menu>

          <Input w='55%' placeholder='Basic usage' />
        </Flex>
      </Flex>
      <Flex
        bg='#f9f9f9'
        w='95%'
        m='auto'
        h='30px'
        pl='10px'
        mt='25px'
        pr='180px'
        justify='space-between'
        align='center'
      >
        <Text fontSize='12px' color='grey'>
          Name
        </Text>
        <Text fontSize='12px' color='grey'>
          BUDGET
        </Text>
      </Flex>
      <Flex>
      <TableContainer  w="100%">
        <Table variant='striped' colorScheme='teal'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      </Flex>
    </>
  );
};

export default Project;
