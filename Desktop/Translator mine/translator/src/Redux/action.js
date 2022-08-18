import axios from 'axios';
import * as Types from './actionType';

export const GetApiSuccess=(payload)=>{
    return {
    type:Types.GETAPISUCCESS, payload
}
}
export const GetAPiRequest=()=>{
   return{ type:Types.GETAPIREQUEST }
}
export const GetApiFailure=()=>{
    return {type:Types.GETAPIFAILURE}
}

export const GetApi=(params)=>(dispatch)=>{
    dispatch(GetAPiRequest())
  return axios.post("https://libretranslate.de/translate",params)
     .then((res)=>dispatch(GetApiSuccess(res.data.translatedText)))
     .catch((c)=>dispatch(GetApiFailure()))
}