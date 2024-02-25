import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from '../reducer/todo/todoSlice'

function AddTodo() {
    let[input,setInput]=useState('')
    
    let dispatch=useDispatch()

//learning to "dispatch action".
    function addTodoHandler(e){
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }


  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    </>
  );
}
export default AddTodo;