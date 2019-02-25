import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import loginReducer from './../redux/reducers/loginReducer';

const MapStateToProps = ({
  navReducer: { navBarClass, lastScrollTop },
  loginReducer: { loggedIn },
  userReducer: { user }
}) => {
  return {
    navBarClass,
    lastScrollTop,
    loggedIn,
    user
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
          {!props.loggedIn && (
            <ul className='navbar-nav navbar-right'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/login'>
                  Login
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/home'>
                  Register
                </NavLink>
              </li>
            </ul>
          )}
          {props.loggedIn && (
            <ul className='navbar-nav navbar-right'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/home'>
                  Logout
                </NavLink>
              </li>
              <li className='nav-item'>{props.user}</li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

const NavBar = withRouter(connect(MapStateToProps)(ConnectedNavBar));
export default NavBar;
