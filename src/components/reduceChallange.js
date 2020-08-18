import React, { useReducer } from 'react';

/*
Challenge
Create a reducer function that can do the following:

Take in an initialState value of an array of objects. Each object should represent a to-do item, and should contain only one property, description, which should be a string, a short description of the to-do item.

Take in an action object with a type property and a payload property. The payload property should have a description key and a value equal to a new description entered by a user. (Don’t worry about making inputs now, just write the reducer.)

If the type is equal to ‘ADD’, then return a new array with a shallow copy of the previous state, and spread in a new object that contains the new description key and its corresponding value.

Return the previous state as a default case.
*/

function App(){
  const initialState = [{
    description: 'Todo list item',
  }]
  const reducer = (state, action) => {
    switch(action.type){
      case 'ADD':
        let newList = state.slice()
        newList.push({description: action.payload.description})
        return newList
      case 'EDIT':
        const newEdit = state.slice()
        newEdit.forEach(item => {
          if(item.description === action.payload.description){
            item.description = action.payload.edit
          }
        })
        return newEdit
      case 'DELETE':
        let newDelete = state.slice()
        let indexDelete
        newDelete.forEach((item, index) => {
          if(item.description === action.payload.description){
            indexDelete = index
          }
        }) 
        //delete the index by inserting nothing has it's replacement
        newDelete = newDelete.splice(indexDelete, 0)
        return newDelete
      default:
        return state
    }
  }
  // const newEntry = reducer(initialState, {type: 'ADD', payload: {description: 'New todo inside ADD'}})
  // const newEdit = reducer(initialState, {type: 'EDIT', payload: {description: 'Todo list item', edit: 'Super todo for everybody on EDIT'}})
  const newDelete = reducer(initialState, {type: 'DELETE', payload: {description: 'Todo list item'}})
  // const newEmptyEntry = reducer(initialState, {type: '', payload: {description: 'New todo'}})

  console.log(initialState)
  // console.log(newEntry)
  // console.log(newEmptyEntry)
  // console.log(newEdit)
  console.log('Delete:')
  console.log(newDelete)

  return(
    <div className='App'>
      Reducer Challange

    </div>
  )
}

export default App