import axios from 'axios';
import {
  ADD_DATA_FAILURE,
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_LOADING,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  DELETE_DATA
} from './action.type';

export const getData = (url) => async (dispatch) => {
  try {
    let res = await axios.get(url);
    //  console.log(res.data.data)
    dispatch({
      type: GET_DATA_SUCCESS,
      Payload: res.data.data,
    });
    dispatch({
      type: GET_DATA_LOADING,
    });
    dispatch({
      type: GET_DATA_FAILURE,
    });
  } catch (err) {
    dispatch({
      type: GET_DATA_FAILURE,
    });
    dispatch({
      type: GET_DATA_LOADING,
    });
  }
};


export const postData = (Payload) => async (dispatch) => {
    console.log(Payload)
    try {
      let res = await axios.post('http://localhost:8080/projects/', Payload);
      //  console.log(res.data.data)
      dispatch({
        type: ADD_DATA_SUCCESS,
      });
      
    } catch (err) {
     console.log(err)
    }
  };

  export const updateData = ({Payload,id}) => async (dispatch) => {
    console.log(Payload)
    try {
      let res = await axios.patch(`http://localhost:8080/projects/${id}`, Payload);
      //  console.log(res.data.data)
      dispatch({
        type: ADD_DATA_SUCCESS,
      });
      
    } catch (err) {
     console.log(err)
    }
  };
  
  export const deleteData = (id) => async (dispatch) => {
    try {
      let res = await axios.delete(`http://localhost:8080/projects/${id}`);
      //  console.log(res.data.data)
      dispatch({
        type: DELETE_DATA,
      });
      
    } catch (err) {
     console.log(err)
    }
  };
  

  