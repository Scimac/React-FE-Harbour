import React, { useState } from 'react';
import './App.css';
import ParentLvl1 from './components/ParentLvl1';
import { UserContextProvider } from './components/userContext';
import PostsCollection from './PostsCollection';

export const jobDescContext = React.createContext();
export const humanAiDiffContext = React.createContext();


function App() {
  const [displayToggle, toggleDisplay] = useState(true);
  
  return (    
      <div className="App">
       <button onClick={() => toggleDisplay(!displayToggle) } > Toggle between Context API and HTTP content</button>
       <br></br>
       <br></br>
       { displayToggle && <humanAiDiffContext.Provider value="Human not AI" >
          <jobDescContext.Provider value="Software Dev">
            <UserContextProvider value='{"userFullName":"Makarand Patil","userName":"Mac21"}' >
              <ParentLvl1 />    
            </UserContextProvider>
          </jobDescContext.Provider>
        </humanAiDiffContext.Provider> }

      { !displayToggle && <PostsCollection/> }
    </div>
  )
}

export default App;
