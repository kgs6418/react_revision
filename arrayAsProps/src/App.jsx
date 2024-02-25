import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Array from './components/Array'

function App() {
  const [count, setCount] = useState(0)
  let arr=["gaurav","annat","chandan"]

  return (
    <>
     <h3>hello i am gaurav , i am gonna use array as a props.</h3>
     <Array names={arr}/>
    </>
  )
}

export default App
