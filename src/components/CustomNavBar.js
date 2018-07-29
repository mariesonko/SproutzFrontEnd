import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './CustomNavbar.css';
import './Home.css';

  class CustomNavBar extends React.Component{
    render(){
      return(
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Sproutz</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventkey={1} componentClass={Link} href='/' to='/'>
                home
              </NavItem>
              <NavItem eventkey={1} componentClass={Link} href='/Login' to='/login'>
                Login
              </NavItem>
              <NavItem eventkey={1} componentClass={Link} href='/Signup' to='/Signup'>
                Signup
              </NavItem>
              <NavItem eventkey={1} componentClass={Link} href='/Register' to='/Register'>
                Register
              </NavItem>
              <NavItem eventkey={1} componentClass={Link} href='Profile' to='Profile'>
                Profile
              </NavItem>
              <NavItem eventkey={1} componentClass={Link} href='CreatePlaydates' to='CreatePlaydates'>
                CreatePlaydates
              </NavItem>
              <NavItem eventkey={1} componentClass={Link} href='Events' to='Events'>
                Events
              </NavItem>
              <NavItem eventkey={1} componentClass={Link} href='MyPlaydates' to='MyPlaydates'>
                MyPlaydates
              </NavItem>
              <NavItem eventkey={1} componentClass={Link} href='Welcome' to='Welcome'>
                Welcome
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      )
    }
  }

export default CustomNavBar;