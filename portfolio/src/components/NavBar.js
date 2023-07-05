import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'

const Navbar = () => {
  return (
 
      <nav className="navbar">
        <div className="navbar-brand">Portfolio</div>

        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeClassName="active">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
