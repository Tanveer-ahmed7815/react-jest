import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Users from './Users';
import handleOtherMethod from './helper';

function App() {

  const[name,setName] = useState("")

  return (
    <div className="App">
      <h1>On change event testing</h1>
      <h2>{name}</h2>
      <input type='text' onChange={(e)=> setName(e.target.value)} placeholder='enter name'/>

    </div>
  );
}

export default App;
