import {
  ADD_DATA_FAILURE_P,
  ADD_DATA_REQUEST_P,
  ADD_DATA_SUCCESS_P,
  GET_DATA_FAILURE_P,
  GET_DATA_REQUEST_P,
  GET_DATA_SUCCESS_P,
  DELETE_DATA_P,
} from './action.type';
const initState = {
  data: [],
  get: { loading: false, error: false },
  post: { loading: false, error: false },
};
export const projectReducer = (state = initState, { type, Payload }) => {
  switch (type) {
    case GET_DATA_SUCCESS_P:
      return {
        ...state,
        data: Payload,
        isLoading: false,
        isError: false,
      };

    case ADD_DATA_REQUEST_P:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case ADD_DATA_FAILURE_P:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
