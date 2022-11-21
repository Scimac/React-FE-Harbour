import { Provider } from 'react-redux';
import './App.css';
import UsersContainer from './components/UsersContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
