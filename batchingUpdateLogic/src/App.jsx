import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

   function ClickHandel(){
    console.log("gaurav")
    console.log(setCounter(preCounter=>preCounter+1))
    setCounter(preCounter=>preCounter+1)
    
    
  }
  

  return (
    <>
      <h4>Understanding the concept of Batching update  </h4>
      <h3>counter:-{counter}</h3>
      <button onClick={ClickHandel}>Click</button>

    </>
  )
}

export default App
