import StyledComp from './components/StylesheetUse';
import './App.css';
import './stylesheets/styleComps.css'
import classesDef from './stylesheets/moduleSheets.module.css'
import FormComp from './components/FormComp';

function App() {
  return (
    <div className="App">
      <StyledComp toggleClass={true} />
      <StyledComp toggleClass={false} />
      <br />
      <h2 className={classesDef.greyText}>CSS from the css moduleSheets</h2>
      <h2 className='styled-text'>Css from the stylesheets</h2>
      <h2 className={classesDef.purpleText}>CSS from the css moduleSheets</h2>
      <br/>
      <FormComp />
    </div>
  );
}

export default App;
