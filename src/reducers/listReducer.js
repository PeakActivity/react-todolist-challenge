// use this reducer for your todo list reducer...
import {
    GET_TODO_LIST, 
    ADD_TODO, 
    UPDATE_TODO, 
    DELETE_TODO,
    ADD_ERROR_MESSAGE,
    UPDATE_ERROR_MESSAGE,
    NOTIFICATION,
    ACTION_STATUS,
    DELETE_ERROR_MESSAGE
} from '../actions/types'
const initialState = {
    todos: [],
    error: '',
    editItem: '',
    actionStatus: 'START',
    deletedItem:{}
}
   
const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO_LIST: {
            return {
                ...state,
                todos: action.todos,
            }
        }
        case ACTION_STATUS: {
            return {
                ...state,
                actionStatus: action.status
            }
        }
        
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.todo],
                error:''
            }
        }
        case ADD_ERROR_MESSAGE: {
            return {
                ...state,
                todos: state.todos.filter(todoItems => todoItems.id !== action.todo.id),
                error: 'Something Went wrong'
            } 
        }
        case UPDATE_TODO: {
            return {
                ...state,
                todos: state.todos.map(list => {
                    if(list.id === action.todo.id) {
                    state.editItem= list.item
                    list.item = action.todo.item 
                    }  
                    return list  
                }),
                
                error : ''
            }
        }
        case UPDATE_ERROR_MESSAGE: {
            return {
                ...state,
                todos: state.todos.map(list => {
                    if(list.id === action.todo.id) {
                       list.item = state.editItem
                    }  
                    return list  
                }),
                error: 'Something Went wrong while Updating... please try agian...'
            } 
        }
        case DELETE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(todoItems => todoItems.id !== action.id),
                deletedItem: state.todos.filter(todoItems => todoItems.id === action.id)
            }
        }
        case DELETE_ERROR_MESSAGE: {
            return {
                ...state,
                todos: [...state.todos, state.deletedItem],
                error: 'Unable to delete...'
            }
        }
        case NOTIFICATION: {
            return {
                ...state,
                error: 'Something wend Wrong while loading the Todo list... Please try again..'
            }
        }
        
        default:
            return state;
    }
}

export default ListReducer;
