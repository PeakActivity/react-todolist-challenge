import React, { Component } from "react"
import './index.css';
import Button from '../button';

class List extends Component {
    constructor () {
        super()
        this.state= {
            editTodo: '',
            editTodoValue: ''
        }
        this.updateTodo = this.updateTodo.bind(this)
    }

    componentWillReceiveProps () {
        this.props.status === 'DONE' && this.setState({editTodo: '',editTodoValue: ''})
    }
    todoTextChanged = (e) => {
        this.setState({editTodoValue: e.target.value})
    } 
    editHandler = (todo) => {
        this.setState({editTodo: todo.id, editTodoValue: todo.item})
    }
    updateTodo = () => {
        this.props.update({id: this.state.editTodo, item: this.state.editTodoValue})
    }
    render() {
        const {listItems, deleteTodo} = this.props
        const {editTodo, editTodoValue} = this.state
        console.log(this.props)
        if (listItems.length === 0 ) {
            return <div>No TODOS
                <div>Create your todos...here</div>
            </div>
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th width='66%'>Item</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems.map(todo => <tr key={`row-${todo.id}`}>
                        <td key={`item-${todo.id}`}>
                        {editTodo === todo.id && <input type="text" style={{width:'90%',outline:'none'}} name="editTodoValue" value={editTodoValue} onChange={(e) => this.todoTextChanged(e)}/>}
                        {editTodo !== todo.id && todo.item}</td>
                        <td key={`action-${todo.id}`}>
                            {editTodo !== todo.id && <div>
                                <Button type='edit' onClick={() => this.editHandler(todo)}>
                                    Edit
                                </Button>
                                <Button type='delete' onClick={() => deleteTodo(todo.id)}>
                                    Delete
                                </Button>
                            </div>}
                            {editTodo === todo.id && <Button type='add' onClick={() => this.updateTodo()}>
                                Save
                            </Button>}
                        </td>
                    </tr>)}
                    
                </tbody>
            </table>
        );
    }
}

export default List
