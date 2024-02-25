import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  // let string="gaurav"
  let obj={
    name:"kumar gaurav singh",
    roll:12,
    school:"Don Bosco Academy"
  }
  
  return (
    <>
      <h1>Tailwind-test</h1>
      <Card info={obj} />
      
    </>
  );
}

export default App;
