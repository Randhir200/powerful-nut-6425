import {getLocalData} from '../../utils/localStorage'
import {

  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILED,
  SIGNUP_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  All_FAILED,
} from "./ActionType";

const InitialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: getLocalData("token")||""
};

export const reducer = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: false,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        isError: false,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        isError: false,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        isError: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: true,
      };
      case All_FAILED:
        return{
          ...state,isError:false
        }
    default:
      return state
  }
};