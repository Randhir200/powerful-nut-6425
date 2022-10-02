import {
  ADD_DATA_FAILURE_C,
  ADD_DATA_REQUEST_C,
  GET_DATA_SUCCESS_C,
} from './action.type';
const initState = {
  data: [],
  get: { loading: false, error: false },
  post: { loading: false, error: false },
};
export const clientReducer = (state = initState, { type, Payload }) => {
  switch (type) {
    case GET_DATA_SUCCESS_C:
      return {
        ...state,
        data: Payload,
        isLoading: false,
        isError: false,
      };

    case ADD_DATA_REQUEST_C:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case ADD_DATA_FAILURE_C:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
