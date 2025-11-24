import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        <div className="logo-wrap">
          <img src="/airplane.png" alt="Logo" className="logo" />
        </div>
        <div className="links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'btn active' : 'btn'}>Home</NavLink>
          <NavLink to="/my-ac" className={({ isActive }) => isActive ? 'btn active' : 'btn'}>My AC</NavLink>
          <NavLink to="/af-ac" className={({ isActive }) => isActive ? 'btn active' : 'btn'}>AF AC</NavLink>
          <NavLink to="/harmon" className={({ isActive }) => isActive ? 'btn active' : 'btn'}>Harmon</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
