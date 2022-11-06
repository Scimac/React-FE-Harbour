import './App.css';
import UseCallbackDemo from './components/UseCallbackDemo';
import UseMemoDemo from './components/UseMemoDemo';
import UseRefDemo from './components/UseRefDemo';

function App() {
  return (
    <div className="App">
      <UseCallbackDemo />
      <br />
      <hr />
      <UseMemoDemo />
      <br />
      <hr />
      <UseRefDemo />
    </div>
  );
}

export default App;
