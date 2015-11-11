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
    const node = this.props.todo
    this.props.onDeleteClick(node)
  }
}



DeleteTodo.propTypes = {
  onDeleteClick: PropTypes.func.isRequired
}



export default DeleteTodo
