import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakesCounter from './components/cakesCounter';
import IceCreamCounter from './components/IceCreamsCounter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakesCounter />
        <IceCreamCounter />
      </div>
    </Provider>
  );
}

export default App;
