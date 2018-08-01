import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { postLoginInfo, logout } from '../actions/index'
import { connect } from 'react-redux'
import '../layout/CustomNavbar.css';
import '../layout/Home.css';

  class CustomNavBar extends React.Component{
    
    render(){
      console.log(this.props.current_family);
      return(
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'><h3>Sproutz</h3></Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventkey={1} componentClass={Link} href='/' to='/'>
                home
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
                {/* Welcome */}
              </NavItem>
              <NavItem eventkey={1} componentClass={Link} href='/Signup' to='/Signup'>
                Signup
              </NavItem>
              <NavItem eventkey={1} componentClass={Link} href='/Register' to='/Register'>
                Register
              </NavItem>
              { this.props.current_family.id ? (<NavItem onClick={this.props.logout} eventkey={1} componentClass={Link} href='/Logout' to='/logout'>
                Logout
              </NavItem>) : (<NavItem eventkey={1} componentClass={Link} href='/Login' to='/login'>
                Login
              </NavItem>)}

            </Nav>
          </Navbar.Collapse>
        </Navbar>

      )
    }
  }
  const mapStateToProps = (state) => {
    return { current_family: state.auth.current_family }
  }

export default connect(mapStateToProps, { postLoginInfo, logout })(CustomNavBar);
