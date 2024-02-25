import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainTodo from './components/MainTodo'
import TodoList from './components/TodoList'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>self understanding</h1>
    <MainTodo/>
    <TodoList/>
    </>
  )
}

export default App
