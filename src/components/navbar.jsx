import React, { useState } from 'react';
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
  const [isNavExpanded, setNavExpanded] = useState(false);

  const toggleNavExpanded = expanded => {
    console.log('Ontoggle --> toggleNavExpanded');
    setNavExpanded(!expanded);
    console.log('Ontoggle --> expanded = ', expanded);
  };

  const closeClickNav = () => {
    console.log('onClick --> closeClickNav ');
    setNavExpanded(false);
  };

  return (
    <Navbar
      expand='lg'
      bg='dark'
      variant='dark'
      onToggle={() => toggleNavExpanded(isNavExpanded)}
      expanded={isNavExpanded}
      className={`${props.navBarClass} fixed-top`}
    >
      <Navbar.Brand href='#home'>The Black Forest X</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto' onClick={() => closeClickNav()}>
          <Nav.Link as={NavLink} className='nav-link' to='/flight'>
            Flight
          </Nav.Link>
          <Nav.Link as={NavLink} className='nav-link' to='/accomodation'>
            Accomodation
          </Nav.Link>
          <Nav.Link as={NavLink} className='nav-link' to='/map'>
            Map
          </Nav.Link>
          <Nav.Link as={NavLink} className='nav-link' to='/home'>
            My Page
          </Nav.Link>
          <Nav.Link as={NavLink} className='nav-link' to='/chat'>
            Chat
          </Nav.Link>
        </Nav>
        {!props.loggedIn && (
          <Nav className='mr-auto' onClick={() => closeClickNav()}>
            <Nav.Link as={NavLink} className='nav-link' to='/login'>
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} className='nav-link' to='/home'>
              Register
            </Nav.Link>
          </Nav>
        )}
        {props.loggedIn && (
          <Nav className='mr-auto' onClick={() => closeClickNav()}>
            <Nav.Link as={NavLink} className='nav-link active' to='/home'>
              {props.user}
            </Nav.Link>
            <Nav.Link as={NavLink} className='nav-link' to='/Logout'>
              Logout
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

const NavBar = withRouter(connect(MapStateToProps)(ConnectedNavBar));
export default NavBar;
