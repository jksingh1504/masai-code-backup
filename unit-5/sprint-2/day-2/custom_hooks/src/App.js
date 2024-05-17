import React from 'react';
import './App.css';
import Timer from './components/Timer';
import Stopwatch from './components/Stopwatch';

function App() {
  const [toggle,setToggle]=React.useState(false)

  return (
    <div className="App">
      <button onClick={()=>setToggle(true)}>Timer</button>
      <button onClick={()=>setToggle(false)}>Stopwatch</button>
      {toggle?<Timer/>:<Stopwatch/>}
    </div>
  );
}

export default App;
