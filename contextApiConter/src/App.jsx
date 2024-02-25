import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterComponent from './component/CounterComponent'
import MyContextProvider from './context/MyContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MyContextProvider>
     <h1>test</h1>
     <CounterComponent />
    </MyContextProvider>
  )
}

export default App
