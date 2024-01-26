import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Home from './Pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Account from './Pages/Account';
import Protectedroute from './components/Protectedroute';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/account' element={<Protectedroute><Account/></Protectedroute>}/>
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
