import React from 'react';
import '../styles/NavBar.css'

const Navbar = () => {
  return (

    <nav className="navbar">
      <div className="navbar-brand">Hsc.</div>
      <ul className='navbar-list'>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
