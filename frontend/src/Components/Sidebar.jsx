import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,

  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
// import { FaList, FaRegHeart } from "react-icons/fa";
import {   FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
// import { RiPencilLine } from "react-icons/ri";
// import { BiCog } from "react-icons/bi";
import {RiHome2Line } from "react-icons/ri";
import {BsFillBriefcaseFill} from "react-icons/bs"
import { BsPieChart } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import {IoWalletOutline} from "react-icons/io5"

import { GoDashboard } from "react-icons/go";
// import { MdReport } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
// import {IoIosPeople } from "react-icons/io";
import {ImProfile} from "react-icons/im"
import {IoIosPeople} from "react-icons/io"
import {TbFileInvoice} from "react-icons/tb"



import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";
import { Link } from "react-router-dom";


const Sidebar = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          {/* <div className="logotext">
             
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div> */}
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<RiHome2Line />}><Link to="/"><p style={{color:"black"}}>Home</p></Link></MenuItem>
              <MenuItem active={true} icon={<BiTime />}> <Link to="/calender">Time </Link></MenuItem>
              <MenuItem icon={<GoDashboard />}> <Link to="/dashboard">TimeLine</Link></MenuItem>                      
              <MenuItem icon={<BsFillBriefcaseFill/>}><Link to="/project">Project</Link></MenuItem>              
              <MenuItem icon={< ImProfile/>}>  <Link to="/client">Client</Link></MenuItem>
              <MenuItem icon={<IoIosPeople/>}>  <Link to="/team">TEAM</Link></MenuItem>
              <MenuItem icon={<BsPieChart />}>  <Link to="/client">Reports</Link></MenuItem>
              <MenuItem icon={<TbFileInvoice />}>  <Link to="/tags">Invoices</Link></MenuItem>
              <MenuItem icon={<IoWalletOutline/>}>  <Link to="/setting">Expenses</Link></MenuItem>
              <MenuItem icon={<AiOutlineSetting />}>  <Link to="/setting">Setting</Link></MenuItem>
              
            </Menu>
          </SidebarContent>
         
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;