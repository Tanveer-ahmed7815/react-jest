import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Users from './Users';
import handleOtherMethod from './helper';
import Employee from './Employee';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [])
  const getData = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    result = await result.json();
    setData(result)
  }

  console.log(data);


  return (
    <div>

      <h1>List of users</h1>
      <ul>
        {
          data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))
        }
      </ul>

    </div>
  );
}

export default App;
