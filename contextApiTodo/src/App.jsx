import { useEffect, useState } from "react";
import "./App.css";
import { TodoContextProvider } from "./context";
import {TodoForm,Todoitem} from './components'


function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    
    setTodos((preTodo) => [{  ...todo }, ...preTodo]);
  }
  function updateTodo(id, todo) {
    setTodos((preTodo) => preTodo.map((e) => (e.id === id ? todo : preTodo)));
  }
  function deleteTodo(id) {
    setTodos((preTodo) => preTodo.filter((each) => each.id !== id));
  }
  function toggleComplete(id) {
    setTodos((preTodo) =>
      preTodo.map((each) =>
        each.id === id ? { ...each, completed: !each.completed } : preTodo
      )
    );
  }
  // local storage:-
  useEffect(() => {
    let todoKey = JSON.parse(localStorage.getItem("todoKey"));
    if (todoKey && todoKey.length > 0) {
      setTodos(todoKey);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoKey", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <Todoitem todo={todo}/>

              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
