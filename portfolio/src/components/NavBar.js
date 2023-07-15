import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'

const Navbar = () => {
  return (
 
      <nav className="navbar">
        <div className="navbar-brand">Portfolio</div>

        <ul className='navbar-list'>
          <li>
            {/* <NavLink exact to="/" activeClassName="active">About</NavLink> */}
            <a href="#about">About</a>
          </li>
          <li>
            {/* <NavLink to="/skills" activeClassName="active">Skills</NavLink> */}
            <a href="#skills">Skills</a>
          </li>
          <li>
            {/* <NavLink to="/contact" activeClassName="active">Contact</NavLink> */}
            <a href="#work">Work</a>
          </li>
          {/* <li>
            { <NavLink to="/projects" activeClassName="active">Projects</NavLink> }
            <a href="#projects">Projects</a>
          </li> */}
          <li>
            {/* <NavLink to="/contact" activeClassName="active">Contact</NavLink> */}
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
