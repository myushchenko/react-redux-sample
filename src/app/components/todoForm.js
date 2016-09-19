import React from 'react'

export class TodoForm extends React.Component {
  static propTypes = {
    text: React.PropTypes.string,
    isEdit: React.PropTypes.any,
    changeText: React.PropTypes.any,
    addTodo: React.PropTypes.any,
    updateTodo: React.PropTypes.any
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <label>Todo Text</label>
          <input type='text'
            ref='text'
            className='form-control'
            value={this.props.text}
            onChange={this.onChange} />
        </div>
      </form>
    )
  }

  onChange = (e) => {
    this.props.changeText(e.target.value)
  }

  onSubmit = (e) => {
    e.preventDefault()
    var text = this.refs.text.value.trim()
    if (!text) {
      return
    }

    if (!this.props.isEdit) {
      this.props.addTodo(text)
    } else {
      var updateTodo = {
        id: this.props.isEdit,
        text: text
      }
      this.props.updateTodo(updateTodo)
    }

    this.refs.text.value = ''
  }
}
