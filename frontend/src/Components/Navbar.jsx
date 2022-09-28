import React from 'react'
import { Box, Button, Img, Tag, Text } from '@chakra-ui/react'
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
const Navbar = () => {
    const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
        <Box p='1'>
            <Tag ref={ref} {...rest}>
                {children}
            </Tag>
        </Box>
    ))
    return (
        <Box className={style.Navbar} h="80px" w="100%">
            <Box h="100%" w="100%" display="flex" gap="40px" alignItems="center" paddingLeft={'40px'}>
                <Box h='60%' w='fit-content' display="flex" gap="20px" alignItems="center">
                    <Img src="https://imgs.search.brave.com/BEwE4sSrLw6CI77kMSIogzHkuu-1YvvpkPcx7l-37LU/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMy8zYS9F/dmVyaG91cl8lMjhz/b2Z0d2FyZSUyOV9s/b2dvLnBuZw" h="70%" />
                    <Text>EverHour</Text>
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

                <NavLink>Pricing</NavLink>
                <NavLink>Demo</NavLink>
            </Box>
            <Box h="100%" w="60%" display={"flex"} justifyContent=
                "flex-end" gap="30px" alignItems={"center"} paddingRight="40px">
                <Button bg="white'">Login</Button>
                <Button bg="#57BB71" color="white">SignUp</Button>
            </Box>
        </Box>
    )
}

export default Navbar