import { createRef, useEffect, useState } from 'react';
import './App.css';
import StateUpdate from './components/StateUpdate/StateUpdate';
import ContextParent from './components/ContextUpdate/ContextParent';
import ReduxStoreApp from './components/ReduxUpdate/ReduxStoreApp';
import ReducerHookUpdate from './components/ReducerUpdate/ReducerHookUpdate';

function App() {
  const countRef = createRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    countRef.current.innerText = Number(countRef.current.innerText) + 1
  });

  return (
    <div style={{
      height: '100dvh',
      width: '100%'
    }}>
      <div className="row marginBlock">
          <span>Number of Re-Renderings - </span>
          <span ref={countRef}>0</span>
      </div>
      {/* <StateUpdate /> */}
      <ReducerHookUpdate />
      {/* <ContextParent /> */}
      {/* <ReduxStoreApp /> */}
    </div>
  )
}

export default App
