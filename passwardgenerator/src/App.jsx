import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [character, setCharacter] = useState(false);
  const [number, setNumbers] = useState(false);
  const reference = useRef(null);
  const passwardgenerate = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (character) {
      str += "!@#$%^&*()?><"; '][{}:"`~,./?|';
    }
    if (number) {
      str += "123456789";
    }
    let x = "";
    let i = 0;
    for (i = 0; i < length; i++){
      x+= str.charAt(Math.floor(Math.random()*str.length+1))
    }
    setPassword(x);
  }, [length, setPassword, number, character])
  const handleCopy= useCallback(() => {
      reference.current?.select();
      reference.current?.setSelectionRange(0, 999);
      window.navigator.clipboard.writeText(password);
    },[password])
   
  
  
  useEffect(() => {
    passwardgenerate()
  },[length,number,character,setPassword])

  return (
    <div>
      <div className="w-full max-w-md mx-auto  shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div>
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="outline-none w-80 py-1 px-3 rounded-lg "
            ref={reference}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
