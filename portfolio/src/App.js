import React, { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('about');

  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Navbar handleNavClick={handleNavClick} activeComponent={activeComponent} />
      {renderActiveComponent()}
    </div>
  );
}

export default App;
