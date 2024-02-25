import React, { createContext, useContext } from "react";

//context created:- step.1
//we can pass function here but functionality has to be defined in app.jsx
export let TodoContext = createContext({
  todos: [{id: 1,todo: "Todo msg",completed: false}],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

//consume the context:- step.2
//hum custom hook bana rhe hai yaha pe so that  context to consume kar sake. and fir isko apne component me use kar lete hai.
export let useTodo = () => {
  return useContext(TodoContext);
};

//create Provider component to wrap the app

export let TodoContextProvider = TodoContext.Provider;
