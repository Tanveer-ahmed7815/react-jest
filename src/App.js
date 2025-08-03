import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Users from './Users';
import handleOtherMethod from './helper';
import Employee from './Employee';

function App() {

  const[name,setName] = useState("")

  return (
    <div className="App">
    <h1>Props Testing</h1>
    <Employee name="Ahmed" />

    </div>
  );
}

export default App;
