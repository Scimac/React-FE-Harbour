import SimpleStateCounter from "./components/SimpleStateCounter";
import './App.css'
import ComplexStateCounter from "./components/ComplexStateCounter";
import MultipleUseReducerHooksCounter from "./components/MultipleuseReducerHooks";
import GlobalCounter from "./components/GlobalCounter";

function App() {
  return (
    <div className="App">
      <SimpleStateCounter />
      <hr></hr>
      <ComplexStateCounter />
      <hr></hr>
      <MultipleUseReducerHooksCounter />
      <hr></hr>
      <GlobalCounter />
    </div>
  );
}

export default App;
