import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Heading, Img, Input, SimpleGrid, Stack, Switch, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Styles/price.module.css'
const Pricing = () => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  return (
    <Box h="auto" mt="140px" mb="60px">
      {/* Upper section */}
      <Box h="auto" w="80%" m="auto">
        <Text fontSize="40px">Simple pricing</Text>
        <Text fontSize="20px" color={"#7c7c7c"} fontWeight="300" mt="10px">Start with no commitment. Try everything. Subscribe when you love it.</Text>
        <Stack direction='row' justifyContent="center" mt="20px">
          {!toggle ? <Text color="#57BB71">Monthly</Text> : <Text>Monthly</Text>} <Switch colorScheme='teal' size='lg' onChange={() => setToggle(!toggle)} /> {toggle ? <Text color="#57BB71" >Yearly</Text> : <Text >Yearly</Text>}
        </Stack>
      </Box>
      <SimpleGrid className={styles.price_cards} h="auto" columns={[1, 1, 1, 3]} w="70%" m="auto" mt="20px">
        {/* -------------------------------------------------------- */}
        {/* Free */}
        <Box h="900px" p="30px" textAlign={"left"}>
          <Heading fontWeight="400">Free</Heading>
          <Text color="#7c7c7c" mt="10px" fontWeight={"400"}>Simple time tracking and reporting for<br /> freelancers and small teams.</Text>
          <Box className={styles.priceTag}>
            <Text color="#57BB71" w="40%" h="50px" fontSize="40px" textAlign="center" fontWeight="500">$</Text>
            <Text color="#57BB71" fontSize="80px" w="60%" ml="35px" mt='-30px' h="70px">0</Text>
          </Box>
          <Text color="#7c7c7c" mt="40px" fontWeight={"400"}>Free for up to 5 users</Text>
          <Button w="70%" bg="#57BB71" color="white" mt="20px"><NavLink to="/signup">Get started</NavLink></Button>
          <Box mt="20px">
            <ul type="none" style={{ lineHeight: "30px" }}>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Unlimited time tracking</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Unlimited projects</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Website integrations</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Unlimited reports</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Add time for others</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Export reports</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Web, iOS app, browser extension</li>
            </ul>
          </Box>
        </Box>
        {/* ------------------------------------------------------------------- */}
        {/* Lite */}
        <Box h="900px" p="30px" textAlign={"left"}>
          <Heading fontWeight="400">Lite</Heading>
          <Text color="#7c7c7c" mt="10px" fontWeight={"400"}>More control, more features yet at a very<br /> affordable price.</Text>
          <Box className={styles.priceTag}>
            <Text color="#57BB71" w="40%" h="50px" fontSize="40px" textAlign="center" fontWeight="500">$</Text>
            <Text color="#57BB71" fontSize="80px" w="60%" ml="35px" mt='-30px' h="70px">{toggle ? 5 : 6}</Text>
          </Box>
          <Text color="#7c7c7c" mt="40px" fontWeight={"400"}>/ user / month, starting at 2 users</Text>
          <Button w="70%" bg="#57BB71" color="white" mt="20px"><NavLink to="/signup">Get started</NavLink></Button>
          <Box mt="20px">
            <ul type="none" style={{ lineHeight: "30px" }}>      Everything in Free plan +
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Up to 10 users</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Clients</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Billable rates, costs, profit</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Budgets</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Invoicing</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Lock time entries at certain rules</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Reminders</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Schedule reports via email</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Fast and responsive support</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />API</li>
            </ul>
          </Box>
        </Box>
        {/* -------------------------------------------------------------- */}
        {/* Team */}
        <Box h="900px" p="30px" textAlign={"left"}>
          <Heading fontWeight="400">Team</Heading>
          <Text color="#7c7c7c" mt="10px" fontWeight={"400"}>For teams and companies that need all <br />features, plus best-in-class integrations.</Text>
          <Box className={styles.priceTag}>
            <Text color="#57BB71" w="40%" h="50px" fontSize="40px" textAlign="center" fontWeight="500">$</Text>
            <Text color="#57BB71" fontSize="80px" w="fit-content" ml="35px" mt='-30px' h="70px">{toggle ? 8 : 10}</Text>
          </Box>
          <Text color="#7c7c7c" mt="40px" fontWeight={"400"}>/ user / month, starting at 5 users</Text>
          <Button w="70%" bg="#57BB71" color="white" mt="20px"><NavLink to="/signup">Get started</NavLink></Button>
          <Box mt="20px">
            <ul type="none" style={{ lineHeight: "30px" }}>      Everything in Lite plan +
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Unlimited users</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Native integrations with sync</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Time approval</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Time tracking audits</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Time cards</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Time off</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Expenses</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Scheduling</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Optional screenshots</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Single sign-on (SSO)</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Retainers </li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Folders in reports </li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />Priority support</li>
              <li><img src="https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/icon-check.svg" />API</li>
            </ul>
          </Box>
        </Box>

      </SimpleGrid>
      {/* -------------------------------------------------------- */}
      {/* Bottom Section */}
      <Box className={styles.query}>
        <Box className={styles.query_item} h="600px" w="100%">
          <Heading fontWeight={"600"}>Your questions. Answered!</Heading>
          <Text color="#7c7c7c" mt="20px" fontSize="20px" fontWeight={"400"}>Here is a list of the most frequently asked questions. Got others or some ideas? — Contact us!</Text>
          <Img src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/faq.webp" />
        </Box>
        {/* Accordion */}
        <Box className={styles.query_item} h="600px" w="100%">
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' pb={"6"}>
                    What's the trial period purpose?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel fontWeight={"400"} pb={4}>
                When you sign up, you get a fully-functional account for 2 weeks, which gives you access to everything Everhour has to offer. After 14 days, you will need to pick a plan and enter your credit card details. We’ll email you a couple of days before your trial expires to remind you. Read more →
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' pb={"6"}>
                    What means 'Starting at x users'?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel fontWeight={"400"} pb={4}>
                This is kind of a basic usage fee. You can subscribe even if you have fewer users, however, in this case, the minimum usage fee will apply. Lite plan starts at $10 and includes 2 users. Team plan starts at $42.5 and includes 5 users.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' pb={"6"}>
                    Can I change my plan later?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel fontWeight={"400"} pb={4}>
                Yes, you can upgrade your plan at any time. You will be credited for the remainder of your current plan and charged for your new plan when you upgrade. Read more →
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' pb={"6"}>
                    Can I add or remove members at any time?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel fontWeight={"400"} pb={4}>
                Absolutely! Everhour is pay-as-you-go, and you can easily add or remove members from your account with a couple of clicks. Read more →
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' pb={"6"}>
                    What if I want to cancel my service?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel fontWeight={"400"} pb={4}>
                No problem. If you decide Everhour isn’t for you (or you just need to pause), simply cancel before your next billing period. This date is listed on your billing page. Unfortunately, we can’t refund you for partial use or the amount of time left in your subscription. Also, after cancelling, you can no longer subscribe to the legacy plans, only plans currently listed on our Pricing page. Read more →
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' pb={"6"}>
                    What kind of payment methods do you accept?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel fontWeight={"400"} pb={4}>
                We currently accept any credit or debit card with a MasterCard, Visa, Discover Network, American Express, Diners Club International or JCB logo.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' pb={"6"}>
                    Which currency will I be charged in?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel fontWeight={"400"} pb={4}>
                We charge you in US dollars. However, the debit currency depends on your card and your bank.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
      {/* Bottom Signup */}
      <Box className={styles.bottomSignup} >
        <Box w="100%" textAlign="left" pl="30px" pt="30px" >
          <Heading>Take control of your time with Everhour</Heading>
          <Text color="grey" mt="10px" fontSize={"20px"}>Beautiful integrations. Intuitive interface. No unexpected fees</Text>
          <Box display={"flex"} gap="10px">
            <Input type="email" placeholder='Work email... ' w="60%" mt="40px" h="50px" border="1px solid grey" />

            <Button bg="#57BB71" w="20%" mt="40px" h="50px" fontWeight="700">Try free</Button>
          </Box>
          <Box w="50%" display="flex" alignItems="center" mt="10px" h="50px" ><Img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRkZDMTA3IiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMS42NDksNC42NTctNi4wOCw4LTExLjMwMyw4Yy02LjYyNywwLTEyLTUuMzczLTEyLTEyYzAtNi42MjcsNS4zNzMtMTIsMTItMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYsNi4wNTMsMjkuMjY4LDQsMjQsNEMxMi45NTUsNCw0LDEyLjk1NSw0LDI0YzAsMTEuMDQ1LDguOTU1LDIwLDIwLDIwYzExLjA0NSwwLDIwLTguOTU1LDIwLTIwQzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkYzRDAwIiBkPSJNNi4zMDYsMTQuNjkxbDYuNTcxLDQuODE5QzE0LjY1NSwxNS4xMDgsMTguOTYxLDEyLDI0LDEyYzMuMDU5LDAsNS44NDIsMS4xNTQsNy45NjEsMy4wMzlsNS42NTctNS42NTdDMzQuMDQ2LDYuMDUzLDI5LjI2OCw0LDI0LDRDMTYuMzE4LDQsOS42NTYsOC4zMzcsNi4zMDYsMTQuNjkxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Q0FGNTAiIGQ9Ik0yNCw0NGM1LjE2NiwwLDkuODYtMS45NzcsMTMuNDA5LTUuMTkybC02LjE5LTUuMjM4QzI5LjIxMSwzNS4wOTEsMjYuNzE1LDM2LDI0LDM2Yy01LjIwMiwwLTkuNjE5LTMuMzE3LTExLjI4My03Ljk0NmwtNi41MjIsNS4wMjVDOS41MDUsMzkuNTU2LDE2LjIyNyw0NCwyNCw0NHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMTk3NkQyIiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMC43OTIsMi4yMzctMi4yMzEsNC4xNjYtNC4wODcsNS41NzFjMC4wMDEtMC4wMDEsMC4wMDItMC4wMDEsMC4wMDMtMC4wMDJsNi4xOSw1LjIzOEMzNi45NzEsMzkuMjA1LDQ0LDM0LDQ0LDI0QzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48L3N2Zz4=" w="30px" />&nbsp;&nbsp;<NavLink to="/signup">Or sign up with Google Account</NavLink></Box>
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
      </Box>
    </Box>
  )
}

export default Pricing