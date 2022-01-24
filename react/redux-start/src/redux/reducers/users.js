import {
  GET_USERS_FULFILLED,
  GET_USERS_PENDING,
  GET_USERS_REJECTED,
  GET_USERS_START,
  GET_USERS_SUCCESS,
} from "../actions";

const initState = {
  loading: false,
  data: [],
  error: null,
};

export function users(state = initState, action) {
  switch (action.type) {
    case GET_USERS_START:
    case GET_USERS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case GET_USERS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case GET_USERS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        //error: action.PAYLOAD,
      };
    default:
      break;
  }
}
