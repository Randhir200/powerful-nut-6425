import React from 'react'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Img, Input, Tag, Text, useDisclosure } from '@chakra-ui/react'
import style from '../Styles/Nav.module.css'
import { Link, NavLink } from 'react-router-dom'
import {
    Tooltip,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
} from '@chakra-ui/react'
// import Demo from '../Pages/Demo'
const Navbar = () => {
    const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
        <Box p='1'>
            <Tag ref={ref} {...rest}>
                {children}
            </Tag>
        </Box>
    ))
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Box className={style.Navbar} h="80px" w="100%">
                <Box h="100%" w="100%" display="flex" gap="40px" alignItems="center" paddingLeft={'40px'}>
                    <Box h='60%' w='fit-content' display="flex" gap="20px" alignItems="center">

                        <Img src="https://imgs.search.brave.com/BEwE4sSrLw6CI77kMSIogzHkuu-1YvvpkPcx7l-37LU/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMy8zYS9F/dmVyaG91cl8lMjhz/b2Z0d2FyZSUyOV9s/b2dvLnBuZw" h="70%" />
                        <NavLink to="/">  <Text>EverHour</Text>  </NavLink>

                    </Box>
                    <Box display="flex" gap="5px" alignItems="center">

                        <Popover>
                            <PopoverTrigger>
                                <NavLink>Integrations</NavLink>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Confirmation!</PopoverHeader>
                                <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                                <PopoverFooter>
                                    <Link>See All Integrations</Link>
                                </PopoverFooter>
                            </PopoverContent>
                        </Popover>
                        <Tooltip>
                            <CustomCard bg="#57BB71" color="white">New</CustomCard>
                        </Tooltip>
                    </Box>
                    <Link to={"/pricing"}>Price</Link>
                    <Link to={"/demo"}>Demo</Link>

                </Box>
                <Box h="100%" w="60%" display={"flex"} justifyContent=
                    "flex-end" gap="30px" alignItems={"center"} paddingRight="40px">
                    <Button bg="white"><Link to="/Login" >Login</Link></Button>
                    <Button bg="#57BB71" color="white"><Link to="/Signup" >SignUp</Link></Button>
                </Box>
            </Box>
            {/* HamIcon */}
            <Box className={style.HamIcon} h="80px" w="100%">
                <Box h="100%" w="100%" display="flex" gap="40px" alignItems="center" paddingLeft={'40px'}>
                    <Box h='60%' w='fit-content' display="flex" gap="20px" alignItems="center">

                        <Img src="https://imgs.search.brave.com/BEwE4sSrLw6CI77kMSIogzHkuu-1YvvpkPcx7l-37LU/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMy8zYS9F/dmVyaG91cl8lMjhz/b2Z0d2FyZSUyOV9s/b2dvLnBuZw" h="70%" />
                        <NavLink to="/">  <Text>EverHour</Text>  </NavLink>

                    </Box>

                </Box>
                <Box h="100%" w="100%" alignItems="center" display={"flex"} pr="50px" justifyContent={"flex-end"}>
                    <Img src="https://img.icons8.com/material-outlined/344/menu--v1.png" w="30px" onClick={onOpen} />
                </Box>
            </Box>
            {/* Drawer */}
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size="xl"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody display={"flex"} flexDirection="column" fontSize="30px" mt="100px">
                        <NavLink to="/">Tour</NavLink>
                        <NavLink>Integrations</NavLink>
                        <NavLink to={"/pricing"}>Price</NavLink>
                        <NavLink to={"/demo"}>Demo</NavLink>

                        <Box w="60%" display={"flex"} justifyContent="center" flexDirection={"column"} gap="30px" ml="150px" mt="100px" alignItems={"center"} paddingRight="40px">
                            <Button bg="white" w="70%"><Link to="/Login">Login</Link></Button>
                            <Button bg="#57BB71" color="white" w="70%"  ><NavLink to="/Signup">SignUp</NavLink></Button>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Navbar
