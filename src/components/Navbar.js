import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';



  const Navbar = ({ path }) => {
    return (
      <Menu>
        <Menu.Menu>
          <Menu.Item>
            <NavLink to='/'>Home</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to='/events'>Events</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to='/CreatePlaydates'>Create Playdates</NavLink>
          </Menu.Item>

          <Menu.Item>
            <NavLink to='/MyPlaydates'>My Playdates</NavLink>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
            <Menu.Item>
              <NavLink to='/Profile'>Profile</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to='/Register'>Register</NavLink>
            </Menu.Item>
            <Menu.Item active={path === '/Signup'}>
              <NavLink to='/Signup'>Signup</NavLink>
            </Menu.Item>
            <Menu.Item active={path === '/Login'}>
              <NavLink to='/Login'>Login</NavLink>
            </Menu.Item>
        </Menu.Menu>
      </Menu>

    );
}

export default Navbar;
