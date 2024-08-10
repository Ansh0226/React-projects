import './App.css'
import { useState } from 'react';

function App() {
  let [count,setCount] = useState(15);
  function increase() {
    if(count<20)
    setCount(count+=1);
    console.log(count);
  }
  function decrease() {
    if(count>0)
    setCount(count -= 1);
    console.log(count);
  }

  return (
    <>
      <h1>React counter</h1>
      <br />
      <h3>Counter Value: {count}</h3>
      <button style={{margin: "30px"}} onClick={increase}>Count++</button>
      
      <button onClick={decrease}>Count--</button>
    </>
  )
}

export default App
