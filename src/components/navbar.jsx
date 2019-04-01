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
        <Nav
          className='mr-auto'
          onSelect={() => closeNav()}
          onClick={() => closeClickNav()}
        >
          <Nav.Link as={NavLink} className='nav-link' to='/flight'>
            Flight
          </Nav.Link>
          <Nav.Item as={NavLink} className='nav-item' to='/map'>
            map
          </Nav.Item>
          <Nav.Link href='#features'>
            <NavLink className='nav-link' to='/accomodation'>
              Accomodation
            </NavLink>
          </Nav.Link>
          <Nav.Link href='#features'>
            <div>
              <NavLink className='nav-link' to='/map'>
                Map
              </NavLink>
            </div>
          </Nav.Link>
          <Nav.Link href='#features'>
            <NavLink className='nav-link' to='/home'>
              My Page
            </NavLink>
          </Nav.Link>
          <Nav.Link href='#features'>
            <NavLink className='nav-link' to='/chat'>
              Chat
            </NavLink>
          </Nav.Link>
        </Nav>
        {!props.loggedIn && (
          <Nav>
            <Nav.Link href='#deets'>
              <NavLink className='nav-link' to='/login'>
                Login
              </NavLink>
            </Nav.Link>
            <Nav.Link href='#deets'>
              <NavLink className='nav-link' to='/home'>
                Register
              </NavLink>
            </Nav.Link>
          </Nav>
        )}
        {props.loggedIn && (
          <Nav>
            <Nav.Link href='#deets'>
              <navLink className='nav-link active' to='/home'>
                {props.user}
              </navLink>
            </Nav.Link>
            <Nav.Link href='#deets'>
              <NavLink className='nav-link' to='/Logout'>
                Logout
              </NavLink>
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

const NavBar = withRouter(connect(MapStateToProps)(ConnectedNavBar));
export default NavBar;
