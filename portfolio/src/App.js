import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <AnimatePresence mode='wait'>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </AnimatePresence>
    </div>
    </Router>
  );
};

export default App;
