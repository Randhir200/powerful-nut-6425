import React from 'react'
import { Box, Heading, Img, Text } from '@chakra-ui/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const data = [
  {
    "id": 1,
    "title": "Time tracking",
    "desc": "Easy-to-use time tracker. Know the time spent on tasks, hours of work, and breaks for each employee",
    "img": "https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3@2x.webp"
  },
  {
    "id": 2,
    "title": "Billing and budgeting",
    "desc": "Simple and flexible projects billing. Set budgets to track progress in real time. Receive timely notifications",
    "img": "https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-dashboard-v2.webp"
  },
  {
    "id": 3,
    "title": "Task management",
    "desc": "Create tasks, organize them in sections, add time estimates to keep everyone in the loop and on track",
    "img": "https://blog-cdn.everhour.com/assets/images/new-design/screens/team-timesheet-v2.webp"
  },
  {
    "id": 4,
    "title": "Visual planning",
    "desc": "View your team’s schedule, know how busy or available someone is, compare plan to the actual time spent",
    "img": "https://blog-cdn.everhour.com/assets/images/new-design/screens/resource-planning-members-new-v2.webp"
  },
  {
    "id": 5,
    "title": "Expenses",
    "desc": "Track work-related expenses. Reimburse employees, use costs in project budgets, add to client invoices",
    "img": "https://blog-cdn.everhour.com/assets/images/new-design/screens/expenses@2x.webp"
  },
  {
    "id": 6,
    "title": "Invoicing",
    "desc": "Easily create an invoice based on tracked time and expenses. Connect with QuickBooks, Xero or FreshBooks",
    "img": "https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3@2x.webp"
  },
]


const HomeAppCarousel = () => {
  return (
    <Box h="800px" w="60%" margin="auto" >
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        // navigation={true}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        style={{
          height: "100%"
        }}
      >
        {
          data.map((item) => {
            return <SwiperSlide key={item.id}>
              <Text fontSize="30px">{item.title}</Text>
              <Text fontWeight="light">{item.desc}</Text>
              <Box w="100%" justifyContent={"center"} mt="100px">
                <Img src={item.img} w="50%" h="50%" display={"block"} margin="auto" />
              </Box>
            </SwiperSlide>
          })
        }
      </Swiper>

    </Box>
  )
}

export default HomeAppCarousel