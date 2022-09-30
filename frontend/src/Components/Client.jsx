import { Box } from '@chakra-ui/react'
import React from 'react'
import axios from 'axios'
import Modal from "react-modal"
import { useEffect } from 'react'
import {FiSearch} from "react-icons/fi"
import {BsThreeDotsVertical, BsStar} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { AddDataFailure, AddDataRequest, AddDataSuccess, getData } from '../Redux/action.type'
import styles from "./Client.module.css"
import { useState } from 'react'
import { useParams } from 'react-router-dom'

// const updateProject = {
//     projectdata: ""
   
//   };
const Client = () => {
    const {id}=useParams()
    const [createProject, setCreateProject] = useState(false)
    const [query, setquery] =useState({ "name": "",
    "client": "Anurag",
    "tracked": "0.00h",
    "amount": "0.00USD",
    "progress": "---",
    "access": "Public"} );
    const dispatch=useDispatch()
    const projects=useSelector((store)=>store.projects)
    const handlechangedetail = (e) => {
        const { name, value, type, checked } = e.target;
        let val = type === "checkbox" ? checked : value;
        setquery({
            ...query,
            [name]: val
        });
        console.log(query)
        };
      
        const split = (value) => {
            var str = "";
            for (var i = 0; i < value.length; i++) {
            if (value[i] !== " ") {
                str += value[i];
            }
            }
            return str;
        };

        const handleproject = () => {
           
            let payload = query
            dispatch(AddDataRequest());
            axios.post("http://localhost:8080/project",payload)
            .then((r)=>dispatch(AddDataSuccess()))
             .then(()=>dispatch(getData()))
            .catch((e)=>dispatch(AddDataFailure(e)))
            
            dispatch(getData(payload));
          
            };


    useEffect(()=>{
    dispatch(getData())
    },[])

  return (
    <Box className={styles.container}>
        <Box className={styles.mainbox}> 
        <Box className={styles.create}>
        <h2>Clients</h2>
        <button className={styles.button}onClick = {() => setCreateProject(true)}>Create Client</button>
        <Modal isOpen = {createProject} onRequestClose = {() => setCreateProject(false)} className = {styles.projectModal} >
                                <h1 className = {styles.modalHeading}>Create clients</h1>
                                <hr/>
                                <Box className = {styles.inputBox}>
                                    <label className={styles.inputLabel}>Client Name</label>
                                    <input type="text" placeholder = "Enter Project Name" name="name" value={query.name} onChange={handlechangedetail}/> 
                                    <label className={styles.inputLabel}>Projects</label>
                                    <input type="text" placeholder = "" />
                                    <label className={styles.inputLabel}>Email</label>
                                    <input type="text" placeholder = ""  />
                                  

                                    
                                </Box>
                                <hr/>
                                {/* <Box className = {styles.selectBox}>
                                    <select name="clientsoption" value={query.clientsoption} onChange={handlechangedetail}>
                                    <option value="">No template</option>
                                   
                                    </select>
                                </Box> */}
                                <hr/>
                                <Box className = {styles.projectModalButtons} >
                                    <button  onClick = {() => setCreateProject(false)} >Cancel</button>
                                    <button onClick={handleproject} >CREATE</button>
                                </Box>
                    </Modal>
        </Box>
        <hr/>
        
        <Box className={styles.filterbox}>

                <h4>FILTER</h4>
            
                <select >
                    <option value="clients">Budget...</option>
                    <option value="all">All</option>
                    <option value="pushkar">Pushkar</option>
                </select>
                <select>
                    <option value="">Archieve</option>
                    <option value="">archieve</option>
                    <option value="">save</option>
                </select>
                
                <h1><FiSearch/></h1>
                <form action="" className='searchform'>
                {/* <input type="text" placeholder = "Project name"name="projecttitle" value={query.projecttitle} onChange={handlechangedetail} /> */}
                <input  className = {styles.search}type="search" placeholder='search client...'/>
                </form>
            </Box>
            <Box  className = {styles.heading}>
                
                <h5>Clients</h5>
            </Box>
            <table className = {styles.projectDetails}>
                <input className={styles.checkbox} type="checkbox"/>
                <label className={styles.name} >NAME</label>
                <label className = {styles.clientsLabel}>CLIENT</label>
                <label className = {styles.trackedLabel}>Member</label>
                <label className = {styles.amountLabel}>Budget</label>
                <label className = {styles.progressLabel}>Billing</label>
                {/* <label className = {styles.accessLabel}>ACCESS</label> */}
            </table>                                         
            {projects.map((item) => {
                return <Box className = {styles.projectDataDetails} key = {item.id}>
                            <h4  className = {styles. namesData}>{item.name}</h4>
                            <h4  className = {styles. clientsData}>{item.client}</h4>
                            <h4  className = {styles.projectstracked }> {item.member} </h4>
                            <h4  className = {styles.projectamountLabel}> {item.amount} </h4>
                            <h4  className = {styles.projectprogressLabel}> {item.budget} </h4>
                            {/* <h4  className = {styles.projectaccessLabel}> {item.access} </h4> */}
                            {/* <h4 >0.00 USD</h4>
                            <h4 >-</h4>
                            <h4 >Public</h4> */}
                        <button  className = {styles.favouriteButton} ><BsStar size = "20px"/></button>
                        <button><BsThreeDotsVertical size = "25px"/></button>
                    </Box>
                })}
            
            </Box>
        
    </Box>
  )
}

export default Client