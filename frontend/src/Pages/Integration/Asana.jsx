import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Input } from '@chakra-ui/react';
import { StarIcon } from "@chakra-ui/icons";

import google from './assets/google-svgrepo-com.svg'
import React from 'react'
import style from './asana.module.css'
const Asana = () => {
  return (
    <>
      <div className={style.mainHeadDiv}>
        <div className={style.HeadDiv}>
          <h1>Asana time tracking integration</h1>
          <p>
            Time tracking in Asana with timesheets, budgeting, client reporting,
            and payroll. Works inside Asana. No more tab switching!
          </p>
        </div>
        <div className={style.tryBtn}>
          <p>Try with my Asana</p>
        </div>
        <div className={style.listParaDiv}>
          <p>Free to try</p>
          <p className={style.dot}>.</p>
          <p>No credit card requiured</p>
          <p className={style.dot}>.</p>
          <p>1-minute signup</p>
        </div>
      </div>
      <div className={style.imgDiv}>
        {/* <img src='https://blog-cdn.everhour.com/assets/images/new-design/background-elements/dotted/dimond-dotted-orange.png' alt='orangedotimg'/> */}
        <img
          src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp"
          alt="img"
        />
        {/* <img src='https://blog-cdn.everhour.com/assets/images/new-design/background-elements/dotted/oval-dotted-green.png' alt='green dotes img'/> */}
      </div>
      <div className={style.whyAsana}>
        <div className={style.leftWhyAsana}>
          <h1>
            Here is why Asana + Everhour is the best time tracking integration
            on the market
          </h1>
          <img
            src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/asana-vs-everhour-with-bag.webp"
            alt="meet img"
          />
        </div>
        <div className={style.rightWhyAsana}>
          <div>
            <h1>1. Quick Setup</h1>
            <p>
              When you connect Asana with Everhour <u>timesheet app</u>, we
              automatically sync your projects so that your team can start
              tracking time right away.
              <mark>No manual project setup required.</mark>
            </p>
          </div>
          <div>
            <h1>2. Less employee teaching</h1>
            <p>
              You don’t need to explain to your staff how to use additional
              <u>employee time tracking software.</u> Time tracking controls
              will <mark>appear right inside the Asana interface,</mark> making
              it easy for them to track time.
            </p>
          </div>
          <div>
            <h1>3. Accuracy</h1>
            <p>
              Employees often forget to track time as it's not convenient for
              them to switch between <u>time clock app</u> and project
              management app. Everhour eliminates these steps and{" "}
              <mark>improves time tracking accuracy.</mark>
            </p>
          </div>
          <div>
            <h1>4. Estimates are always in front of you</h1>
            <p>
              Everhour shows time vs. estimate beside task and subtask titles.
              When the entire team sees progress, they will{" "}
              <mark>urge you to ensure the work is done.</mark>
            </p>
          </div>
          <div>
            <h1>5. Automatic updates</h1>
            <p>
              When you add a new project or change the name of the existing task
              in Asana, Everhour will sync this change automatically. That means
              your <mark>reports will always show the freshest data.</mark>
            </p>
          </div>
          <div>
            <h1>6. Detailed reports</h1>
            <p>
              Asana time tracking reports let you organize reported time using
              <mark>various information from your Asana tasks</mark> such as
              tags, sections, or custom fields. So you can dive deeper into{" "}
              <u>tracked work hours</u> analysis to get more accurate results.
            </p>
          </div>
        </div>
      </div>
      <div className={style.howDiv}>
        <div className={style.howDivDetail}>
          <h1>How does Everhour integrate with Asana?</h1>
          <p>
            After you successfully connected Everhour and Asana, there are
            multiple <br></br> useful features you can start using directly in
            your Asana interface
          </p>
        </div>
        <div className={style.howIntDiv}>
          <div className={style.intCard}>
            <div className={style.cardDetail}>
              <h1>Time next to your tasks</h1>
              <p>
                You'll see a timer, estimate, and reported time next to the task
                title, as well as total time, displayed by section, custom
                field, or for the entire project.
              </p>
            </div>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-timer-on-project-board.webp"
                alt="timer"
              />
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-task-details-with-time.webp"
                alt="timer"
              />
            </div>
            <div className={style.cardDetail}>
              <h1>Time in task details</h1>
              <p>
                In the task details, you’ll see the time reported by each
                employee and its progress, plus time on parent and subtasks. You
                can track time using the timer or log time manually.
              </p>
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardDetail}>
              <h1>Manual time entries</h1>
              <p>
                If you forgot to start the timer, or you prefer to fill in all
                your work hours in one go, use manual mode.
              </p>
            </div>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-add-time.webp"
                alt="timer"
              />
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-project-budgeting.webp"
                alt="timer"
              />
            </div>
            <div className={style.cardDetail}>
              <h1>Project budget</h1>
              <p>
                Choose a billing method for your project: hourly, fixed fee, or
                non-billable. Set up the budget and the limits. Receive an email
                alert when you reach a certain threshold.
              </p>
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardDetail}>
              <h1>My Timesheet button</h1>
              <p>
                Quickly look at all your timekeeping for a Day or Week as well
                as start the timer or add time and comments for the tasks you
                have been working on.
              </p>
            </div>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-timesheet-modal.webp"
                alt="timer"
              />
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-time-in-portfolio.webp"
                alt="timer"
              />
            </div>
            <div className={style.cardDetail}>
              <h1>Time on Portfolios</h1>
              <p>
                Estimate and reported time will be displayed on Asana's
                Portfolio page.
              </p>
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardDetail}>
              <h1>Time on Homepage</h1>
              <p>
                Don’t waste time searching for progress updates on your most
                important projects. Everhour shows estimate and reported time
                right on the Home page.
              </p>
            </div>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-time-on-home-page.webp"
                alt="timer"
              />
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-timeline.webp"
                alt="timer"
              />
            </div>
            <div className={style.cardDetail}>
              <h1>Time on Timeline</h1>
              <p>
                Use Timeline to create project plans that help you stay on
                schedule—so you hit your deadlines. Everhour helps you by
                showing estimates and reported time right there.
              </p>
            </div>
          </div>
          <div className={style.intCard}>
            <div className={style.cardDetail}>
              <h1>Project summary</h1>
              <p>
                Everhour adds the Project Summary page right into Asana's
                interface. So the information about time spent on the project,
                budget usage, billable vs non-billable hours, etc. - everything
                is just one click away.
              </p>
            </div>
            <div className={style.cardImgDiv}>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-everhour-tab.webp"
                alt="timer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.starDiv}>
        <div>
          <HStack>
            <StarIcon boxSize={6} color="gold" />
            <StarIcon boxSize={6} color="gold" />
            <StarIcon boxSize={6} color="gold" />
            <StarIcon boxSize={6} color="gold" />
            <StarIcon boxSize={6} color="gold" />
          </HStack>
        </div>
        <div>
          <p>
            4.5 / 5 that's how people rate Everhour. See what 500+ reviewers are
            saying about<br></br> us on popular platforms, such as Capterra,
            G1Crowd, or TrustRadius
          </p>
        </div>
      </div>
      <div className={style.faqDiv}>
        <div className={style.leftFaqDiv}>
          <h1>Your questions. Answered!</h1>
          <p>
            Here is a list of the most frequently asked questions. Got others or
            some ideas? — Contact us!
          </p>
          <img
            src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/faq.webp"
            alt="img"
          />
        </div>
        <div className={style.rightFaqDiv}>
          <Accordion allowToggle>
            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    Is Everhour easy to connect with Asana?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
                Yes. Just click Try with my Asana and connect it with Everhour.
                The next step would be to install our browser extension. And
                that's it! Open your Asana and start tracking time.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    How does Everhour for Asana work?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
                After integration, Everhour embeds controls into the Asana
                interface and thus extends it with many useful features. You can
                keep tracking time from Asana, through the Everhour website or
                browser extension.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    What if not all my Asana users need time tracking?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
                No problem. You can invite and pay only for those Asana users
                who are going to track time and use other Everhour features.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    Will someone else (like my clients) see my time?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
                Only those people who are a part of your Everhour team and
                installed our browser extension can see time-related data in
                Asana.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    How to invite other team members?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
                After you register your Everhour account and connect it with
                Asana, you can track time only for yourself. To invite
                teammates, you should go to the Everhour team page and manually
                invite your team by entering their emails. Each employee should
                finish the signup flow and connect their Asana account.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    Does Everhour work on Asana's native apps?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
                Unfortunately, due to technical reasons, this is not possible.
                Only folks at Asana can decide to integrate with Everhour. No
                other time tracker can do this.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className={style.partnerDiv}>
        <img src="https://i.postimg.cc/Xq8gxpc1/partner.png" alt="partner" />
      </div>

      <div className={style.reviewDiv}>
        <div>
          <p>
            <mark>
              “Everhour has the best integration with Asana compared to other
              time tracking tools
            </mark>{" "}
            — including Asana’s preferred integration (Harvest). And it’s not
            just because it’s more affordable than Harvest. With Harvest you
            have to click the icon in the task to start the time, then you have
            to set the project and task you want to track time for. That’s 3
            additional clicks every time you want to track your time. With
            Everhour you just click your button to start your time. The product
            team at Everhour really gets UX here — their integration
            automatically pulls in all relevant data to your task including task
            name, section level, project, team, tags, literally everything
            available via the API! Imagine how useful having all that rich data
            can be if you want to report on things! No more settling for Asana’s
            weak and fluffy dashboard reports. With Everhour’s rich data you can
            export it into a data source to analyze or visualize in BI tools
            like DataStudio or Tableau.” <br />
            <br /> — Skyler R. (Source: G2.com)
          </p>
        </div>
        <div>
          <p>
            "Everhour is helping us figure out how much time we need to deliver
            our various services. This, in turn, helps us make better decisions
            and run our business better.<mark>The Asana integration is very useful and usable. It's terrific,
              for example, that timing on sub-tasks is summed up in the main
              task
            </mark>
            . Tracking time estimates against actual time worked is helping us
            figure out our capacity planning. The interface and tools are
            well-designed and generally easy to use. Everhour's value-for-money
            for features offered convinced us to make the move. It seemed to fit
            our needs better than Toggl."
            <br />
            <br /> — Jeffrey M. (Source: Capterra)
          </p>
        </div>
        <div>
          <p>
            "Best time tracking software ever!{" "}
            <mark>
              {" "}
              Everhour's integration with Asana is seamless. More than that the
              reporting that you can do with it is insane
            </mark>
            . I now have accurate historical data on all my previous jobs to
            help me estimate future jobs more accurately. I love how staff
            billable hours are automatically pulled through to reports. Everhour
            helps keep track of my staff and how their time is allocated on
            projects. Since the time we spend on projects is essential for
            accurate quoting the time Everhour tracks is vital in keeping my
            business profitable."
            <br />
            <br /> — Shaun D. (Source: G2.com)
          </p>
        </div>
        <div>
          <p>
            <mark>
              "I recently discovered that I can connect my Everhour with each of
              my client's Asana accounts and it has changed the game for my time
              tracking organization.
            </mark>{" "}
            I don't have to spend time creating tasks anymore because they are
            already created by the client in Asana! A project manager's dream."
            <br />
            <br /> — Elizabeth V. (Source: G2.com)
          </p>
        </div>
        <div>
          <p>
            "I've been using Everhour for over a year and things have been
            great. I've used the major alternatives and Everhour is the most
            seamless to use with the most features.
            <mark>
              {" "}
              The ability to capture data directly from Asana and track time
              without having to define a project every time you need to do so is
              a huge time saver.
            </mark>{" "}
            The ability to also track budget based on whatever ways work best
            for your business model is fantastic as well (e.g. by cost, hours,
            billing, etc.). Everhour had a more seamless integration with
            Asana-even better than Asana's own native integration with Harvest.
            Everhour just works better and takes less effort/time." <br />
            <br />— Skyler R. (Source: Capterra)
          </p>
        </div>
        <div>
          <p>
            “As a remote-based company, we highly rely on task management tools
            such as Jira and Asana, and it's critical to control and gain
            knowledge on how we spend our time, and that's what is Everhour used
            for. Since we use two different tools, Jira for the tech team and
            Asana for the management team,
            <mark>
              {" "}
              we found in Everhour a very practical way to concentrate reporting
              regardless of the task management tools every member of the team
              uses."
            </mark>{" "}
            <br />
            <br /> -Eduardo W. (Source: TrustRadius)
          </p>
        </div>
      </div>
      <div className={style.readMoreButton}>
        <div>
          <p>Read More</p>
        </div>
      </div>
      <div className={style.signupDiv}>
        <div className={style.leftSignupDiv}>
          <h1>Asana time tracking made smart</h1>
          <p>Try today for free to see how Everhour works for your business</p>
          <div className={style.signupInputDiv}>
            <Input type="text" placeholder="Work email..." />
            <div>
              <p>Try it free</p>
            </div>
          </div>
          <div>
            <img src={google} alt="google.svg" />
            <p>Or sign up with Google Account</p>
          </div>
        </div>
        <div className={style.rightSignupDiv}>
          <ul>
            <li>Works natively with Asana</li>
            <li>Syncs automatically</li>
            <li>No long learning process</li>
            <li>Quick and easy to start</li>
            <li>3,500+ happy customers</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Asana