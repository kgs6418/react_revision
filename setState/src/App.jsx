import { useState } from "react"
function Counter(){
  let[initialCount]=useState(0)
  let [count,setCount]=useState(0);

let handleCount1=()=>{
  setCount(count+2)
}
let handleCount2=()=>{
  setCount(count-2)
}

  return(
    <>
    <h1> Counter Machine</h1>
    <h3>count:{initialCount}</h3>

    <h3>Increase the count by 2:- <button onClick={handleCount1}>count</button> </h3>
    <h3>count:{count}</h3>

    <h3>Decrease the count by 2:- <button onClick={handleCount2}>count</button> </h3>
    <h3>count:{count}</h3>
    
    </>
  )
}
export default Counter