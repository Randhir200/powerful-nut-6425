import React, { useRef } from "react";
import Box from "./Box";
import Nav from "./Navbar";
import "../Styles/Homepage.css";
import { ArrowRightIcon } from "@chakra-ui/icons";
import {useSearchParams} from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { GetApi, GetAPiRequest } from "../Redux/action";
import { useThrottle } from "use-throttle";


function Homepage() {
  const dispatch=useDispatch()
  const [Params,SetParams]=useSearchParams()
  const optionCheckedSource=Params.get("source")
const optionCheckedtarget=Params.get("target")
const [query,SetQuery]=useState({
  q:"",
  source: optionCheckedSource || "auto",
  target: optionCheckedtarget || "en",
  format: "text",
  api_key: ""
})
const [Text1,SetText]=useState("")
const {Text,isLoading,isError}=useSelector((store)=>store)

const throttledText = useThrottle(query, 1000);

useEffect(()=>{
SetText(Text)
SetParams({source:query.source, target:query.target, q:query.q})
query.q && getQuery()
},[throttledText])



const getQuery=()=>{

  dispatch(GetApi(query))
}




  return (
    <div id="">
      <Nav />
      <div
        id="homepage"
        className="w-75 h-50 position-absolute top-50 start-50 translate-middle"
      >
      <Box   onChange={(e) => SetQuery({...query,q:e.target.value})}     OptionSourceChange={(e) =>SetQuery({...query,source:e.target.value}) } isChecked={optionCheckedSource} />

    <div className="Direction"> { !isLoading? ( <ArrowRightIcon id="Arrow" w={10} h={10} margin="10px" color="blue.500" />) : (
         <div w={10} h={10} style={{margin:"10px"}} >
 <div  className="spinner-border text-primary" role="status"  >
</div>
 </div> )
}</div>
        <Box value={query.q?Text:""} onChange={(e)=>e.target} OptionSourceChange={(e) =>SetQuery({...query,target:e.target.value})} isChecked={optionCheckedtarget} />
       
      </div>
     
    </div>
  );
}

export default Homepage;
