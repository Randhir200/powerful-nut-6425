import axios from "axios";
import { ADD_DATA_FAILURE, ADD_DATA_REQUEST, ADD_DATA_SUCCESS, GET_DATA_FAILURE, GET_DATA_LOADING, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./action.type";

export const getData = (url) => async (dispatch) => {
    dispatch({
        type: GET_DATA_LOADING
    });
    try {
        let res = await axios.get(url);
        console.log(res);
      dispatch({
        type: ADD_DATA_SUCCESS,
        payload: res.data
      });
      dispatch({
        type: GET_DATA_LOADING
      });
      dispatch({
        type: GET_DATA_FAILURE
      });
    } catch (err) {
      dispatch({
        type: GET_DATA_FAILURE
      });
      dispatch({
        type: GET_DATA_LOADING
      });
    }
  };
  