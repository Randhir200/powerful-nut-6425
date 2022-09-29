import { Box, Heading, Img, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaFacebook, FaLinkedin, FaTwitterSquare, FaYoutube} from "react-icons/fa"
const Footer = () => {
    return (
        <Box h="auto" bg="black" display={"flex"} flexDirection="column" color="white">
            <Box w="80%" h="100%" margin={"auto"} >
                <SimpleGrid columns={7} padding="20px">
                    <Box pt="20px" h="auto" w="90%" align={"center"}>
                        <Img src="https://imgs.search.brave.com/BEwE4sSrLw6CI77kMSIogzHkuu-1YvvpkPcx7l-37LU/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMy8zYS9F/dmVyaG91cl8lMjhz/b2Z0d2FyZSUyOV9s/b2dvLnBuZw" w="70px" h="70px" />
                    </Box>
                    <Box textAlign="left" pl="20px" pt="20px" lineHeight={"40px"}  h="auto" w="90%" display={"flex"} flexDirection="column">
                        <Heading fontSize={"20px"} color="grey">Company</Heading>
                        <NavLink>About Us</NavLink>
                        <NavLink>Contact</NavLink>
                    </Box>
                    <Box textAlign="left" pl="20px" pt="20px" lineHeight={"40px"}  h="auto" w="90%" display={"flex"} flexDirection="column">
                        <Heading fontSize={"20px"} color="grey">Product</Heading>
                        <NavLink>Tour</NavLink>
                        <NavLink>Pricing</NavLink>
                        <NavLink>Request a demo</NavLink>
                        <NavLink>Customers</NavLink>
                        <NavLink>API & docs</NavLink>
                        <NavLink>Status</NavLink>
                    </Box>
                    <Box textAlign="left" pl="20px" pt="20px" lineHeight={"40px"}  h="auto" w="90%" display={"flex"} flexDirection="column">
                        <Heading fontSize={"20px"} color="grey">Solutions</Heading>
                        <NavLink>Time tracking</NavLink>
                        <NavLink>Project budgeting</NavLink>
                        <NavLink>Visual planning</NavLink>
                        <NavLink>Expenses</NavLink>
                        <NavLink>Reporting</NavLink>
                        <NavLink>Invoicing</NavLink>
                        <NavLink>Time card calculator</NavLink>
                        <NavLink>Weekly timesheet template</NavLink>
                        <NavLink>Invoice generator</NavLink>
                    </Box>
                    <Box textAlign="left" pl="20px" pt="20px" lineHeight={"40px"}  h="auto" w="90%" display={"flex"} flexDirection="column">
                        <Heading fontSize={"20px"} color="grey">Integrations</Heading>
                        <NavLink>Asana </NavLink>
                        <NavLink>Basecamp</NavLink>
                        <NavLink>Trello</NavLink>
                        <NavLink>Jira</NavLink>
                        <NavLink>GitHub</NavLink>
                        <NavLink>ClickUp</NavLink>
                        <NavLink>Monday</NavLink>
                        <NavLink>Notion</NavLink>
                        <NavLink>Todoist</NavLink>
                        <NavLink>GitLab</NavLink>
                        <NavLink>All</NavLink>
                    </Box>
                    <Box textAlign="left" pl="20px" pt="20px" lineHeight={"40px"}  h="auto" w="90%" display={"flex"} flexDirection="column">
                        <Heading fontSize={"20px"} color="grey">Learn</Heading>
                        <NavLink>Resources</NavLink>
                        <NavLink>Help center</NavLink>
                        <NavLink>Blog</NavLink>
                        <NavLink>Product updates</NavLink>
                        <NavLink>Timesheet app</NavLink>
                        <NavLink>Time clock app</NavLink>
                        <NavLink>Attendance tracker</NavLink>
                        <NavLink>Work hours tracker</NavLink>
                        <NavLink>Employee time tracking </NavLink>
                    </Box>
                    <Box textAlign="left" pl="20px" pt="20px" h="auto" w="90%">
                      <NavLink>Download</NavLink>
                    </Box>
                </SimpleGrid>
            </Box>
            <Box  w="80%" h="20%" display="flex" margin={"auto"}>
             <Box display="flex" w="100%">
                <NavLink onClick={()=>{
                    document.documentElement.scrollTop = 0;
                }}>© 2022 Everhour</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span><NavLink>Terms</NavLink> | <NavLink>Privacy</NavLink> | <NavLink>Cookies</NavLink> | <NavLink>Sitemap</NavLink> </span>
             </Box>
             <Box display="flex" gap="20px" >
                <NavLink to="https://www.facebook.com/everhour/" target="_blank"><FaFacebook size={"20px"}/></NavLink>
                <NavLink to="https://twitter.com/everhour" target="_blank"><FaTwitterSquare size={"20px"}/></NavLink>
                <NavLink to="https://www.linkedin.com/company/everhour/" target="_blank"><FaLinkedin size={"20px"}/></NavLink>
                <NavLink to="https://www.youtube.com/channel/UC1JUNFlxVwkAdaIb7ztZbbA" target="_blank"><FaYoutube size={"20px"}/></NavLink>
             </Box>
            </Box>
        </Box>
    )
}

export default Footer