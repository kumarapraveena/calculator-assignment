import React from "react";
import { useState } from "react";
import "./App.css"
const App = () => {
  const [input, setInput] = useState("");
  //const [input,setResult]=useState(0)
  // const handler=e=>{
  //   setInput(e.target.value)
  // }
  const handleResult = () => {
    setInput(eval(input))
  }
  return (
    <div className="container">
      <center>
        
        <input type="text" value={input} name="input" />
        <span><button onClick={() => setInput("")}>c</button>
        </span><br />
        <button onClick={() => setInput(input + "1")}>1</button>
        <button onClick={() => setInput(input + "2")}>2</button>
        <button onClick={() => setInput(input + "3")}>3</button>
        <button onClick={() => setInput(input + "/")}>/</button><br />
        <button onClick={() => setInput(input + "4")}>4</button>
        <button onClick={() => setInput(input + "5")}>5</button>
        <button onClick={() => setInput(input + "6")}>6</button>
        <button onClick={() => setInput(input + "-")}>-</button><br />
        <button onClick={() => setInput(input + "7")}>7</button>
        <button onClick={() => setInput(input + "8")}>8</button>
        <button onClick={() => setInput(input + "9")}>9</button>
        <button onClick={() => setInput(input + "+")}>+</button><br />
        <button onClick={() => setInput(input + ".")}>.</button>
        <button onClick={() => setInput(input + "0")}>0</button>
        <button onClick={handleResult}>=</button>
        <button onClick={() => setInput(input + "*")}>*</button><br />


      </center>
    </div>
  )
}
export default App