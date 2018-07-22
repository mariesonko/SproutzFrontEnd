import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


  const Navbar = () => {
    return (
      <Menu>
        <Menu.Menu>
          <Menu.Item>
            <NavLink to='/'>Home</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to='/'>Events</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to='/'>Playdates</NavLink>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
            <Menu.Item>
              <NavLink to='/'>Profile</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to='/'>Signup</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to='/'>Login</NavLink>
            </Menu.Item>

        </Menu.Menu>
      </Menu>

    );
}

export default Navbar;
