import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";
import Button from "../button";
import Input from "../input";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
      isEditing: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.items !== nextProps.items) {
      this.setState({
        items: nextProps.items
      })
    }
  }

  toggleEdit(id) {
    this.setState({
      isEditing: id || false
    })
  }

  render() {
    const { editItem, deleteItem, updateItem } = this.props;
    const { items, isEditing } = this.state;

    return (
      <table>
        <thead>
          <tr>
            <th width="66%">Item</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              { isEditing === item.id && 
                <td>
                  <Input
                    name="item"
                    placeholder={item.message}
                    onChange={(e) => updateItem(item.id, e)}
                  />
                </td>
              }

              { isEditing !== item.id && 
                <td onClick={() => item.id && this.toggleEdit(item.id)}>{item.message}</td>
              }

              <td>
                <Button
                  type="edit"
                  onClick={() => editItem(item.id, item.message)}
                >
                  Edit
                </Button>

                <Button type="delete" onClick={() => deleteItem(item.id)}>
                  Delete
                </Button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired
};

export default List;
