import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import NoMatchPath from './components/NoMatchPath';
import React from 'react';
import LoginUser from './components/LoginUser';
import AuthProvider from './contexts/Auth';
import NavBar from './components/NavBar';
import RequireLogin from './components/RequireLogin';

const LazyLoadComp = React.lazy(() => import('./components/About'));

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/about' element={<React.Suspense>
            <LazyLoadComp />
          </React.Suspense>} ></Route>
          <Route path='/profile' element={<RequireLogin><Profile /></RequireLogin>} ></Route>
          <Route path='/login' element={<LoginUser />} ></Route>
          <Route path='*' element={<NoMatchPath />} ></Route>
        </Routes>
      </div>
    </AuthProvider>

  );
}

export default App;
