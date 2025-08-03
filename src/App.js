import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Users from './Users';
import handleOtherMethod from './helper';

function App() {

  const [data,setData] =useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setData(true)
    },1000)
  })

  return (
    <div className="App">
    <h1>findBy and findAllBy</h1>
    {
      data ? <h1>data found</h1> : <h1>no data found</h1>
    }

    </div>
  );
}

export default App;
