import './App.css';
import ClickCounter from './components/ClickCounter';
import CounterRenderProps from './components/CounterRenderProps';
import FunctionAsProp from './components/FunctionAsProp';
import HoverByRenderProp from './components/HoverByRenderProp';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">

      <h3>Higher Order Component</h3>
      <HoverCounter name='Craft' />
      <ClickCounter name='Clikky' />
      <br />

      <h3>Render Props</h3>

      {/* render=() is more of the accepted coding convention  */}
      <div>Passing function as a prop </div>
      <br />
      <FunctionAsProp render={(isLoggedIn) => isLoggedIn ? "Welcome Mac" : "Welcome User"} />


      <div>Rendering Props</div>
      <br />
      {/* Additional data can be passed as normal props */}
      <CounterRenderProps freqn="5" >
        { (count,incrementCount) => {
          return <ClickCounter count={count} countIncrementFn={incrementCount} />
        }}
      </CounterRenderProps>

      {/* General convention is to pass is as children props, but we can also pass it as normal pros */}
      {/* <CounterRenderProps freqn="10" render = { (count,incrementCount) => {
          return <HoverByRenderProp count={count} countIncrementFn={incrementCount} />
        }} /> */}

      <CounterRenderProps freqn="10">
        { (count,incrementCount) => {
          return <HoverByRenderProp count={count} countIncrementFn={incrementCount} />
        }}
      </CounterRenderProps>
    </div>
  );
}

export default App;
