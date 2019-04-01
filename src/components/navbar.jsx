import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';

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
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      className={`${props.navBarClass} fixed-top`}
    >
      <Navbar.Brand href='#home'>The Black Forest X</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto '>
          <NavLink className='nav-link' to='/flight'>
            Flight
          </NavLink>

          <NavLink className='nav-link' to='/accomodation'>
            Accomodation
          </NavLink>

          <NavLink className='nav-link' to='/map'>
            Map
          </NavLink>

          <NavLink className='nav-link' to='/home'>
            My Page
          </NavLink>

          <NavLink className='nav-link' to='/chat'>
            Chat
          </NavLink>
        </Nav>
        {!props.loggedIn && (
          <Nav>
            <NavLink className='nav-link' to='/login'>
              Login
            </NavLink>

            <NavLink className='nav-link' to='/home'>
              Register
            </NavLink>
          </Nav>
        )}
        {props.loggedIn && (
          <Nav>
            <navLink className='nav-link active' to='/home'>
              {props.user}
            </navLink>

            <NavLink className='nav-link' to='/Logout'>
              Logout
            </NavLink>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

const NavBar = withRouter(connect(MapStateToProps)(ConnectedNavBar));
export default NavBar;
