import React, { Component, PropTypes } from 'react';

export default class DeleteTodo extends Component {
  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick(e)}>
          Delete
        </button>
      </div>
    )
  }
  handleClick(e) {
    const index = this.props.todo.props.index
    this.props.onDeleteClick(index)
  }
}



DeleteTodo.propTypes = {
  onDeleteClick: PropTypes.func.isRequired
}



export default DeleteTodo
