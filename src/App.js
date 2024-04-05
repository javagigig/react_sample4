import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login';
import Search from './pages/Search';




function App() {
  return (
    <div>
      <Router>

        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/postAdd' element={<postAdd/>} />
            <Route path='/search' element={<Search/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;