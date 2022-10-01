import {
  ADD_DATA_FAILURE,
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  DELETE_DATA
} from './action.type';
const initState = {
  data: [],
  get: { loading: false, error: false },
  post: { loading: false, error: false },
};
export const projectReducer = (state = initState, { type, Payload }) => {
  switch (type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: Payload,
        isLoading: false,
        isError: false,
      };
    
    case ADD_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    
    case ADD_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
