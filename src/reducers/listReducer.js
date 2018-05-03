// use this reducer for your todo list reducer...
import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
  ADD_ITEMS_REQUEST,
  ADD_ITEMS_SUCCESS,
  ADD_ITEMS_FAILURE,
  EDIT_ITEMS_REQUEST,
  EDIT_ITEMS_SUCCESS,
  EDIT_ITEMS_FAILURE,
  DELETE_ITEMS_REQUEST,
  DELETE_ITEMS_SUCCESS,
  DELETE_ITEMS_FAILURE,
} from "../actions/types";

const initialState = {};

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST:
    case ADD_ITEMS_REQUEST:
    case EDIT_ITEMS_REQUEST:
    case DELETE_ITEMS_REQUEST:
      return {
        ...state
      };

    case GET_ITEMS_SUCCESS:
    case ADD_ITEMS_SUCCESS:
    case EDIT_ITEMS_SUCCESS:
    case DELETE_ITEMS_SUCCESS:
      return {
        ...state,
        list: action.response
      };

    case GET_ITEMS_FAILURE:
    case ADD_ITEMS_FAILURE:
    case EDIT_ITEMS_FAILURE:
    case DELETE_ITEMS_FAILURE:
      return {
        ...state,
        list: action.error
      };

    default:
      return state;
  }
};

export default ListReducer;
