import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Child1 from './Component/Child1';


function App() {
  const data = useSelector((c) => c.show.value);
   

  return (
    <div className='App'>
      <h1>App- {data}</h1>
 
    <Child1 />
      
    </div>

    
  );
}

export default App;
