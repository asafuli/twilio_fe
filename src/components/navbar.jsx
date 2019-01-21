import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import navReducer from './../redux/reducers/navReducer';

const MapStateToProps = state => {
  const { navBarClass, lastScrollTop } = state.navReducer;
  return {
    navBarClass,
    lastScrollTop
  };
};

const ConnectedNavBar = props => {
  return (
    <div className='nav-container'>
      <nav
        className={`navbar fixed-top ${
          props.navBarClass
        } navbar-expand-lg navbar-dark bg-dark`}
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

const NavBar = connect(MapStateToProps)(ConnectedNavBar);
export default NavBar;
