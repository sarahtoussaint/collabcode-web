import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './components/pages/About'
import Team from './components/pages/Team'
import ScrollToTop from './ScrollToTop';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
       <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


