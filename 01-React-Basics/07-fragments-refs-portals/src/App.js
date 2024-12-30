import './App.css';
import ClassCompRefs from './components/ClassCompRefs';
import ParentTable from './components/parentTable';
import Refs from './components/FuncCompRefs';
import ParentRefLadder from './components/ParentRefLadder';
import ParentForwardRefs from './components/ParentForwardRefs';
import PortalComp from './components/PortalComp';

function App() {
  const fnOpenPortal = (oEvent) => {
    if ( document.getElementsByClassName('portalClass').item(0)) {
      document.getElementsByClassName('portalClass').item(0).className = 'hideClass';
    } else {
      document.getElementsByClassName('hideClass').item(0).className = 'portalClass';
    }
  }

  return (
    <div className="App">
      <div className='AppFlex'>
        <ParentTable />
        <Refs />
        <ClassCompRefs />
        <ParentRefLadder />
        <ParentForwardRefs />
        <PortalComp />
      </div>
      <button onClick={fnOpenPortal} style={{width : "13rem", margin: "2rem auto"}}>Click to toggle portal</button>
      <footer>Read the readme.md for context</footer>
    </div>
  );
}

export default App;
