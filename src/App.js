import React, { Component } from 'react';
import {connect} from 'react-redux' 
import './App.css';

import List from './components/list';
import Input from './components/input';
import Button from './components/button';
import {addTodo, getAllTodos, update, deleteTodo} from './actions/listActions'


class App extends Component {
    constructor () {
        super()
        this.state = {
            newTodo: ''
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        this.props._getAllTodos()
    }
    
    handleChange = (newTodo) => {
        this.setState({newTodo})
    }
    handleAdd = () => {
        if (this.state.newTodo.length > 0) {
            this.props._addTodo(this.state.newTodo)
            this.setState({newTodo:''})
        }
    }
    render() {
        const { newTodo} = this.state
        const {_listItems, _error, _update, _status, _deleteTodo} = this.props
        return (
            <div className="container">
                <h1>Todo List</h1>
                <div className='add-item-to-list'>
                    <Input
                        name='item'
                        placeholder='New Item...'
                        value={newTodo}
                        onChange={this.handleChange}
                    />
                    <Button onClick={this.handleAdd} type='add'>
                      Add
                    </Button>
                </div>
                
                <List listItems={_listItems} update={_update} status={_status} deleteTodo={_deleteTodo}/> 
                
                {_error.length > 0 && 
                    <div>{_error}
                    </div>
                }
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        _addTodo: (data) => {dispatch((addTodo(data)))},
        _getAllTodos: () => {dispatch(getAllTodos())},
        _update: (data) => {dispatch(update(data))},
        _deleteTodo: (data) => {dispatch(deleteTodo(data))}
    }
}
const mapStateToProps = ({list}) => {
    return {
        _listItems: list.todos,
        _error: list.error,
        _status: list.actionStatus
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
