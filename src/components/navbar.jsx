import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavBar from './navbar';

const NavBar = props => {
  let hiddenClass = '';

  const hideNavOnScroll = e => {
    hiddenClass = 'navbar-hidden';
    console.log(e);
  };

  return (
    <div className='nav-container'>
      <nav
        className={`navbar fixed-top ${hiddenClass} navbar-expand-lg navbar-dark bg-dark`}
        onScroll={e => this.hideNavOnScroll(e)}
      >
        <button
          className='navbar-toggler collapsed'
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
              <NavLink className='nav-link' to='/home'>
                My Page
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/myList'>
                My links
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
