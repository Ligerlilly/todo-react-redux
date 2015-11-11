import React, { Component, PropTypes } from 'react'
import DeleteTodo from './DeleteTodo'

export default class Todo extends Component {
  render() {
    return (
      <li

        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        <span onClick={this.props.onClick}>{this.props.text}</span>
        <DeleteTodo onDeleteClick={this.props.onHandleDelete} todo={this} />
      </li>

    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
