import {useState, useEffect} from 'react';
import './App.css';

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15;

  const addValue = () => {
    console.log("clicked", counter)
    // counter = setCounter + 1
    setCounter(counter + 1)
  }

  const minusValue = () => {
    console.log("clicked", counter)
    // counter = setCounter + 1
    setCounter(counter - 1)
  }

  useEffect(() => {
   if(counter > 20) setCounter(20) 
   if(counter  < 0) setCounter(0)
  },[counter])

  return (
    <div className="App align-items-center w-50 m-auto py-5">
    <h1>Counter project</h1>
    <h2>Counter value: {counter}</h2>

<div className='d-flex justify-content-around align-items-center py-5'>
    <button className='btn btn-info' onClick={addValue}>Add value {counter}</button> <br />
    <button className='btn btn-warning' onClick={minusValue}>Remove value</button>
    </div>
    </div>
  );
}

export default App;
