import React, { Component, PropTypes } from 'react';

export default class UpdateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {visibility: props.initialVisibility};
  }
  toggleVisibility() {
    if (this.state.visibility === true) {
      this.setState({visibility: false})
    }
    else {
      this.setState({visibility: true})
    }
  }
  handleClick(e) {
    this.toggleVisibility()

  }
  handleUpdate(e) {
    const text = this.refs.input.value.trim()
    const index = this.props.todo.props.index
    this.props.onUpdateClick(text, index)
    this.refs.input.value = ''
    this.toggleVisibility()
  }
  render() {
    return (
      <div>
        {this.state.visibility ? <button onClick={(e) => this.handleClick(e)}>
          Update
        </button> : null }
        {this.state.visibility ? null : <div><input type='text' ref='input' /><button onClick={(e) => this.handleUpdate(e)}>save</button></div> }
      </div>
    )
  }

}

UpdateTodo.propTypes = {
  onUpdateClick: PropTypes.func.isRequired,
  initialVisibility: PropTypes.boolean
}
UpdateTodo.defaultProps = { initialVisibility: true }
