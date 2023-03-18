import './App.css';
import LifecycleCompParent from './components/lifecycleCompParent';
import ParentErrorBoundary from './components/ParentErrorBoundary';
import ParentForPure from './components/ParentForPure';

function App() {
  return (
    <div className="App">
      <LifecycleCompParent></LifecycleCompParent>
      <br />
      <br />
      <br />
      <ParentForPure />
      <br />
      <br />
      <br />
      <h3>Implementing Error Boundaries</h3>
      <ParentErrorBoundary/>
    </div>
  );
}

export default App;
