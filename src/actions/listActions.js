// I'm honestly not a 100% sure about using this module 
// since it is not "explicitly" included in the package.json
// but it is a dependency is jsdom. 
import request from 'request';

import * as types from './types';

// TODO LIST MICROSERVICE
const url = '/';

// Retrieve List Item
export function getItemsRequest() {
  return {
    type: types.GET_ITEMS_REQUEST
  };
}

export function getItemsSuccess(response) {
  return {
    type: types.GET_ITEMS_SUCCESS,
    response
  };
}

export function getItemsFailure(error) {
  return {
    type: types.GET_ITEMS_FAILURE,
    error
  };
}

export function getItems() {
  return (dispatch) => {
    dispatch(getItemsRequest());

    return request
      .get(`${url}/items`, (error, response, body) => {
        if (error) {
          // console.log(error.statusCode) // 401
          // console.log('error: get items - ', error);
          return dispatch(getItemsFailure(error));
        }

        // console.log(response.statusCode) // 200
        // console.log('response: get items - ', [body]);
        return dispatch(getItemsSuccess(JSON.parse(body)))
      });
  };
}

// Add List Item
export function addItemsRequest(response) {
  return {
    type: types.ADD_ITEMS_REQUEST,
    response
  };
}

export function addItemsSuccess(response) {
  return {
    type: types.ADD_ITEMS_SUCCESS,
    response
  };
}

export function addItemsFailure(error) {
  return {
    type: types.ADD_ITEMS_FAILURE,
    error
  };
}

export function addItems(input) {
  return (dispatch) => {
    dispatch(addItemsRequest());

    return request
      .post({
        url: `${url}/item`, 
        form: input 
      }, (error, response, body) => {
        if (error) {
          // console.log(error.statusCode) // 401
          // console.log('error: add items - ', error);
          return dispatch(addItemsFailure(error));
        }

        // console.log(response.statusCode) // 200
        // console.log('response: add items - ', [body]);
        return dispatch(addItemsSuccess(JSON.parse(body)))
      });
  };
}


// Edit List Item
export function editItemsRequest() {
  return {
    type: types.EDIT_ITEMS_REQUEST
  };
}

export function editItemsSuccess(response) {
  return {
    type: types.EDIT_ITEMS_SUCCESS,
    response
  };
}

export function editItemsFailure(error) {
  return {
    type: types.EDIT_ITEMS_FAILURE,
    error
  };
}

export function editItems(id, input) {
  return (dispatch) => {
    dispatch(editItemsRequest());

    return request
      .post({
        url: `${url}/item/${id}`, 
        form: input 
      }, (error, response, body) => {
        if (error) {
          // console.log(error.statusCode) // 401
          // console.log('error: edit items - ', error);
          return dispatch(editItemsFailure(error));
        }

        // console.log(response.statusCode) // 200
        // console.log('response: edit items - ', body);
        return dispatch(editItemsSuccess(body))
      });
  };
}

// Delete List Item
export function deleteItemsRequest() {
  return {
    type: types.DELETE_ITEMS_REQUEST
  };
}

export function deleteItemsSuccess(response) {
  return {
    type: types.DELETE_ITEMS_SUCCESS,
    response
  };
}

export function deleteItemsFailure(error) {
  return {
    type: types.DELETE_ITEMS_FAILURE,
    error
  };
}

export function deleteItems(id) {
  return (dispatch) => {
    dispatch(deleteItemsRequest());

    return request
      .delete(`${url}/item/${id}`, (error, response, body) => {
        if (error) {
          // console.log(error.statusCode) // 401
          // console.log('error: edit items - ', error);
          return dispatch(deleteItemsFailure(error));
        }

        // console.log(response.statusCode) // 200
        // console.log('response: edit items - ', body);
        return dispatch(deleteItemsSuccess(body))
      });
  };
}

