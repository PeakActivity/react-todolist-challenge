import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";

import "./App.css";

// Custom Components
import List from "./components/list";
import Input from "./components/input";
import Button from "./components/button";

// Actions
import * as actions from "./actions";
class App extends Component {
  constructor(props) {
    super(props);

    // Default items
    // Replace with data from TODO Microservice
    this.state = {
      newItem: "",
      items: [{
        id: 1,
        message: 'Item 1'
      }, {
        id: 2,
        message: 'Item 2'
      }, {
        id: 3,
        message: 'Item 3'
      }]
    }

    this.handleNewItem = this.handleNewItem.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleUpdateItem = this.handleUpdateItem.bind(this);
  }

  componentWillMount() {
    // Start getting all items before the page renders
    // this.props.getItems();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.items !== nextProps.items) {
      this.setState({
        items: nextProps.items
      })
    }
  }

  handleNewItem(message) {
    this.setState({
      newItem:  message
    })
  }

  handleAddItem() {
    const {
      addItems
    } = this.props;

    const {
      items,
      newItem
    } = this.state;

    const item = {
      id: uuid.v4(),
      message: newItem
    }

    this.setState({
      items: items.concat(item)
    })
    
    // This is commented out to prevent breaking 
    // With access to the TODO Microservice 
    // This request would be  completed and updated in store.
    
    // return addItems(item);
  }

  handleEditItem(id, updates) {
    const {
      editItems
    } = this.props;

    // This is commented out to prevent breaking 
    // With access to the TODO Microservice 
    // This request would be  completed and updated in store.

    // return editItems(id, updates);
  }

  handleDeleteItem(id,) {
    const {
      deleteItem
    } = this.props;

    // This is commented out to prevent breaking 
    // With access to the TODO Microservice 
    // This request would be  completed and updated in store.

    // return deleteItem(id);
  }

  handleUpdateItem(id, message) {
    this.setState({
      items: this.state.items.map(item => {
        if ( id === item.id ) {
          item.message = message
        }

        return item;
      })
    })
  }

  render() {
    const {
      items
    } = this.state;

    return (
      <div className="container">
        <h1>Todo List</h1>

        <div className="add-item-to-list">
          <Input name="item" placeholder="New Item..." onChange={ (e) => this.handleNewItem(e) } />
          <Button onClick={ () => this.handleAddItem() } type="add">
            Add
          </Button>
        </div>
        
        <List 
          items={items}
          editItem={this.handleEditItem}
          deleteItem={this.handleEditItem}
          updateItem={this.handleUpdateItem}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    items: state.list
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(App);
