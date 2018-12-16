import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const NavBar = props => {
  return (
    <div className='nav-container'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <NavLink className='nav-link' to='/flight'>
                Flight
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/accomodation'>
                Accomodation
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/map'>
                Map
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/info'>
                Useful info
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
