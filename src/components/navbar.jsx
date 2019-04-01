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
          <Nav.Item>
            <NavLink className='nav-link' to='/flight'>
              Flight
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className='nav-link' to='/accomodation'>
              Accomodation
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <div>
              <NavLink className='nav-link' to='/map'>
                Map
              </NavLink>
            </div>
          </Nav.Item>
          <Nav.Item>
            <NavLink className='nav-link' to='/home'>
              My Page
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className='nav-link' to='/chat'>
              Chat
            </NavLink>
          </Nav.Item>
        </Nav>
        {!props.loggedIn && (
          <Nav>
            <Nav.Item>
              <NavLink className='nav-link' to='/login'>
                Login
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className='nav-link' to='/home'>
                Register
              </NavLink>
            </Nav.Item>
          </Nav>
        )}
        {props.loggedIn && (
          <Nav>
            <Nav.Item>
              <navLink className='nav-link active' to='/home'>
                {props.user}
              </navLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className='nav-link' to='/Logout'>
                Logout
              </NavLink>
            </Nav.Item>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

const NavBar = withRouter(connect(MapStateToProps)(ConnectedNavBar));
export default NavBar;
