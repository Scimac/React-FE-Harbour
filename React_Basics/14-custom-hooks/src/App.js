import './App.css';
import Counter from './components/Counter';
import DocTitleChange from './components/DocTitleChange';
import InputForm from './components/InputForm';

function App() {
  return (
    <div className="App">
      <DocTitleChange />
      <Counter />
      <InputForm />
    </div>
  );
}

export default App;
