import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { decrease, increase } from '../counterSlice/counterSlice';

function MyCounter() {
  // let [num, setNum] = useState(0);
  let dispatch = useDispatch(); 
  let selector=useSelector((state)=>state.value)

  let handleIncrease = () => {
    dispatch(increase()); 
   
  };

  let handleDecrease = () => {
    dispatch(decrease());
    
  };
 

  return (
    <>
      <h1>Counter App : {selector}</h1>
     
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
    </>
  );
}

export default MyCounter;
