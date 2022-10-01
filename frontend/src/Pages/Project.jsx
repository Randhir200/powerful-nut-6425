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
} from '@chakra-ui/react';
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import { ChevronDownIcon } from '@chakra-ui/icons';

import Modalform from '../Components/Modalform';
import { getData } from '../Redux/projects/action';

const Project = () => {
  const data = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  console.log(data)
  useEffect(() => {
    dispatch(getData(`https://fakestoreapi.com/products`));
  },[]);
  return (
    <>
      <Flex h='50px' w='95%' justify='space-between' m='auto' align='center'>
        <Text fontSize='22px' color='black'>Create Projects</Text>
        <Modalform data={'Create projects'} />
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
    </>
  );
};

export default Project;
