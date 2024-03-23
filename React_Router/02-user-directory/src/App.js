import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About';
import { NavBar } from './components/NavBar';
import { UserInfo } from './components/UserInfo';
import { NoMatch } from './components/NoMatch';
import { PersonalInfo } from './components/PersonalInfo';
import { EmployeeInfo } from './components/EmployeeInfo';

export const UserData = React.createContext();
const aUserObj = [{
  "userName": "User 1",
  "userId": "us001",
  "userRole": "Customer"
}, {
  "userName": "User 2",
  "userId": "us002",
  "userRole": "Customer"
}, {
  "userName": "User 3",
  "userId": "us003",
  "userRole": "Customer"
}, {
  "userName": "User 4",
  "userId": "us004",
  "userRole": "Customer"
}, {
  "userName": "User 5",
  "userId": "us005",
  "userRole": "Customer"
}, {
  "userName": "User 6",
  "userId": "us006",
  "userRole": "Admin"
}];

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={
          <UserData.Provider value={aUserObj} >
            <Home />
          </UserData.Provider>
        } />
        <Route path='/about' element={<About />} />
        {/* Here I have included, two URL prams. Check userInfo component for how to comsume params */}
        <Route path='/userInfo/:userId/:isAdmin' element={<UserInfo />} >

          {/* Please mind that here I am using relative path not absolute path... Path the formed by React using the nesting*/}
          <Route index element={<PersonalInfo />} />
          <Route path='personalInfo' element={<PersonalInfo />} />
          <Route path='employeeInfo' element={<EmployeeInfo />} />

        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
