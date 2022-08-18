import React from 'react'
import {GETAPISUCCESS,GETAPIREQUEST,GETAPIFAILURE} from './actionType'
const InitialState={
Text:"",
isLoading:false,
isError:false
}
function reducer(state=InitialState,action) {
 const {type,payload }=action
  switch (type) {
case GETAPISUCCESS:
  return {
    ...state,isLoading:false,isError:false,Text:action.payload
  }

  case GETAPIREQUEST: 
  return{
    ...state,isLoading:true,isError:false

  }
  case GETAPIFAILURE:
    return {...state,isLoading:false,isError:false}
  
    default:
        return state;
  }
}

export default reducer
