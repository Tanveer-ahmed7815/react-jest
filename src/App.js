import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Users from './Users';
import handleOtherMethod from './helper';
import Employee from './Employee';

const App = (props) => {

  return (
    <div className="App">
    <h1>Functional Props Testing and Mocking</h1>

    <button onClick={props.testFunction}>Click</button>

    </div>
  );
}

export default App;
