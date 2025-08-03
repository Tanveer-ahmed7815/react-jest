import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Users from './Users';
import handleOtherMethod from './helper';
import Employee from './Employee';

const App = () => {
  const [count, setCounter] = useState(0);
  return (
    <div className="App">

      <button onClick={()=> setCounter(count => count + 1)}>Click to increase count: {count}</button>
      <h2>Heading 2</h2>
      <h5>heading 5</h5>

    </div>
  );
}

export default App;
