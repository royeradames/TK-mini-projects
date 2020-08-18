import React, { useReducer, useState } from 'react';
import useForm from './hooks/useForm'

const initialState = { count: 0 }
function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 }
    case 'DECREASE':
      return { count: state.count - 1 }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [useInput, todoList, onChange, onSubmit] = useForm()

  function displayTodos() {
    //prefer this way to you can debugge it
    //take all of the array obj descripton text and put in on a li tag to be 
    let item
    item = todoList.map(todoData => {
      return <li>{todoData.description}</li>
    })
    return item
    
  }
  return (
    <div className='App'>
      <h1>
        In App
      </h1>
      <div class="challange-todo-list">
        <div className="display-todos">
          <h2>Todo List:</h2>
          <ul>
            {displayTodos()}
          </ul>

        </div>
        <div className="todo-form">
          <form onSubmit={onSubmit}>
            <input placeholder='Add new Todo' value={useInput} onChange={onChange} />
            <button type='submit'>Submit Todo</button>
          </form>
        </div>
      </div>


      <div class="introduction-to-usereducer">

        <div className="count">
          Count: {state.count}
        </div>
        <button onClick={() => dispatch({ type: 'INCREASE' })}>+1</button>
        <button onClick={() => dispatch({ type: 'DECREASE' })}>-1</button>
      </div>
    </div>
  )
}

export default App