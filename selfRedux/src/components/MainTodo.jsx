import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../sliceReducer/todo/slice';

function MainTodo() {
  let [input, setInput] = useState('');
  let dispatch = useDispatch();

  function addTodoHandler(e) {
    e.preventDefault();
    dispatch(add(input));
    setInput('');
  }

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="enter todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default MainTodo;
