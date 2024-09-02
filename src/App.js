import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import './App.css';
import Header from './components/Header';
import Third from './components/Third';
import SignUp from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import Next from './components/Next';
import Service from './components/Service';

function App() {
  return (
    <Router>
     {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Third" element={<Third />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Next" element={<Next />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
