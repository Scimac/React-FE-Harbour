import './App.css';
import Greet from './components/Greet';
//import MyComp from './components/Greet';        --> Can be imported as any tag name
import { Welcome } from './components/Greet';
import GreetClass, { PropClassComp, PropFuncComp } from './components/Greet_ClassComp';
import { HelloVanilla, HelloJSX } from './components/Hello_JSX';
import StateClass from './components/subscribe_UseState';

function App() {
  return (
    <div className="App">  
      <Greet></Greet>
      <Welcome/>
      <GreetClass/>
      <HelloVanilla />
      <HelloJSX />.
      <br></br>
      <PropFuncComp name="inline Prop" CompType="Functional Component" />
      <PropFuncComp name="Children Prop" CompType="Functional Component">
        <p> The children prop are enclosed in component tag. As we don't know what 
            their value would be while making the component.</p>
      </PropFuncComp>
      <PropClassComp name="Class Children Prop" CompType="Class Component">
        <p> The props in class component are accessed using the 'this' keyword. 
            And as we know, 'this' keyword is functionallly scoped</p>
      </PropClassComp>
      <br></br>
      <StateClass />
    </div>
  );
}

export default App;
