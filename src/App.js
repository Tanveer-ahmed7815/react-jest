import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [data,setData] =useState("");

  return (
    <div className="App">
     <p>First React test case</p>
     <input type='text' value={data} onChange={(e)=>setData(e.target.value + "test")} placeholder='Enter username' />
     <br />
     <br />
     <button onClick={()=>setData("updated data")}>Update Data</button>
     <h1>{data}</h1>
     <br />
     <br />
     <img title='AI Genrated Image' src='https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg3919321_1443393332_n.jpg'
     />

    </div>
  );
}

export default App;
