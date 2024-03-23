import React from 'react';
import './App.css';
import CounterClass from './components/CounterClass';
import CounterHooks from './components/CounterHooks';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      <h4>UseEfect Hook Implementation</h4>
      <CounterClass />
      <br></br>
      <CounterHooks />
      <br></br>
      <hr></hr>
      <br></br>
      <MouseContainer />
      <br></br>
      <hr></hr>
    </div>
  );
}

export default App;
