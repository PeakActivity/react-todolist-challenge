// actions for the todo list can go here...
import {
  GET_TODO_LIST, 
  ADD_TODO, 
  UPDATE_TODO, 
  DELETE_TODO,
  ADD_ERROR_MESSAGE,
  UPDATE_ERROR_MESSAGE,
  NOTIFICATION,
  ACTION_STATUS,
  GET_TODOS,
  DELETE_ERROR_MESSAGE} from './types'
  import {GetAllTODOs, uuidv4, AddNewTodo, Update, RemoveTodo} from '../utils/index'

 export const getAllTodos = () => {
   return dispatch=> {
     dispatch({type:ACTION_STATUS, status:'PENDING'} )
     return GetAllTODOs()
     .then(res => res.status === 200 && res.json())
     .then(todos => dispatch({type:GET_TODO_LIST, todos} ))
     .catch(error => dispatch({type:NOTIFICATION, error}))
     .then(dispatch({type:ACTION_STATUS, status:'DONE'} ))
   }
 }

 export const setActionStatus = () => {
   return {
     type: ACTION_STATUS,
     status: 'START'
   }
 }

 export const getToDoList = () => {
   return {
      type:GET_TODOS
    }
  }
  
 export const addTodo = (item) => {
  let todo = {
    item: item,
    timestamp: Date.parse(new Date()),
    id: uuidv4()
  }
  return dispatch=> {
    dispatch({type:ACTION_STATUS, status:'PENDING'} )
    dispatch({type: ADD_TODO, todo})
    return AddNewTodo(todo)
    .then(res => {
      if(res.status === 200) {
       return res.json()
      } else {
      throw Error(res.statusText)
    }})
    .then(dispatch({type:ACTION_STATUS, status:'DONE'} ))
    .catch(error => dispatch({type:ADD_ERROR_MESSAGE, error, todo}))
  }
}

export const update = (todo) => {
  
  return dispatch => {
    dispatch({type:ACTION_STATUS, status:'PENDING'} )
    dispatch({type: UPDATE_TODO, todo})
    return Update(todo)
    .then(res => {
      if(res.status === 200) {
       return res.json()
      } else {
      throw Error(res.statusText)
    }})
    .then(dispatch({type:ACTION_STATUS, status:'DONE'} ))
    .catch(error => dispatch({type:UPDATE_ERROR_MESSAGE, error, todo}))
  }
}
export const deleteTodo = (id) => {
  
  return dispatch => {
    dispatch({type:ACTION_STATUS, status:'PENDING'} )
    dispatch({type: DELETE_TODO, id})
    return RemoveTodo(id)
    .then(res => {
      if(res.status === 200) {
       return res.json()
      } else {
      throw Error(res.statusText)
    }})
    .then(dispatch({type:ACTION_STATUS, status:'DONE'} ))
    .catch(error => dispatch({type:DELETE_ERROR_MESSAGE, error}))
  }
}