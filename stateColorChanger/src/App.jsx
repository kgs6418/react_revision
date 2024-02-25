import { useState } from "react";
function ColorChanger() {
  let [currentColor, setCurrentColor] = useState("#000000");
  // document.body.style.backgroundColor = currentColor;

  let randomColor=()=>{
    let letters ="0123456789ABCDEF"
    let hex="#"
    for (let i = 0; i < 6; i++) {
     hex=hex+letters [Math.floor(Math.random()*letters.length )]
      
    }
    console.log(hex)
    return hex
  }

  let colorHandler=()=>{
   
    let newColor=randomColor()
    setCurrentColor(newColor)
    document.body.style.backgroundColor = newColor;
  }
  
  return(
    <>
    <h1>Hello I am ColorChanger</h1>
    
    <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: currentColor,
          margin: "20px",
          border:"1px solid black"
        }}
      ></div>
      <button onClick={colorHandler}>click to change color</button>
   

    </>
  )
}
export default ColorChanger