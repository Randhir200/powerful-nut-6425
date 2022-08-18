import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Textarea
} from "@chakra-ui/react";
import '../Styles/Homepage.css'
import React from "react";
import OptionLanguage from "./OptionLanguage";
import '../Styles/Homepage.css'
export default function Box({onChange,value,OptionSourceChange,isChecked}) {


  return (
    <FormControl  className="Box" width='100%' >
      <FormLabel   borderRadius="50"> <OptionLanguage onChange={OptionSourceChange} isChecked={isChecked}/> </FormLabel>
      <Textarea   value={value} onChange={onChange} type="email" className="w-100 h-100 TextArea" />
     
    </FormControl>
  );
}
