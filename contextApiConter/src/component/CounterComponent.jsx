import React, { useContext } from  'react'
import MyContext  from '../context/context'

function CounterComponent(){

    let{counter,setCounter}=useContext(MyContext)

    let handleIncrement=()=>{
        setCounter(counter+1)

    }

    let handleDecrement=()=>{
        setCounter(counter-1)
    }

    return(
        <>
        <h3>counter: {counter}</h3>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>

        </>
    )
}
export default CounterComponent
