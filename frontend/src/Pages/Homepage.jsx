import { Box, Button, Heading, Img, Input, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import HomeAppCarousel from '../Components/HomeAppCarousel'
import { NavLink } from 'react-router-dom'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import style from '../Styles/Home.module.css'
const sliderData = [
  {
    "id": 1,
    "src": "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp"
  },
  {
    "id": 2,
    "src": "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/trello-primary.webp"
  },
  {
    "id": 3,
    "src": "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/basecamp-primary.webp"
  },
  {
    "id": 4,
    "src": "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/jira-primary.webp"
  },
  {
    "id": 5,
    "src": "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/github-primary.webp"
  },
  {
    "id": 6,
    "src": "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/clickup-primary.webp"
  },
  {
    "id": 7,
    "src": "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/monday-primary.webp"
  },
  {
    "id": 8,
    "src": "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/notion-primary.webp"
  },
]
const Homepage = () => {
  return (
    <Box mt="120px" mb="60px" className='Home_main'>
      {/* Upper Section */}
      <Box w="80%" margin="auto" align="center" >
        <Heading>Powerful time tracking software with hassle-free <br /> integrations</Heading>
        <p style={{ width: "60%", margin: "auto", marginTop: "40px", color: "grey", fontSize: "16px" }}>Accurate time tracker for budgeting, client invoicing and painless payroll.<br />
          Works with the apps your team already use</p>
        <Input type="email" placeholder='Work email... ' w="40%" mt="40px" h="50px" border="1px solid grey" />
        <br />
        <Button bg="#57BB71" w="40%" mt="40px" h="50px" fontWeight="700">Try free</Button>
        <Box w="40%" margin="auto" display={"flex"} justifyContent={"center"} alignItems="center" mt="10px" h="50px" ><Img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRkZDMTA3IiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMS42NDksNC42NTctNi4wOCw4LTExLjMwMyw4Yy02LjYyNywwLTEyLTUuMzczLTEyLTEyYzAtNi42MjcsNS4zNzMtMTIsMTItMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYsNi4wNTMsMjkuMjY4LDQsMjQsNEMxMi45NTUsNCw0LDEyLjk1NSw0LDI0YzAsMTEuMDQ1LDguOTU1LDIwLDIwLDIwYzExLjA0NSwwLDIwLTguOTU1LDIwLTIwQzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkYzRDAwIiBkPSJNNi4zMDYsMTQuNjkxbDYuNTcxLDQuODE5QzE0LjY1NSwxNS4xMDgsMTguOTYxLDEyLDI0LDEyYzMuMDU5LDAsNS44NDIsMS4xNTQsNy45NjEsMy4wMzlsNS42NTctNS42NTdDMzQuMDQ2LDYuMDUzLDI5LjI2OCw0LDI0LDRDMTYuMzE4LDQsOS42NTYsOC4zMzcsNi4zMDYsMTQuNjkxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Q0FGNTAiIGQ9Ik0yNCw0NGM1LjE2NiwwLDkuODYtMS45NzcsMTMuNDA5LTUuMTkybC02LjE5LTUuMjM4QzI5LjIxMSwzNS4wOTEsMjYuNzE1LDM2LDI0LDM2Yy01LjIwMiwwLTkuNjE5LTMuMzE3LTExLjI4My03Ljk0NmwtNi41MjIsNS4wMjVDOS41MDUsMzkuNTU2LDE2LjIyNyw0NCwyNCw0NHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMTk3NkQyIiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMC43OTIsMi4yMzctMi4yMzEsNC4xNjYtNC4wODcsNS41NzFjMC4wMDEtMC4wMDEsMC4wMDItMC4wMDEsMC4wMDMtMC4wMDJsNi4xOSw1LjIzOEMzNi45NzEsMzkuMjA1LDQ0LDM0LDQ0LDI0QzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48L3N2Zz4=" w="30px" />&nbsp;&nbsp;<NavLink to="/signup">Or sign up with Google Account</NavLink></Box>
      </Box>
      {/* Middle Apps Section */}
      <Box mt="100px" h="600px">
        <HomeAppCarousel />

      </Box>
      {/* Slider */}
      <Box w="80%" h="auto" margin="auto" align="center"  mt="40px" >
        <Heading>Track time and watch progress inside <br /> <span style={{ borderBottom: "4px solid #57BB71" }}>two dozen</span> popular apps</Heading>
        {/* Icons */}
        <Box display={"flex"} gap="40px" justifyContent={"center"} mt="40px" >
          <Box display={"flex"} gap="10px"><Img src="https://imgs.search.brave.com/YNSHYq2yXO3H60UhZSLOYTFNqYpEQChvvxBIvLWM6wo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDIvQXNhbmEtU3lt/Ym9sLnBuZw" w="30px" />Asana</Box>
          <Box display={"flex"} gap="10px"><Img src="https://imgs.search.brave.com/Z5GayoTZgMAJ8YLE2wY5B-Z4r693214dEIxNtnBnzRE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/b25saW5lbWFya2V0/aW5ndG9vbHMucHJv/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzExL1RyZWxsby1s/b2dvLnBuZw" w="30px" />Trello</Box>
          <Box display={"flex"} gap="10px"><Img src="https://imgs.search.brave.com/nXUO7WhBzIHapTBfbiNu7OqWP2M7MtMmwHcQhyxgym8/rs:fit:260:260:1/g:ce/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvYmFzZWNh/bXAtbG9nby1jbGlw/YXJ0LTcuanBn" w="30px" />Basecamp</Box>
          <Box display={"flex"} gap="10px"><Img src="https://imgs.search.brave.com/1enasKqjgS1C_-QLjIcE01XoXZ-RmcLWn-4StLeXlNY/rs:fit:860:900:1/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzI3OC0y/Nzg1MTAxX2ppcmEt/bG9nby1wbmctdHJh/bnNwYXJlbnQtcG5n/LnBuZw" w="30px" />Jira</Box>
          <Box display={"flex"} gap="10px"><Img src='https://imgs.search.brave.com/ikcrhKQN5Ni60H22fPzkPeFZsD0oUqDTRZdQputksE8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ2l0aHViL2dp/dGh1Yl9QTkc0MC5w/bmc' w="30px" />GitHub</Box>
          <Box display={"flex"} gap="10px"><Img src="https://imgs.search.brave.com/7Yn732sey8xDvUonu_TsnIi4DYXQBY6MhmRO-cabAIw/rs:fit:810:810:1/g:ce/aHR0cHM6Ly9jbGlj/a3VwLmNvbS9sYW5k/aW5nL2ltYWdlcy9m/b3Itc2UtcGFnZS9j/bGlja3VwLnBuZw" w="30px" />ClickUp</Box>
          <Box display={"flex"} gap="10px"><Img src="https://imgs.search.brave.com/-xXhjCBPuDiEdHn7g8q27wlVGcCXSjP-HE4_RbRz1fQ/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUdGLWw3LTJPOUxG/eGFqV0FwVjZjSHph/ejViWnhNcGFRLU1S/NEYyZWVBPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v" w="30px" />Monday</Box>
          <Box display={"flex"} gap="10px"><Img src="https://imgs.search.brave.com/iBFos4Ve07MYiYnM_UXpaJZxMtJycekg4LO59kvMnus/rs:fit:1120:630:1/g:ce/aHR0cHM6Ly9pLnBj/bWFnLmNvbS9pbWFn/ZXJ5L3Jldmlld3Mv/MDVGQnN0YnFsYTBw/RVdybEZMVHc0TUwt/NS5maXRfbGltLnNp/emVfMTIwMHg2MzAu/dl8xNTY5NDc0MDEy/LmpwZw" w="30px" />Notion</Box>
        </Box>
        {/* Slider */}
        <Box w="90%" margin="auto" mt="50px" height="fit-content" marginBottom="100px">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={true}
            modules={[Pagination, Autoplay]}
            style={{
              height: "100%"
            }}
          >
            {
              sliderData.map((item) => {
                return <SwiperSlide key={item.id}>
                  <Box w="100%" align="center" >
                    <Img src={item.src} w="60%" display={"block"} margin="auto" />
                  </Box>
                </SwiperSlide>
              })
            }
          </Swiper>
        </Box>
      </Box>
      {/* Review */}

      <Box className={style.review} w="80%" h="fit-content" margin="auto" display={"flex"} gap="60px" mt="100px" justifyContent={"center"} padding="30px">
        <Box w="80%" display={"flex"} flexDirection="column">
          <Box textAlign={"left"}>
            <Heading color="#28282B" fontSize="30px">Everhour has helped 240,000+ <br /> people complete over 135 <br /> million tasks in 3 million <br /> projects</Heading>
          </Box>
          <Box display={"flex"} >
            <Box mt="30px">
              <span fontSize="60px" ><Img src="https://cdn-icons-png.flaticon.com/512/4662/4662608.png" color="#57BB71" /></span>
            </Box>
            <Box >
              <Heading w="90%" mt="30px" float="right" color="#28282B" padding="10px" lineHeight={"40px"} fontSize="20px" fontWeight={"400"} textAlign={"left"}>
                Everhour helps us track our engineering hours which is a requirement for several Government grants we have received. Without Everhour, we would be unable to accurately track the hours associated with each individual project we are working on as a company. The reports are easily customizable which allows me to extract the data I need. Everhour is a great tool for our time tracking needs!
                <Text><b>Kelly Bonneau, CPA</b></Text>
                <Text>Accounting Manager at <b>7shifts</b></Text>
              </Heading>
            </Box>

          </Box>
        </Box>
        <Box w="50%" h="100%">
          <Img src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-kelly@2x.webp" h="100%" />
        </Box>
      </Box>
      {/* Bottom Signup */}
      <SimpleGrid columns={[1,1,1,2]} w="70%" h="auto" margin="auto" mt="100px">
        <Box w="100%" textAlign="left" pl="30px" pt="30px" >
          <Heading>Take control of your time with Everhour</Heading>
          <Text color="grey" mt="10px" fontSize={"20px"}>Beautiful integrations. Intuitive interface. No unexpected fees</Text>
          <Box display={"flex"} gap="10px">
            <Input type="email" placeholder='Work email... ' w="100%" mt="40px" h="50px" border="1px solid grey" />

            <Button bg="#57BB71" w="100%" mt="40px" h="50px" fontWeight="700">Try free</Button>
          </Box>
          <Box w="100%" display="flex" alignItems="center" mt="10px" h="50px" ><Img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRkZDMTA3IiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMS42NDksNC42NTctNi4wOCw4LTExLjMwMyw4Yy02LjYyNywwLTEyLTUuMzczLTEyLTEyYzAtNi42MjcsNS4zNzMtMTIsMTItMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYsNi4wNTMsMjkuMjY4LDQsMjQsNEMxMi45NTUsNCw0LDEyLjk1NSw0LDI0YzAsMTEuMDQ1LDguOTU1LDIwLDIwLDIwYzExLjA0NSwwLDIwLTguOTU1LDIwLTIwQzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkYzRDAwIiBkPSJNNi4zMDYsMTQuNjkxbDYuNTcxLDQuODE5QzE0LjY1NSwxNS4xMDgsMTguOTYxLDEyLDI0LDEyYzMuMDU5LDAsNS44NDIsMS4xNTQsNy45NjEsMy4wMzlsNS42NTctNS42NTdDMzQuMDQ2LDYuMDUzLDI5LjI2OCw0LDI0LDRDMTYuMzE4LDQsOS42NTYsOC4zMzcsNi4zMDYsMTQuNjkxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Q0FGNTAiIGQ9Ik0yNCw0NGM1LjE2NiwwLDkuODYtMS45NzcsMTMuNDA5LTUuMTkybC02LjE5LTUuMjM4QzI5LjIxMSwzNS4wOTEsMjYuNzE1LDM2LDI0LDM2Yy01LjIwMiwwLTkuNjE5LTMuMzE3LTExLjI4My03Ljk0NmwtNi41MjIsNS4wMjVDOS41MDUsMzkuNTU2LDE2LjIyNyw0NCwyNCw0NHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMTk3NkQyIiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMC43OTIsMi4yMzctMi4yMzEsNC4xNjYtNC4wODcsNS41NzFjMC4wMDEtMC4wMDEsMC4wMDItMC4wMDEsMC4wMDMtMC4wMDJsNi4xOSw1LjIzOEMzNi45NzEsMzkuMjA1LDQ0LDM0LDQ0LDI0QzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48L3N2Zz4=" w="30px" />&nbsp;&nbsp;<NavLink to="/signup">Or sign up with Google Account</NavLink></Box>
        </Box>
        <Box w="80%" textAlign={"left"}
          pt="30px" lineHeight="40px" display={"flex"} flexDirection="column" >

          <ul>🟢 Track time from the apps you already use</ul>
          <ul>🟢 Know where your team’s time is going</ul>
          <ul>🟢 Keep projects on budget</ul>
          <ul>🟢 Increase transparency</ul>
          <ul>🟢 Make your workflow more efficient</ul>
          <ul>🟢 Spot burnout before it happens</ul>

        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Homepage