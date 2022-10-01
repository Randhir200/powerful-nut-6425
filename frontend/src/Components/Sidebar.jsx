import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

import { FaBars } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { TbCalendarTime } from "react-icons/tb";
import { BsTag } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { IoIosContact } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineClockCircle, AiOutlineSetting } from "react-icons/ai";

import "./slidebar.css";
// import { Navbar } from "../navbar/Navbar";
// import clockify_logo from "../../assets/clockify-logo.svg";

const routes = [
  {
    path: "/dashboard",
    name: "HOME",
    icon: <MdOutlineDashboardCustomize />,
  },


  {
    path: "/tracker",
    name: "TIME",
    icon: <AiOutlineClockCircle />,
  },
  {
    path: "/projects",
    name: "PROJECTS",
    icon: <CgNotes />,
  },
  {
    path: "/clients",
    name: "CLIENTS",
    icon: <IoIosContact />,
  },
  {
    path: "/team",
    name: "TEAM",
    icon: <RiTeamLine />,
  },





  {
    path: "/reports",
    name: "REPORTS",
    icon: <GoGraph />,
  
  },
 
 


  {
    path: "/settings",
    name: "SETTINGS",
    icon: <AiOutlineSetting />,
  },
 
];

 export const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <>
      <div className="top_section">
        <div className="bars">
          <FaBars onClick={toggle} />
          {/* <img src={clockify_logo} alt="clockify_logo" /> */}
        </div>

        <div>
          {/* <Navbar /> */}
        </div>
      </div>

      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "210px" : "65px",
            transition: {
              duration: 0.05,
              type: "spring",
              damping: 20,
            },
          }}
          className="sidebar"
        >
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    key={index}
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeclassname="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};