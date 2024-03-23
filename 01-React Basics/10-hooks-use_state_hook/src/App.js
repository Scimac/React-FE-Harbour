import './App.css';
import AsyncUseSate from './components/AsyncUseSate';
import CounterClassComp from './components/CounterClassComp';
import CounterUseState from './components/CounterUseState';
import SpreadOperator from './components/SpreadOperator';

function App() {
  return (
    <div className="App">
      Counter implemented using class component
      <br></br>
      <CounterClassComp/>
      <br></br>
      Counter implemented using useState() hook
      <br></br>
      <CounterUseState />
      <br></br>
      <hr></hr>
      <br></br>
      <AsyncUseSate />
      <br></br>
      <hr></hr>
      <br></br>
      <SpreadOperator />
      <br></br>
      <hr></hr>
    </div>
  );
}

export default App;
