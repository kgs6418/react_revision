import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyCounter from './component/MyCounter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyCounter />
    </>
  )
}

export default App
