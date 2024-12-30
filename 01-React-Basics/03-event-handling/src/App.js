import './App.css';
import ClassEvent from './components/ClassCompEvent';
import FunnctionalEvent from './components/FuncCompEvent';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      <FunnctionalEvent />
      <ClassEvent />
      <br></br>
      <ParentComp />
    </div>
  );
}

export default App;
