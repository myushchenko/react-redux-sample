import React from 'react'

export class TodoList extends React.Component {
  static propTypes = {
    todos: React.PropTypes.any,
    editTodo: React.PropTypes.any,
    deleteTodo: React.PropTypes.any
  }

  render () {
    return (
      <ul className='list-group'>
      {
        this.props.todos.map(todo => {
          return <li className='list-group-item' key={todo.id}>
            <span onClick={this.editTodo}>{todo.text}</span>
            <a onClick={this.onDelete(todo.id)} className='delete'>x</a>
          </li>
        })
      }
      </ul>
    )
  }

  onDelete = (id) => (e) => {
    e.preventDefault()
    this.props.deleteTodo(id)
  }

  editTodo = (todo) => {
    this.props.editTodo(todo)
  }
}
