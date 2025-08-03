import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Users from './Users';
import handleOtherMethod from './helper';

function App() {

  const [data,setData] = useState("")

  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={()=>setData("hello")}>Click me</button>
    </div>
  );
}

export default App;
