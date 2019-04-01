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
      className={props.navBarClass}
    >
      <Navbar.Brand href='#home'>The Black Forest X</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto '>
          <Nav.Link href='#features'>
            <NavLink className='nav-link' to='/flight'>
              Flight
            </NavLink>
          </Nav.Link>
          {/*<Nav.Link href='#features'>
            <NavLink className='nav-link' to='/accomodation'>
              Accomodation
            </NavLink>
          </Nav.Link>
          <Nav.Link href='#features'>
            <NavLink className='nav-link' to='/map'>
              Map
            </NavLink>
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
          </Nav.Link> */}
        </Nav>
        {!props.loggedIn && (
          <Nav>
            {/* <Nav.Link href='#deets'>
              <NavLink className='nav-link' to='/login'>
                Login
              </NavLink>
            </Nav.Link>
            <Nav.Link href='#deets'>
              <NavLink className='nav-link' to='/home'>
                Register
              </NavLink>
            </Nav.Link> */}
          </Nav>
        )}
        {props.loggedIn && (
          <Nav>
            {/* <Nav.Link href='#deets'>
              <navLink className='nav-link active' to='/home'>
                {props.user}
              </navLink>
            </Nav.Link>
            <Nav.Link href='#deets'>
              <NavLink className='nav-link' to='/Logout'>
                Logout
              </NavLink>
            </Nav.Link> */}
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

const NavBar = withRouter(connect(MapStateToProps)(ConnectedNavBar));
export default NavBar;
