import React, { useContext, useState } from "react"
import Profile from "./component/profile";
import { UserContext } from "../context/UserContext";

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const handleSubmit = () => {
    setUser(username);
  }
  return (
    <>
      <div>
        <h1>Create Context Api</h1>
        <h2>Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        
        <button onClick={handleSubmit}>Submit</button>
        <Profile/>
      </div>
    </>
  );
}

export default App
