import React from 'react'
import { TodoList } from '../components/todoList'
import { TodoForm } from '../components/todoForm'
import { connect } from 'react-redux'
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../actions/todosActions'

@connect((store) => {
  return {
    todos: store.todos.todos
  }
})
export default class Todos extends React.Component {
  static propTypes = {
    todos: React.PropTypes.any,
    dispatch: React.PropTypes.any
  }

  constructor () {
    super()
    this.state = {
      text: '',
      isEdit: 0
    }
  }

  componentWillMount () {
    this.props.dispatch(fetchTodos())
  }

  render () {
    const { todos } = this.props
    if (!todos.length) {
      return <div className='row'>
        <div className='col-md-6 col-md-offset-3'>
          <img src='img/ajax-loader.gif' />
        </div></div>
    }
    return (
      <div>
        <TodoForm
          {...this.state}
          changeText={this.handleChangeText}
          updateTodo={this.handleTodoUpdate}
          addTodo={this.handleTodoAdd} />
        <TodoList
          todos={this.props.todos}
          editTodo={this.handleTodoEdit}
          deleteTodo={this.handleTodoDelete} />
      </div>
    )
  }

  handleTodoAdd = (text) => {
    this.props.dispatch(addTodo(this.props.todos.length + 1, text))
    this.setState({
      text: '',
      isEdit: 0
    })
  }

  handleTodoEdit = (todo) => {
    this.setState({
      text: todo.text,
      isEdit: todo.id
    })
  }

  handleTodoDelete = (id) => {
    this.props.dispatch(deleteTodo(id))
  }

  handleChangeText = (text) => {
    this.setState({
      text: text
    })
  }

  handleTodoUpdate = (todo) => {
    this.props.dispatch(updateTodo(todo.id, todo.text))
    this.setState({
      text: '',
      isEdit: 0
    })
  }
}
