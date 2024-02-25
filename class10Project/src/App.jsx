import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [length, setLength] = useState(6)
  let [number, setNumber] = useState(false)
  let [character, setCharacter] = useState(false)
  let [password, setPassword] = useState('')
  // one more "state" to set color of button after the click to copy.
  let [btnColor,setBtnColor]=useState("blue")

  function changeBtnColor(){
    setBtnColor("red")
  }
  


  // step1- password generator:-
  let passwordGenerator = useCallback(()=>{
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let add = "";
    if(number) str+="0123456789"
    if(character) str+="~!@#$%^&*()_+{}[]"

    for (let i = 0; i < length; i++) {
      let randomIndex=Math.floor(Math.random()*str.length)
      add+=str.charAt(randomIndex) 
    }
   
    setPassword(add)
  }
    ,[length,number,character,setPassword])

// useEffect:- 
  useEffect(()=>{
    passwordGenerator()
  },[length,number,character,passwordGenerator])  

  //useRef:-
  let ref=useRef(null)
  //copy function:-
  let copy=useCallback(()=>{
    changeBtnColor()
    ref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password]) 
   
  
  // actual return :-
  return (
    <>
    <h1 className='text-4xl'>Project 10 - Complex Password Generator</h1><br />
    <div style={{
       padding:"10px",
       width: "400px",
       height: "200px",
       backgroundColor: "orange",
       margin: "20px",
       border:"1px solid black",
    }}>

      <div> <input type="text"
       id='textInside'
       value={password} readOnly 
       ref={ref}
        /><button 
        onClick={copy}
        
         style={{backgroundColor:btnColor}}>copy</button><br /></div>

      <div><input 
      type="range"
       min={6} 
       max={15} 
       value={length}
       id='range-input'
       onChange={(e)=>{setLength(e.target.value)}}
        /> <label htmlFor="range-input">Length{length}</label></div>

      <div><input
       type="checkbox"
       defaultChecked={number}
       id='number-input'
       onChange={()=>{
        setNumber((prev)=>!prev)
       }}
        /><label htmlFor="number-input">Numbers</label></div>
      
      <div><input
       type="checkbox"
       defaultChecked={character}
       id='counter-input'
       onChange={()=>{
        setCharacter((prev)=>!prev)
       }}
        /><label htmlFor="counter-input">character</label></div>
      
      
    </div>
   
    </>
  )
}

export default App
