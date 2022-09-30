import { Box, Flex, Text, Heading, Img, Input } from "@chakra-ui/react";
import React from "react";
import { Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import styles from "../Styles/Demo.module.css";
import { NavLink } from 'react-router-dom'
const Demo = () => {
  return (
    <Box className={styles.main_container}>
      <Box className={styles.heading_text}>
        <Heading fontSize={"52px"}>Book a 30-min live demo 🚀</Heading>
        <Text fontFamily="'geomanist-regular',sans-serif"
          fontWeight="400" fontSize="1.375rem" mt="30px" lineHeight="1.35rem" color="#767676">10+ users? Let one of our customer success experts show you how Everhour <br /> works, with plenty of time set aside for questions</Text>
        <Box display="flex" gap="30px" justifyContent="center" mt="50px">
          <Button bg="#57BB71" w="200px" h="50px" color="white" fontWeight="400">Schedule time</Button>
          <Button border="1px solid #57BB71" w="200px" h="50px" bg="white" color="#57BB71" fontWeight="400"><NavLink>Watch videos</NavLink></Button>
        </Box>
      </Box>
      {/* https://www.youtube.com/playlist?list=PLpi40TLI2leiI-UuWIu-19xdTuGZwtHU3 */}
      {/* Card */}
      <Box className={styles.center_card}>
        <ul>
          <Text>What you'll learn</Text>
          <li><span style={{ fontSize: "10px" }}>🟢</span>&nbsp;&nbsp;&nbsp;<Text>We’ll briefly explain what’s so special about Everhour.</Text></li>
          <li><span style={{ fontSize: "10px" }}>🟢</span>&nbsp;&nbsp;&nbsp;<Text>We’ll teach you the basics of using the app, with plenty of time for questions.</Text></li>
          <li><span style={{ fontSize: "10px" }}>🟢</span>&nbsp;&nbsp;&nbsp;<Text>We’ll answer all questions about setting up Everhour, using it with your team, or anything else you’d like to ask.</Text></li>
        </ul>
        <br />
        <ul>
          <Text>Other information</Text>
          <li><span style={{ fontSize: "10px" }}>🟢</span> &nbsp;&nbsp;&nbsp;<Text>Screenshare is done in the browser by means of Whereby software using this link. Please ensure that your mic and speakers work in advance!</Text></li>
          <li><span style={{ fontSize: "10px" }}>🟢</span> &nbsp;&nbsp;&nbsp;<Text>Demos typically last 30 minutes, but we will adjust the time based on your needs.</Text></li>
          <li><span style={{ fontSize: "10px" }}>🟢</span> &nbsp;&nbsp;&nbsp;<Text>Feel free to invite other team members to join this call.</Text></li>
          <li><span style={{ fontSize: "10px" }}>🟢</span> &nbsp;&nbsp;&nbsp;<Text>No available time slots? Contact us and we'll surely work something out.</Text></li>

        </ul>
      </Box>
      <Box className={styles.bottomSignup} >
        <Box w="100%" pl="30px" pt="30px" >
          <Heading>Skip the demo and try for yourself?</Heading>
          <Text color="grey" mt="10px" fontSize={"15px"}>Try Everhour for free to see if it works for your business.<br />
            No credit card required. No obligations.</Text>
          <Box display={"flex"} justifyContent="center" gap="10px">
            <Input type="email" placeholder='Work email... ' w="60%" mt="40px" h="50px" border="1px solid grey" />

            <Button bg="#57BB71" w="20%" mt="40px" h="50px" fontWeight="700">Try free</Button>
          </Box>
          <Box w="50%" m="auto" display="flex" alignItems="center" mt="10px" h="50px" >
            <Img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRkZDMTA3IiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMS42NDksNC42NTctNi4wOCw4LTExLjMwMyw4Yy02LjYyNywwLTEyLTUuMzczLTEyLTEyYzAtNi42MjcsNS4zNzMtMTIsMTItMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYsNi4wNTMsMjkuMjY4LDQsMjQsNEMxMi45NTUsNCw0LDEyLjk1NSw0LDI0YzAsMTEuMDQ1LDguOTU1LDIwLDIwLDIwYzExLjA0NSwwLDIwLTguOTU1LDIwLTIwQzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkYzRDAwIiBkPSJNNi4zMDYsMTQuNjkxbDYuNTcxLDQuODE5QzE0LjY1NSwxNS4xMDgsMTguOTYxLDEyLDI0LDEyYzMuMDU5LDAsNS44NDIsMS4xNTQsNy45NjEsMy4wMzlsNS42NTctNS42NTdDMzQuMDQ2LDYuMDUzLDI5LjI2OCw0LDI0LDRDMTYuMzE4LDQsOS42NTYsOC4zMzcsNi4zMDYsMTQuNjkxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Q0FGNTAiIGQ9Ik0yNCw0NGM1LjE2NiwwLDkuODYtMS45NzcsMTMuNDA5LTUuMTkybC02LjE5LTUuMjM4QzI5LjIxMSwzNS4wOTEsMjYuNzE1LDM2LDI0LDM2Yy01LjIwMiwwLTkuNjE5LTMuMzE3LTExLjI4My03Ljk0NmwtNi41MjIsNS4wMjVDOS41MDUsMzkuNTU2LDE2LjIyNyw0NCwyNCw0NHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMTk3NkQyIiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMC43OTIsMi4yMzctMi4yMzEsNC4xNjYtNC4wODcsNS41NzFjMC4wMDEtMC4wMDEsMC4wMDItMC4wMDEsMC4wMDMtMC4wMDJsNi4xOSw1LjIzOEMzNi45NzEsMzkuMjA1LDQ0LDM0LDQ0LDI0QzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48L3N2Zz4=" w="30px" />&nbsp;&nbsp;<NavLink to="/signup">Or sign up with Google Account</NavLink></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Demo;
