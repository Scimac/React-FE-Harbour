import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakesCounter from './components/cakesCounter';
import IceCreamCounter from './components/IceCreamsCounter';
import CakesCustomCounter from './components/CakesCustomBuy';
import ItemCounter from './components/ItemCounter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakesCounter />
        <IceCreamCounter />
        <CakesCustomCounter />
        <ItemCounter isCake={true} />
        <ItemCounter isCake={false} />
      </div>
    </Provider>
  );
}

export default App;
