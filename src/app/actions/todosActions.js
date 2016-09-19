import { firebaseDb } from '../firebase/firebase'

export function fetchTodos () {
  return (dispatch) => {
    dispatch({ type: 'FETCH_TODOS' })
    firebaseDb
    .ref('todos')
    .once('value', (snapshot) => {
      var todos = []
      snapshot.forEach((item) => {
        todos.push({
          id: item.val().id,
          text: item.val().text
        })
      })
      dispatch({ type: 'FETCH_TODOS_FULFILLED', payload: todos })
    }, function (error) {
      dispatch({ type: 'FETCH_TODOS_REJECTED', payload: error })
    })
  }
}

export function addTodo (id, text) {
  firebaseDb
  .ref('todos')
  .child(id)
  .set({
    id: id,
    text: text
  })

  return {
    type: 'ADD_TODO',
    payload: {
      id,
      text
    }
  }
}

export function updateTodo (id, text) {
  firebaseDb
  .ref('todos')
  .child(id)
  .set({
    id: id,
    text: text
  })

  return {
    type: 'UPDATE_TODO',
    payload: {
      id,
      text
    }
  }
}

export function deleteTodo (id) {
  firebaseDb
  .ref('todos')
  .child(id)
  .remove()
  return { type: 'DELETE_TODO', payload: id }
}
